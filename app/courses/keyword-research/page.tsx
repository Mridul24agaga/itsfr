import Link from "next/link"

export default function KeywordResearchPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 2: KEYWORD RESEARCH
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            How to Conduct Keyword Research
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Effective keyword research ensures that your content is aligned with what potential clients are searching
            for, thereby increasing your chances of ranking higher in search engine results pages (SERPs).
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Guide to Conducting Keyword Research:</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">1. Brainstorm Seed Keywords:</h3>
                <p className="text-gray-300">
                  Start by brainstorming a list of basic keywords related to your real estate business. Think about the
                  terms your clients might use when searching for a property or real estate services. For example, "real
                  estate agent in [City]," "homes for sale in [Neighborhood]," or "buy a house in [City]."
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">2. Use Keyword Research Tools:</h3>
                <p className="text-gray-300 mb-4">
                  Utilize keyword research tools to expand your list of seed keywords and discover new ones. Here are
                  some top tools you can use:
                </p>
                <div className="space-y-6 ml-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">SEOrocket.ai:</h4>
                    <p className="text-gray-300">
                      Provides keyword ideas based on a seed keyword, along with search volume, competition, and keyword
                      difficulty.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Google Keyword Planner:</h4>
                    <p className="text-gray-300">
                      Google's Keyword Planner is a free tool that helps you discover new keywords related to your
                      business and see estimates of searches they receive and the cost to target them.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Other Paid Tools:</h4>
                    <p className="text-gray-300">
                      SEMrush and Ahrefs are comprehensive tools that provide in-depth keyword research features,
                      including competitor analysis and keyword difficulty scores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">3. Leverage Free Tools:</h3>
                <p className="text-gray-300 mb-4">
                  Free tools can also be highly effective for conducting keyword research.
                </p>
                <div className="space-y-6 ml-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Google Autocomplete:</h4>
                    <p className="text-gray-300">
                      Type your seed keywords into Google's search bar and observe the suggestions that appear. These
                      suggestions give you insights into commonly searched phrases.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">AnswerThePublic:</h4>
                    <p className="text-gray-300">
                      This tool visually displays search questions and phrases related to your keyword, providing a
                      wealth of long-tail keyword options.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Google Trends:</h4>
                    <p className="text-gray-300">
                      Use Google Trends to see how search interest in particular keywords has changed over time and to
                      identify seasonal trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Analyze Search Volume and Competition</h2>
            <p className="text-gray-300">
              Evaluate the search volume and competition for each keyword using the tools mentioned above. Keywords with
              higher search volumes are generally more competitive. Strive for a balance by targeting keywords with
              moderate search volume and low to medium competition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Assess Keyword Intent</h2>
            <p className="text-gray-300">
              Understand the intent behind your keywords. Are users looking for general information, or are they ready
              to take action, such as contacting you or scheduling a viewing? Focus on keywords with clear buyer intent
              to attract more qualified leads.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Group and Prioritize Keywords</h2>
            <p className="text-gray-300">
              Organize your keywords into logical groups based on themes or topics. Prioritize these groups according to
              their relevance, search volume, and competitiveness. This organization will help you create targeted
              content for different stages of the buyer's journey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Create Content Around Your Keywords</h2>
            <p className="text-gray-300">
              Use your prioritized list of keywords to guide your content creation strategy. Develop blog posts, landing
              pages, and other content types that specifically target these keywords. Make sure to use the keywords
              naturally within your content, titles, and meta descriptions.
            </p>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Use Google Keyword Planner or SEOrocket.ai to compile a list of ten keywords related to your real estate
              market. Analyze their search volume and competition, and prioritize five keywords that you can start
              incorporating into your content strategy immediately.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/understanding-keywords/buyer-intent"
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
              Previous: Buyer Intent Keywords
            </Link>
            <Link
              href="/courses/choosing-keywords"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: How to Choose the Right Keywords
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

