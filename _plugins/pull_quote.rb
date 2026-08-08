# ==============================================================
# pull_quote.rb – auto-extracts a "crux" pull-quote sentence from
# each post and splices it into the rendered HTML, roughly at the
# midpoint of the post (see splice_into_output below) — not tucked
# up near the top after just 2-3 paragraphs.
#
# SCOPE: Lesson Plan posts (Teaching Diary entries whose slug
# contains "lesson-plan") are never touched by this plugin — no
# quote is computed, no HTML is spliced in. This mirrors the same
# exclusion applied in _layouts/post.html; if you ever add a new
# way of tagging Lesson Plans, update both places.
#
# HOW IT WORKS
# Runs on the :documents, :post_render hook, which fires *after*
# Liquid and Markdown conversion — so doc.output is final HTML, and
# for bilingual posts (e.g. _collections/_letters, which wrap each
# language's body in {% if site.lang == 'ur' %} ... {% endif %})
# only the current build's language block survives. That means the
# paragraph/sentence logic below never has to know about Liquid or
# language switching itself; it just reads plain HTML.
#
# PRIORITY ORDER for the quote text:
#   1. Manual override: front matter `pull_quote_en` / `pull_quote_ur`
#      (whichever matches the current build's site.lang), if set and
#      non-empty. This is the hook for hand-picking/curating a quote
#      later without touching this file.
#   2. Automatic extraction: score every sentence in the post's
#      prose paragraphs (skipping paragraph 1, and skipping non-prose
#      blocks like the leading date <div> or lesson-plan <table>s),
#      pick the highest-scoring one.
#   3. Fallback: the post's own description_en / description_ur.
#   4. If none of the above exist, no pull-quote is rendered at all
#      (graceful degradation for very short/sparse posts).
# ==============================================================

require "cgi"

