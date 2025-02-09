import Link from "next/link"

export default function KeywordResearchAnalysisPage() {
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
            Paid Tools for Keyword Research
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Effective keyword research ensures that your content is aligned with what potential clients are searching
            for, thereby increasing your chances of ranking higher in search engine results pages (SERPs). Here's how to
            leverage some of the top paid tools for keyword research, including SEOrocket.ai.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">SEOrocket.ai</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing SEOrocket.ai:</h3>
                <p className="text-gray-300">
                  Sign up for an account at{" "}
                  <Link href="https://seorocket.ai" className="text-orange-400 hover:text-orange-300">
                    SEOrocket.ai
                  </Link>{" "}
                  and choose an appropriate subscription plan.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using SEOrocket.ai:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Enter a seed keyword related to your business, such as "real estate agent in [City]" or "homes for
                    sale in [Neighborhood]."
                  </li>
                  <li>
                    SEOrocket.ai will generate a comprehensive list of related keywords, providing metrics like search
                    volume, keyword difficulty, and competition.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing Keywords:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Focus on keywords that are relevant to your real estate niche and have a good balance of search
                    volume and lower competition.
                  </li>
                  <li>
                    Use filters to refine results based on your needs, such as focusing on long-tail keywords or
                    specific geographic regions.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Creating Keyword Lists:</h3>
                <p className="text-gray-300">
                  Export the keyword data and organize it into lists for different content strategies, such as blog
                  posts, landing pages, and service descriptions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">SEMrush</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing SEMrush:</h3>
                <p className="text-gray-300">
                  Sign up for an account at SEMrush and choose a plan that suits your needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using SEMrush:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Enter your seed keywords into the Keyword Magic Tool to discover related keywords, their search
                    volumes, trends, keyword difficulty, and competitive density.
                  </li>
                  <li>
                    Explore additional features like the Keyword Gap tool to compare your keywords with those of
                    competitors.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing Keywords:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Focus on keywords with moderate to high search volumes and lower competition.</li>
                  <li>
                    Use the Keyword Difficulty metric to identify low-hanging fruit—keywords that are easier to rank
                    for.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Creating Keyword Lists:</h3>
                <p className="text-gray-300">
                  Export the data and create segmented lists based on different categories, such as "buyer intent,"
                  "informational content," and "local searches."
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Ahrefs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing Ahrefs:</h3>
                <p className="text-gray-300">
                  Sign up for an account at Ahrefs and select a plan that fits your business needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Ahrefs:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Enter your seed keywords into the Keywords Explorer to get a list of related keywords along with
                    metrics like search volume, keyword difficulty, and estimated clicks.
                  </li>
                  <li>Utilize the Content Gap tool to identify keywords your competitors rank for but you don't.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing Keywords:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Focus on keywords that have a combination of high search volume and lower difficulty scores.</li>
                  <li>
                    Use the SERP overview to analyze the top-ranking pages for your targeted keywords and to understand
                    user intent better.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Moz</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessing Moz:</h3>
                <p className="text-gray-300">
                  Create an account at Moz and subscribe to a plan that best suits your needs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Using Moz:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Enter seed keywords into the Moz Keyword Explorer tool to uncover related keywords, search volumes,
                    difficulty scores, and organic Click-Through Rate (CTR) estimates.
                  </li>
                  <li>
                    Use the Priority score to identify the best keywords to target, considering search volume,
                    difficulty, and potential CTR.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Analyzing Keywords:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Pay attention to the keyword difficulty and prioritize those with a lower score for easier ranking.
                  </li>
                  <li>
                    Use the SERP analysis feature to understand why top-performing pages rank and how you can create
                    better content.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Steps for Conducting Keyword Research Using Paid Tools
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Brainstorm Seed Keywords:</h3>
                <p className="text-gray-300">
                  Start by brainstorming a list of basic keywords related to your real estate business. Think about the
                  terms your clients might use when searching for a property or real estate services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Use Keyword Research Tools:</h3>
                <p className="text-gray-300">
                  Utilize the features of each paid tool to expand your list of seed keywords and discover new keyword
                  opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Analyze Search Volume and Competition:</h3>
                <p className="text-gray-300">
                  Evaluate the search volume and competition for each keyword using the metrics provided by the tools.
                  Aim for a balance by targeting keywords with moderate search volume and low to medium competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Assess Keyword Intent:</h3>
                <p className="text-gray-300">
                  Understand the intent behind your keywords. Focus on keywords with clear buyer intent to attract more
                  qualified leads.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Group and Prioritize Keywords:</h3>
                <p className="text-gray-300">
                  Organize your keywords into logical groups based on themes or topics. Prioritize these groups
                  according to their relevance, search volume, and competitiveness.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">6. Create Content Around Your Keywords:</h3>
                <p className="text-gray-300">
                  Use your prioritized list of keywords to guide your content creation strategy. Develop blog posts,
                  landing pages, and other content types that specifically target these keywords.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Use SEOrocket.ai in combination with one other paid tool like SEMrush or Ahrefs to compile a list of ten
              keywords related to your real estate market. Analyze their search volume and competition, and prioritize
              five keywords that you can start incorporating into your content strategy immediately.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/keyword-research/tools"
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
              Previous: Free Tools for Keyword Research
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

