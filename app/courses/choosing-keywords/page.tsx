import Link from "next/link"

export default function ChoosingKeywordsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 2: KEYWORD RESEARCH
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            How to choose the Right Keywords for Real Estate
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Selecting the appropriate keywords is crucial for the success of your SEO strategy, especially in a niche
            market like real estate. The right keywords can drive qualified traffic to your website, increase
            engagement, and ultimately lead to more sales and inquiries. This section will guide you through the process
            of choosing the most effective keywords for your real estate business.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Understanding Your Audience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Identify Your Target Audience:</h3>
                <p className="text-gray-300">
                  Determine who your ideal clients are. Are they first-time homebuyers, investors, or people looking to
                  downsize? Understanding your audience's needs and preferences will help you choose the right keywords.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Consider Buyer Personas:</h3>
                <p className="text-gray-300">
                  Create detailed buyer personas that reflect your target clients. Include demographics, job roles,
                  goals, and challenges. This helps in understanding the types of terms they might use when searching
                  for real estate services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Analyzing Keyword Metrics</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Search Volume:</h3>
                <p className="text-gray-300">
                  Focus on keywords with a significant search volume to ensure that enough people are looking for the
                  terms you target. Use tools like SEOrocket.ai, SEMrush, or Ahrefs to find search volume data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Keyword Difficulty:</h3>
                <p className="text-gray-300">
                  Evaluate the competitiveness or difficulty of ranking for each keyword. Aim for a balance by targeting
                  keywords that have a moderate search volume and low to medium competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Cost Per Click (CPC):</h3>
                <p className="text-gray-300">
                  While primarily a metric for paid search campaigns, CPC can indicate the commercial value of a
                  keyword. Higher CPC values often signal high buyer intent and competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Keyword Relevance:</h3>
                <p className="text-gray-300">
                  Ensure the keywords you choose are highly relevant to your real estate services and the content you
                  can provide. Irrelevant keywords, even with high search volumes, won't attract the right audience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Types of Keywords to Focus On</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Geographic Keywords:</h3>
                <p className="text-gray-300">
                  These keywords include specific locations such as cities, neighborhoods, or regions. Examples include
                  "houses for sale in [City]" or "real estate agent in [Neighborhood]." Geographic keywords are
                  essential for targeting local clients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Property Types and Features:</h3>
                <p className="text-gray-300">
                  Consider keywords that specify property types or unique features, such as "luxury condos in [City]" or
                  "homes with swimming pools in [Neighborhood]." These specific keywords cater to users looking for
                  particular types of properties.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Buyer Intent Keywords:</h3>
                <p className="text-gray-300">
                  Keywords indicating a high intent to purchase or take action are incredibly valuable. Examples include
                  "buy a house in [City]" or "contact real estate agent in [City]."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Long-tail Keywords:</h3>
                <p className="text-gray-300">
                  These are longer, more specific phrases that target highly focused queries. They often have lower
                  search volumes but higher conversion rates. Examples include "affordable 2-bedroom apartments in
                  [City]" or "investment properties in [Neighborhood]."
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Steps for Choosing the Right Keywords</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Brainstorm Initial Keywords:</h3>
                <p className="text-gray-300">
                  Start by listing broad keywords related to your real estate business. Think about what your clients
                  might search for when looking for properties or real estate services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Expand Using Keyword Tools:</h3>
                <p className="text-gray-300">
                  Utilize tools like SEOrocket.ai, Google Keyword Planner, and Ahrefs to expand your list. These tools
                  will provide related keywords, search volumes, and competition data.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Filter Keywords:</h3>
                <p className="text-gray-300">
                  Narrow down your list by filtering out keywords with extremely high competition. Focus on those with
                  moderate search volumes and lower competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Analyze Competitors:</h3>
                <p className="text-gray-300">
                  Look at the keywords your competitors are targeting. Tools like SEMrush and Ahrefs can provide
                  insights into the keywords driving traffic to their websites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Prioritize Keywords:</h3>
                <p className="text-gray-300">
                  Organize your keywords into primary and secondary lists. Primary keywords should be those with the
                  highest relevance, search volume, and manageable competition. Secondary keywords can be incorporated
                  into additional content pieces or used as variations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">6. Align Keywords with Content:</h3>
                <p className="text-gray-300">
                  Match your chosen keywords with specific pages or types of content on your website. Ensure that each
                  page targets a unique set of primary and secondary keywords to avoid keyword cannibalization.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Use SEOrocket.ai to generate a comprehensive list of keywords relevant to your real estate business. Focus
              on geographic and property-specific keywords with a good balance of search volume and competition.
              Organize and prioritize this list to align with your content strategy, ensuring each page on your site
              targets a unique set of keywords for maximum visibility.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/keyword-research/analysis"
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
              Previous: Analyzing Search Volume and Competition
            </Link>
            <Link
              href="/courses/choosing-keywords/local-seo"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Local SEO Keywords
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