module Kitabomori
  module PullQuote
    NAME_HINTS = [
      # English referents commonly quoted/invoked in these posts
      "Freud", "Iqbal", "Gandhi", "Martin Luther King", "MLK",
      # Urdu equivalents
      "فرائیڈ", "اقبال", "گاندھی", "مارٹن لوتھر کنگ"
    ].freeze

    ACCENT_GROUPS = {
      "articles"      => "articles",
      "reviews"       => "reviews",
      "letters"       => "letters",
      "events"        => "events",
      "short_stories" => "creative",
      "poetry"        => "creative",
      "dialogues"     => "creative",
      "satire"        => "creative",
      "nonfiction"    => "creative",
      "reflections"   => "creative",
      "diary"         => "diary"
    }.freeze

    module_function

    def doc_slug(doc)
      # Mirrors how Jekyll's Liquid `page.slug` drop resolves: an
      # explicit front-matter `slug:` wins, otherwise it's derived
      # from the filename. `doc.data["slug"]` alone is nil for every
      # post here (none of them set it explicitly), so falling back
      # to basename_without_ext is required, not optional.
      (doc.data["slug"] || doc.basename_without_ext).to_s
    end

    def lesson_plan?(doc)
      collection = doc.respond_to?(:collection) ? doc.collection.label : nil
      collection == "diary" && doc_slug(doc).include?("lesson-plan")
    end

    def accent_group_for(doc)
      collection = doc.respond_to?(:collection) ? doc.collection.label : nil
      ACCENT_GROUPS[collection] || "diary"
    end

    def process(doc, site)
      return unless doc.respond_to?(:output) && doc.output.is_a?(String) && !doc.output.empty?
      return if lesson_plan?(doc)

      lang = (site.config["lang"] || "en").to_s
      is_rtl = (site.config["direction"] || "ltr").to_s == "rtl"
      accent_group = accent_group_for(doc)

      manual = lang == "ur" ? doc.data["pull_quote_ur"] : doc.data["pull_quote_en"]
      manual = manual.to_s.strip

      paragraphs = prose_paragraph_spans(doc.output)

      quote_text = nil
      source = nil

      if !manual.empty?
        quote_text = manual
        source = "manual"
      else
        candidates = paragraphs.length > 1 ? paragraphs[1..-1] : paragraphs
        best = best_sentence(candidates.map { |p| p[:text] }, lang)
        if best
          quote_text = best
          source = "auto"
        end
      end

      if quote_text.nil?
        fallback = lang == "ur" ? doc.data["description_ur"] : doc.data["description_en"]
        fallback = fallback.to_s.strip
        unless fallback.empty?
          quote_text = fallback
          source = "fallback"
        end
      end

      return if quote_text.nil? || quote_text.empty?

      quote_html = render_quote_html(quote_text, is_rtl, accent_group, source)
      doc.output = splice_into_output(doc.output, paragraphs, quote_html)
    end

    # Finds every top-level <p ...>...</p> block in the rendered HTML,
    # in order, along with its plain-text content and byte offsets.
    # Kramdown wraps every genuine markdown/HTML paragraph in <p> by
    # the time this runs, whether the source was plain markdown or
    # literal HTML — so this one pattern covers both. Leading
    # metadata blocks (a bare date, a lesson-plan-style table row)
    # never appear as <p> in the output, so they're naturally excluded
    # without any extra filtering.
    def prose_paragraph_spans(html)
      spans = []
      html.to_enum(:scan, /<p\b[^>]*>.*?<\/p>/mi).each do
        m = Regexp.last_match
        text = strip_tags(m[0])
        next if text.strip.empty?
        spans << { text: text, start: m.begin(0), finish: m.end(0) }
      end
      spans
    end

    def strip_tags(html)
      # Decode entities (&amp; -> &, &quot; -> ", etc.) so downstream
      # sentence text is plain characters, not markup — otherwise an
      # "&" in the original post gets double-escaped when we
      # re-escape the chosen sentence for output later.
      text = html.gsub(/<[^>]+>/, " ")
      text = CGI.unescapeHTML(text)
      text.gsub(/\s+/, " ").strip
    end

    QUOTE_CHARS = ['"', "\u201C", "\u201D", "'", "\u2018", "\u2019"].freeze

    def split_sentences(text, lang)
      # Split on sentence-ending punctuation OR a closing quote mark,
      # each followed by whitespace — a plain "boundary = punctuation"
      # rule misses the common "...ہے۔" ... '." pattern where a quote
      # closes right after a mid-quotation full stop, which otherwise
      # glues the quoted sentence to whatever follows it.
      raw =
        if lang == "ur"
          text.split(/(?<=[۔؟!"“”'’])\s+/)
        else
          text.split(/(?<=[.!?"“”'’])\s+/)
        end

      # Then re-merge any run of fragments that leaves a quotation
      # mark open, so a quoted sentence spanning the split point above
      # comes back together as one candidate instead of a dangling
      # opening quote plus an unrelated tail sentence.
      merged = []
      buffer = ""
      raw.each do |fragment|
        buffer = buffer.empty? ? fragment : "#{buffer} #{fragment}"
        quote_count = QUOTE_CHARS.sum { |c| buffer.count(c) }
        next if quote_count.odd? && buffer.split(/\s+/).length < 45
        merged << buffer
        buffer = ""
      end
      merged << buffer unless buffer.empty?
      merged
    end

    def best_sentence(paragraph_texts, lang)
      best_text = nil
      best_score = -1

      paragraph_texts.each do |para|
        split_sentences(para, lang).each do |sentence|
          sentence = sentence.strip
          next if sentence.empty?

          word_count = sentence.split(/\s+/).length
          next if word_count < 6 || word_count > 45
          # Skip things that are mostly numbers/dates (e.g. a stray
          # "March 31, 2022" line that slipped into a <p>).
          next if sentence.gsub(/[^0-9]/, "").length > sentence.length / 2

          score = 0
          score += 10 - (word_count - 18).abs * 0.3 # sweet spot ~18 words
          score += 5 if sentence =~ /["“”'‘’«»]/
          score += 5 if NAME_HINTS.any? { |name| sentence.include?(name) }

          if score > best_score
            best_score = score
            best_text = sentence
          end
        end
      end

      best_text
    end

    def render_quote_html(text, is_rtl, accent_group, source)
      dir = is_rtl ? "rtl" : "ltr"
      fallback_class = source == "fallback" ? " pull-quote-fallback" : ""
      escaped = CGI.escapeHTML(text)
      aria_label = is_rtl ? "اقتباس" : "Pull quote"
      <<~HTML
        <aside class="pull-quote#{fallback_class}" dir="#{dir}" data-section="#{accent_group}" aria-label="#{aria_label}">
          <span class="pull-quote-glyph" aria-hidden="true">&#8221;</span>
          <blockquote class="pull-quote-text">#{escaped}</blockquote>
        </aside>
      HTML
    end

    # Inserts quote_html after the paragraph closest to the middle of
    # the post, so roughly half the prose sits above the quote and
    # half below — not tucked up near the top after just 2-3
    # paragraphs. For an N-paragraph post, that's after paragraph
    # floor(N/2): a 4-paragraph post gets it after paragraph 2 (2
    # before, 2 after); a 7-paragraph post gets it after paragraph 3
    # (3 before, 4 after). A single-paragraph post has nowhere else
    # to put it, so it goes right after that one paragraph.
    def splice_into_output(html, paragraphs, quote_html)
      return html if paragraphs.empty?

      n = paragraphs.length
      before_count = [n / 2, 1].max
      index = before_count - 1
      insert_at = paragraphs[index][:finish]

      html[0...insert_at] + quote_html + html[insert_at..-1]
    end
  end
end

Jekyll::Hooks.register :documents, :post_render do |doc|
  Kitabomori::PullQuote.process(doc, doc.site)
end
