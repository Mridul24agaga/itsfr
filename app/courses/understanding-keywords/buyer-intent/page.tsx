import Link from "next/link"

export default function BuyerIntentPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/understanding-keywords" className="text-orange-400 hover:text-orange-300">
              MODULE 2: KEYWORD RESEARCH
            </Link>
            <span>›</span>
            <Link href="/courses/understanding-keywords" className="text-orange-400 hover:text-orange-300">
              UNDERSTANDING KEYWORDS
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">Buyer Intent Keywords</h1>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">What Are Buyer Intent Keywords?</h2>
            <p className="text-gray-300 leading-relaxed">
              Buyer intent keywords, also known as commercial intent keywords, are search terms used by individuals who
              are not just casually browsing but are seriously considering making a purchase or taking a specific
              action. For a real estate agent, these keywords can indicate various stages of the buying process, from
              initial research to the final decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Why Are Buyer Intent Keywords Important?</h2>
            <p className="text-gray-300 mb-6">
              Buyer intent keywords are crucial because they allow you to target potential clients who are ready to
              engage with your services or make a purchase. By optimizing your website and content for these keywords,
              you can:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Attract qualified leads who are more likely to convert.</li>
              <li>
                Improve your visibility in search engine results pages (SERPs) for searches with high commercial intent.
              </li>
              <li>
                Maximize your return on investment (ROI) by focusing on prospects who are closer to making a decision.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Types of Buyer Intent Keywords</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Transactional Keywords:</h3>
                <p className="text-gray-300">
                  These are searches that indicate a strong intent to make a purchase or take a specific action.
                  Examples include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"Buy a house in [City]"</li>
                  <li>"Houses for sale in [Neighborhood]"</li>
                  <li>"Real estate agents near me"</li>
                  <li>"Contact a real estate agent in [City]"</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Commercial Investigation Keywords:</h3>
                <p className="text-gray-300">
                  These searches suggest that the user is comparing options or researching before making a final
                  decision. Examples include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"Best real estate agents in [City]"</li>
                  <li>"Top-rated real estate companies in [City]"</li>
                  <li>"Compare real estate agents in [City]"</li>
                  <li>"Real estate market trends in [City]"</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Navigational Keywords:</h3>
                <p className="text-gray-300">
                  These searches indicate the user is looking for a specific website or type of service. Examples might
                  be:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"[Your Real Estate Agency Name]"</li>
                  <li>"Contact [Your Agency Name]"</li>
                  <li>"[City] real estate listings [Your Agency Name]"</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">How to Identify Buyer Intent Keywords</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Brainstorming:</h3>
                <p className="text-gray-300">
                  Start by thinking about the various stages of the buying process and the questions or needs your
                  clients typically have. Write down phrases you believe they would search for at each stage.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Analyzing Competitors:</h3>
                <p className="text-gray-300">
                  Explore the websites and content of your competitors. Note the keywords they are targeting,
                  particularly in their high-ranking pages and advertisements.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Using Keyword Tools:</h3>
                <p className="text-gray-300">
                  Utilize tools like Google Keyword Planner, Ubersuggest, SEMrush, or Ahrefs to find related keywords
                  and analyze their search volume, competition, and intent.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Examining Search Results:</h3>
                <p className="text-gray-300">
                  Enter potential buyer intent keywords into Google and observe the top-ranking pages. Look for keywords
                  and phrases commonly used in titles, meta descriptions, and content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Practical Tips for Using Buyer Intent Keywords</h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Incorporate Keywords Naturally:</h3>
                <p className="text-gray-300">
                  Make sure to incorporate buyer intent keywords naturally within your content—such as in titles,
                  headings, meta descriptions, and body text—without overstuffing. This will help maintain readability
                  and prevent penalties from search engines.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Create Landing Pages:</h3>
                <p className="text-gray-300">
                  Develop specific landing pages targeting high-intent keywords. These could be city-specific pages,
                  service-specific pages, or pages focusing on certain property types or features.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Optimize Your Calls to Action (CTAs):</h3>
                <p className="text-gray-300">
                  Make sure your CTAs (e.g., "Schedule a Viewing," "Contact Us Today") align with the buyer intent
                  keywords you're targeting. The more aligned your CTAs are with the user's intent, the higher the
                  likelihood of conversions.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Monitor and Adjust:</h3>
                <p className="text-gray-300">
                  Track the performance of your buyer intent keywords using tools like Google Analytics and Google
                  Search Console. Regularly review and adjust your strategy based on what is working best to attract and
                  convert high-intent leads.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Start by identifying five high-intent buyer keywords that are relevant to your real estate business. Use a
              free tool like Google Autocomplete to get suggestions and note the types of phrases that come up. Write
              these down, as you'll use them in the next section where we'll dive into conducting comprehensive keyword
              research.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/understanding-keywords/keyword-types"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Previous: Long-Tail vs. Short-Tail Keywords
            </Link>
            <Link
              href="/courses/keyword-research"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: How to Conduct Keyword Research
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

