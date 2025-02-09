import Link from "next/link"

export default function KeywordExercisePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 2: KEYWORD RESEARCH
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Practical Exercise: Create a Seed List of Keywords Using a Free Tool
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            In this exercise, you will create a comprehensive seed list of keywords relevant to your real estate
            business using a free keyword research tool.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Step-by-Step Instructions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 1: Brainstorm Initial Keywords</h3>
                <p className="text-gray-300 mb-4">
                  Start by brainstorming a list of basic keywords related to your real estate business. Think about the
                  terms your clients might use when searching for properties or real estate services.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Examples: </span>
                    "real estate agent in [City]," "homes for sale in [Neighborhood]," "luxury condos," "family homes,"
                    "investment properties."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 2: Choose a Free Keyword Research Tool</h3>
                <p className="text-gray-300 mb-4">Select a free keyword research tool from the options below:</p>
                <ul className="space-y-4">
                  <li>
                    <span className="text-white font-medium">SEOrocket.ai (Free Version): </span>
                    <span className="text-gray-300">
                      A robust tool that provides keyword suggestions with search volumes and competition scores.
                    </span>
                  </li>
                  <li>
                    <span className="text-white font-medium">Google Keyword Planner: </span>
                    <span className="text-gray-300">
                      Google's tool for discovering new keywords and seeing search volume estimates.
                    </span>
                  </li>
                  <li>
                    <span className="text-white font-medium">AnswerThePublic: </span>
                    <span className="text-gray-300">
                      Generates questions and phrases people are searching for related to your seed keyword.
                    </span>
                  </li>
                  <li>
                    <span className="text-white font-medium">Ubersuggest: </span>
                    <span className="text-gray-300">Offers keyword ideas, search volume, and SEO difficulty.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 3: Generate Keyword Ideas</h3>
                <p className="text-gray-300 mb-6">
                  Enter each brainstormed keyword into the selected tool to generate a list of related keywords.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Using SEOrocket.ai:</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                      <li>Go to SEOrocket.ai and log in to your free account.</li>
                      <li>Enter a seed keyword (e.g., "homes for sale in [City]") into the search bar.</li>
                      <li>Review the list of suggested keywords, noting search volumes and competition scores.</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Using Google Keyword Planner:</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                      <li>Log in to Google Ads and go to Tools & Settings - Planning - Keyword Planner.</li>
                      <li>Select "Discover new keywords."</li>
                      <li>
                        Enter a seed keyword and review the suggestions, focusing on search volumes and competition.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 4: Create Your Seed List</h3>
                <p className="text-gray-300 mb-4">
                  Compile a comprehensive list of keywords generated from the tool. Aim for a mix of geographic
                  keywords, property types, and special features.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Seed List:</h4>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                    <li>"Homes for sale in [City]*"</li>
                    <li>"Real estate agent in [Neighborhood]*"</li>
                    <li>"Luxury condos in [City]*"</li>
                    <li>"Affordable homes in [City]*"</li>
                    <li>"Family homes in [Neighborhood]*"</li>
                    <li>"Investment properties in [City]*"</li>
                    <li>"New construction homes in [City]*"</li>
                    <li>"Homes with private pools in [Neighborhood]*"</li>
                    <li>"Pet-friendly apartments in [City]*"</li>
                    <li>"Energy-efficient homes in [City]*"</li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 5: Prioritize Keywords</h3>
                <p className="text-gray-300 mb-4">
                  Rank your keywords based on relevance, search volume, and competition. Focus on those with moderate
                  search volume and lower competition to prioritize in your content strategy.
                </p>
                <div className="space-y-2">
                  <p className="text-white font-medium">Use criteria such as:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <span className="text-white font-medium">High Relevance: </span>
                      How closely the keyword matches your services.
                    </li>
                    <li>
                      <span className="text-white font-medium">Moderate Search Volume: </span>
                      Ensures there is enough interest.
                    </li>
                    <li>
                      <span className="text-white font-medium">Low Competition: </span>
                      Increases likelihood of ranking higher in search results.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 6: Document Your Findings</h3>
                <p className="text-gray-300 mb-4">
                  Create a document or spreadsheet to organize your keywords. Include columns for the keyword, search
                  volume, competition score, and any additional notes.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-4 px-4 text-white font-medium">Keyword</th>
                        <th className="text-left py-4 px-4 text-white font-medium">Search Volume</th>
                        <th className="text-left py-4 px-4 text-white font-medium">Competition</th>
                        <th className="text-left py-4 px-4 text-white font-medium">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4">Homes for sale in [City]</td>
                        <td className="py-4 px-4">2,000</td>
                        <td className="py-4 px-4">Low</td>
                        <td className="py-4 px-4">High search volume, primary target keyword</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4">Real estate agent in [Neighborhood]</td>
                        <td className="py-4 px-4">1,200</td>
                        <td className="py-4 px-4">Medium</td>
                        <td className="py-4 px-4">Moderate competition, high relevance</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4">Luxury condos in [City]</td>
                        <td className="py-4 px-4">800</td>
                        <td className="py-4 px-4">Low</td>
                        <td className="py-4 px-4">Niche market, high-value properties</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Choose one or two keywords from your seed list and start drafting content tailored to these terms. For
              example, create a blog post titled "The Ultimate Guide to Buying a Home in [City]" or a landing page
              focusing on "Luxury Condos in [City]." Optimize the content with the selected keywords and monitor its
              performance using tools like Google Analytics and Google Search Console.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/choosing-keywords/property-types"
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
              Previous: Property Type Keywords
            </Link>
            <Link
              href="/courses/title-tags"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Title Tags and Meta Descriptions
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

