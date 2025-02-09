import Link from "next/link"

export default function KeywordResearchToolsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/keyword-research" className="text-orange-400 hover:text-orange-300">
              MODULE 2: KEYWORD RESEARCH
            </Link>
            <span>›</span>
            <Link href="/courses/keyword-research" className="text-orange-400 hover:text-orange-300">
              HOW TO CONDUCT KEYWORD RESEARCH
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Free Tools for Keyword Research
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Free tools can be invaluable for conducting keyword research, especially when you're starting out and may
            not have the resources to invest in premium tools. Here's a step-by-step guide on how to utilize some of the
            best free tools available for keyword research.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">SEOrocket.ai</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing the Tool:</h3>
                <p className="text-gray-300">Navigate to SEOrocket.ai and sign up for a free account if required.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using SEOrocket.ai:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Enter a seed keyword related to your business, such as "real estate agent in [City]" or "homes for
                    sale in [Neighborhood]."
                  </li>
                  <li>
                    The tool will generate a list of related keywords along with their search volumes and competition
                    scores.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing Keywords:</h3>
                <p className="text-gray-300">
                  Focus on keywords that are relevant to your real estate niche and have a good balance of search volume
                  and lower competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Exporting Data:</h3>
                <p className="text-gray-300">
                  Export the list of keywords for further analysis and use in your content strategy.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Google Keyword Planner</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing the Tool:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Go to Google Ads and sign up for a free account if you don't have one.</li>
                  <li>Once logged in, navigate to Tools & Settings - Planning - Keyword Planner.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Google Keyword Planner:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Select "Discover new keywords" to explore new keyword ideas based on your seed keywords or website
                    URL.
                  </li>
                  <li>Enter a broad keyword related to your business.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing the Results:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Review the keyword suggestions list, focusing on keywords with moderate search volume and low
                    competition.
                  </li>
                  <li>Pay attention to seasonal trends and how search volumes fluctuate over time.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Google Autocomplete</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Google Autocomplete:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Start typing a broad keyword in Google's search bar and observe the suggestions.</li>
                  <li>Each suggestion represents a commonly searched phrase related to your primary keyword.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Extracting Keywords:</h3>
                <p className="text-gray-300">
                  Make a list of these suggested keywords and note any long-tail keywords or specific phrases that
                  potential clients might use.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">AnswerThePublic</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing the Tool:</h3>
                <p className="text-gray-300">
                  Go to AnswerThePublic and enter a broad keyword related to your real estate business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Understanding the Results:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    The tool provides a visual representation of questions, prepositions, comparisons, and alphabetical
                    listings related to your keyword.
                  </li>
                  <li>Focus on the questions and phrases that reflect intent to buy or sell property.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Exporting Data:</h3>
                <p className="text-gray-300">
                  Download the visualization or the complete list of keywords for easy reference and analysis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Google Trends</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Google Trends:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Visit Google Trends and enter a keyword to see its popularity over time.</li>
                  <li>Compare the popularity of different keywords to identify trends and seasonal fluctuations.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing Data:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Use the "Related queries" section to discover additional keyword ideas that are currently trending.
                  </li>
                  <li>Focus on keywords that show increasing trends to capitalize on growing search interest.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Ubersuggest</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing the Tool:</h3>
                <p className="text-gray-300">Go to Ubersuggest and enter a seed keyword related to your business.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Ubersuggest:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    The tool will provide keyword ideas, search volume, SEO difficulty, and paid difficulty for each
                    keyword.
                  </li>
                  <li>Look for keywords with a good balance of search volume and SEO difficulty.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Exporting Data:</h3>
                <p className="text-gray-300">Download the list of keywords and related metrics for your reference.</p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Choose at least two of these free tools, including SEOrocket.ai, and dedicate some time to exploring
              potential keywords for your real estate business. Create a comprehensive list of about 20 keywords,
              focusing on those with moderate search volumes and lower competition. Utilize this list to guide your
              content creation and optimization efforts effectively.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/keyword-research"
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
              Back to How to Conduct Keyword Research
            </Link>
            <Link
              href="/courses/keyword-research/analysis"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Analyzing Search Volume and Competition
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

