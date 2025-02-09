import Link from "next/link"

export default function CitationsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 4: LOCAL SEO STRATEGIES
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Importance of Citations and NAP Consistency
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            For real estate agents, optimizing for local SEO is crucial for attracting clients in specific geographic
            areas. One important aspect of local SEO is ensuring that your citations and NAP (Name, Address, Phone
            number) information are consistent across all online platforms.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Citations Matter Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Citations and NAP Consistency Matter</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improves Local Search Rankings:</h3>
                <p className="text-gray-300">
                  Search engines use citations and NAP information to verify the legitimacy and relevance of your
                  business. Consistent information across various platforms helps improve your local search rankings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Builds Credibility and Trust:</h3>
                <p className="text-gray-300">
                  Consistent NAP information across the web helps build trust with potential clients. Inconsistent
                  information can confuse users and lead to a loss of credibility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Increases Online Visibility:</h3>
                <p className="text-gray-300">
                  Accurate citations and NAP information make it easier for potential clients to find you online,
                  increasing your visibility across search engines, directories, and maps.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhances User Experience:</h3>
                <p className="text-gray-300">
                  Easy access to accurate contact information improves the user experience. Clients are more likely to
                  contact a business if the information is readily available and consistent.
                </p>
              </div>
            </div>
          </section>

          {/* What Are Citations Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">What Are Citations?</h2>
            <p className="text-gray-300 mb-6">
              Citations are mentions of your business's NAP information on other websites, directories, and social
              platforms. These can be:
            </p>
            <div className="bg-gray-900 rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li>Business directories (e.g., Yelp, Yellow Pages)</li>
                <li>Social media platforms (e.g., Facebook, Instagram)</li>
                <li>Local business listings (e.g., Google My Business, Bing Places)</li>
                <li>Industry-specific directories (e.g., Zillow for real estate agents)</li>
              </ul>
            </div>
          </section>

          {/* NAP Consistency Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">NAP Consistency</h2>
            <p className="text-gray-300 mb-6">
              NAP consistency means that your business's name, address, and phone number are identical across all
              citations. Variations or discrepancies can confuse search engines and potential clients, negatively
              impacting your local SEO.
            </p>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Example of Consistent NAP:</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Name: John Doe Real Estate</p>
                  <p>Address: 123 Main Street, Miami, FL 33101</p>
                  <p>Phone: (305) 555-1234</p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Example of Inconsistent NAP:</h3>
                <div className="space-y-2">
                  <div className="text-gray-300">
                    <p>Name: John Doe Realty</p>
                    <p>Address: 123 Main St., Miami, FL 33101</p>
                    <p>Phone: (305) 555-1234</p>
                  </div>
                  <p className="text-orange-400 mt-4">
                    Inconsistency: Different business name and abbreviated street name ("St." vs. "Street")
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Steps to Ensure Citations and NAP Consistency</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Audit Your Current Citations:</h3>
                <p className="text-gray-300 mb-4">
                  Begin by auditing all existing citations to identify inaccuracies or inconsistencies. Use tools like
                  Moz Local or BrightLocal to get a comprehensive list of your current citations.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Create a spreadsheet to document all locations where your business is listed and note any
                    discrepancies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Standardize Your NAP Information:</h3>
                <p className="text-gray-300">
                  Decide on a standard format for your NAP information that you will use across all platforms. Ensure
                  that every instance of your NAP follows this standardized format.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Update Existing Citations:</h3>
                <p className="text-gray-300 mb-4">
                  Manually update any incorrect or inconsistent citations. Start with the most authoritative sources
                  like Google My Business, Yelp, and Facebook, and then move on to smaller directories.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Visit each platform and update your business details to ensure they match your standardized NAP
                    format.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Create New Citations:</h3>
                <p className="text-gray-300 mb-4">
                  Build new citations on reputable directories and platforms that you're not currently listed on. Use
                  services like Moz Local, Yext, or BrightLocal to streamline this process.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Submit your business information to additional local directories and industry-specific websites.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Monitor and Maintain Consistency:</h3>
                <p className="text-gray-300 mb-4">
                  Regularly monitor your citations to ensure consistency is maintained over time. Set a schedule to
                  review your citations quarterly or semi-annually.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Use tools like Google Alerts or Mention to keep track of new citations and any changes to existing
                    ones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Help Maintain Citations and NAP Consistency</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Moz Local</h3>
                <p className="text-gray-300">
                  Helps you manage your local citations and ensures NAP consistency across multiple platforms.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BrightLocal</h3>
                <p className="text-gray-300">
                  A comprehensive tool for auditing, building, and managing local citations.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Yext</h3>
                <p className="text-gray-300">
                  An advanced platform for managing business listings and maintaining NAP consistency.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Whitespark</h3>
                <p className="text-gray-300">
                  Specializes in local search marketing and offers services for citation building and audit.
                </p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Conduct an audit of your current citations using a tool like Moz Local or BrightLocal. Standardize your
              NAP information and update any inconsistencies. Create new citations on reputable directories that you're
              not currently listed on. Regularly monitor your citations to ensure consistency. For a streamlined
              approach, consider using services like Moz Local or BrightLocal to manage your local SEO effectively.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/blog-optimization"
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
              Previous: Optimize an Existing Blog Article
            </Link>
            <Link
              href="/courses/citations/audit"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Auditing Your Online Information
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

