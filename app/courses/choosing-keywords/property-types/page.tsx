import Link from "next/link"

export default function PropertyTypesPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/choosing-keywords" className="text-orange-400 hover:text-orange-300">
              MODULE 2: KEYWORD RESEARCH
            </Link>
            <span>›</span>
            <Link href="/courses/choosing-keywords" className="text-orange-400 hover:text-orange-300">
              HOW TO CHOOSE THE RIGHT KEYWORDS
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">Property Types and Features</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Targeting keywords related to specific property types and features can significantly enhance your SEO
            strategy by attracting highly qualified leads who are searching for specific kinds of properties. This
            section will guide you on how to choose and integrate keywords based on property types and their unique
            features.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Keywords for Property Types and Features Matter</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Specific Search Intent:</h3>
                <p className="text-gray-300">
                  Clients searching for particular property types and features often have a clear intent, which
                  increases the likelihood of conversion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Reduced Competition:</h3>
                <p className="text-gray-300">
                  Focusing on specific property types and feature-related keywords can reduce competition, as these
                  terms are generally less competitive than broader keywords.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Better User Experience:</h3>
                <p className="text-gray-300">
                  Providing content that matches specific search queries enhances user experience, which can lead to
                  higher engagement and lower bounce rates.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Types of Property Keywords to Consider</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Property Types:</h3>
                <p className="text-gray-300 mb-4">Keywords that describe the type of property, such as:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"Condo"</li>
                  <li>"Apartment"</li>
                  <li>"Single-family home"</li>
                  <li>"Townhouse"</li>
                  <li>"Luxury villa"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Property Features:</h3>
                <p className="text-gray-300 mb-4">Keywords highlighting unique features of properties, such as:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"Ocean view"</li>
                  <li>"Private pool"</li>
                  <li>"Pet-friendly"</li>
                  <li>"Open floor plan"</li>
                  <li>"Gated community"</li>
                  <li>"Energy-efficient"</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Property Conditions:</h3>
                <p className="text-gray-300 mb-4">
                  Keywords that denote the condition or age of the property, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"New construction"</li>
                  <li>"Recently renovated"</li>
                  <li>"Historical building"</li>
                  <li>"Move-in ready"</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Steps for Identifying Keywords for Property Types and Features
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Brainstorm:</h3>
                <p className="text-gray-300">
                  Begin by listing all the property types and features you commonly deal with. Think about what makes
                  properties in your area unique or desirable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Use Keyword Tools:</h3>
                <p className="text-gray-300">
                  Use tools like SEOrocket.ai, Google Keyword Planner, and Ahrefs to discover relevant keywords. Enter
                  specific property types or features to generate a comprehensive list of related terms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Analyze Search Volume and Competition:</h3>
                <p className="text-gray-300">
                  Evaluate the search volume and competition for each keyword. Aim to find a mix of high-intent keywords
                  with moderate search volume and low competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Consider Buyer Personas:</h3>
                <p className="text-gray-300">
                  Align your keyword choices with the needs and preferences of your target buyer personas. For example,
                  families might search for "homes with a large backyard," while young professionals might look for
                  "modern condos in downtown [City]."
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Incorporating Property Type and Feature Keywords into Your SEO Strategy
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Create Dedicated Pages:</h3>
                <p className="text-gray-300">
                  Develop dedicated landing pages for each property type and feature, using relevant keywords in the
                  title, meta description, headers, and body content. For example, create a page titled "Luxury Condos
                  with Ocean Views in [City]."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimize Property Listings:</h3>
                <p className="text-gray-300">
                  Ensure property listings on your website include specific property type and feature keywords. For
                  instance, a listing might read, "Beautiful 2-bedroom apartment with a private balcony in
                  [Neighborhood]."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Write Blog Posts:</h3>
                <p className="text-gray-300">
                  Create content focused on different property types and features. For example, a blog post on "Top 5
                  Benefits of Living in a Townhouse" or "Why Energy-Efficient Homes are the Future of Real Estate."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Use Visual Content:</h3>
                <p className="text-gray-300">
                  Include high-quality images and videos that showcase the specific features of the properties. Use
                  descriptive alt text containing relevant keywords to enhance image search SEO.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Monitoring and Adjusting Your Strategy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Track Performance:</h3>
                <p className="text-gray-300">
                  Use tools like Google Analytics and Google Search Console to track the performance of your property
                  type and feature-related keywords. Monitor metrics like organic traffic, click-through rates, and
                  conversions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Refine Based on Data:</h3>
                <p className="text-gray-300">
                  Regularly review your performance data and refine your keyword strategy based on what's driving the
                  most traffic and engagement. Adjust content to better match user intent and search trends.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Stay Updated:</h3>
                <p className="text-gray-300">
                  Continuously update your keyword list based on changing trends in the real estate market. Adapt your
                  content to include emerging property features and new client preferences.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Use SEOrocket.ai to generate a list of keywords focusing on property types and features relevant to your
              real estate market. Create dedicated landing pages and optimize property listings for these keywords.
              Regularly monitor your performance metrics and adjust your strategy to ensure you are capturing the most
              qualified leads searching for specific property types and features.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/choosing-keywords/local-seo"
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
              Previous: Local SEO Keywords
            </Link>
            <Link
              href="/courses/keyword-exercise"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Practical Exercise
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

