import Link from "next/link"

export default function CitationsAuditPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/citations" className="text-orange-400 hover:text-orange-300">
              MODULE 4: LOCAL SEO STRATEGIES
            </Link>
            <span>›</span>
            <Link href="/courses/citations" className="text-orange-400 hover:text-orange-300">
              IMPORTANCE OF CITATIONS AND NAP CONSISTENCY
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Auditing Your Online Information
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ensuring that your business information is accurate and consistent across the web is crucial for local SEO.
            An audit of your online information will help identify inconsistencies, outdated data, and areas that need
            improvement.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Auditing Matters Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Auditing Your Online Information Matters</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improves Local Search Rankings:</h3>
                <p className="text-gray-300">
                  Consistent information across all platforms helps improve your local search rankings and credibility
                  with search engines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Builds Trust with Clients:</h3>
                <p className="text-gray-300">
                  Accurate and consistent business information builds trust with potential clients, making them more
                  likely to contact you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Avoids Confusion:</h3>
                <p className="text-gray-300">
                  Ensuring your business details are the same everywhere prevents confusion among potential clients,
                  making it easier for them to reach out to you.
                </p>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Steps for Auditing Your Online Information</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  1. Compile a List of All Listings and Profiles:
                </h3>
                <p className="text-gray-300 mb-4">
                  Create a comprehensive list of all the places where your business information is listed. This includes
                  major directories, social media platforms, review sites, and local business listings.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Examples:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Google My Business</li>
                    <li>Yelp</li>
                    <li>Facebook</li>
                    <li>Bing Places</li>
                    <li>Yellow Pages</li>
                    <li>Local Chamber of Commerce directory</li>
                    <li>Industry-specific directories (e.g., Zillow, Realtor.com)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Gather Your Standard NAP Information:</h3>
                <p className="text-gray-300 mb-4">
                  Decide on a standard format for your Name, Address, and Phone number (NAP). Use this standard format
                  to update all listings.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example:</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Name: John Doe Real Estate</p>
                    <p>Address: 123 Main Street, Miami, FL 33101</p>
                    <p>Phone: (305) 555-1234</p>
                    <p>Website: www.johndoerealestate.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Audit Each Listing:</h3>
                <p className="text-gray-300 mb-4">
                  Visit each platform from your list and compare the listed information with your standard NAP. Note any
                  discrepancies or outdated information.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tool: </span>
                    Use a spreadsheet to track this information. Columns can include Platform, Name, Address, Phone,
                    Website, and Notes.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  4. Update Inaccurate or Inconsistent Listings:
                </h3>
                <p className="text-gray-300 mb-4">
                  Correct any discrepancies and ensure that all your NAP information matches your standard format. Be
                  thorough and double-check each update.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Platforms like Google My Business and Yelp often require verification for changes, so be prepared
                    for potential verification steps.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Check for Duplicate Listings:</h3>
                <p className="text-gray-300 mb-4">
                  Occasionally, duplicate listings can appear on directories, which can confuse clients and affect your
                  local SEO. Identify and merge or delete any duplicate listings.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    If you find multiple Yelp listings for your business, claim them and consolidate into one accurate
                    listing.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">6. Monitor Reviews and Ratings:</h3>
                <p className="text-gray-300 mb-4">
                  While auditing your information, check the reviews and ratings on each platform. Respond to reviews
                  promptly to show engagement and professionalism.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Positive reviews can enhance trust and credibility, so encourage satisfied clients to leave reviews.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">7. Set Up Alerts for Future Changes:</h3>
                <p className="text-gray-300 mb-4">
                  Use tools like Google Alerts to stay informed about new mentions or listings of your business name.
                  This helps you quickly address any inconsistencies that arise after the audit.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Set up a Google Alert for your business name and primary keyword (e.g., "John Doe Real Estate
                    Miami").
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Tools for Auditing Listings and Monitoring Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Moz Local</h3>
                <p className="text-gray-300">Helps you manage and audit your local citations.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BrightLocal</h3>
                <p className="text-gray-300">
                  Comprehensive tool for auditing, managing, and monitoring local listings.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Ahrefs</h3>
                <p className="text-gray-300">Offers site audit and monitoring tools helpful for local SEO.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Google Alerts</h3>
                <p className="text-gray-300">Set up alerts for new mentions of your business online.</p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Conduct a thorough audit of your online business listings. Use tools like Moz Local or BrightLocal to
              streamline the process. Correct any inconsistencies in your NAP information and ensure all details match
              your standardized format. Regularly monitor your listings using Google Alerts to maintain accuracy and
              respond to any new reviews promptly. For efficient management of your local SEO, consider using services
              like Moz Local or BrightLocal.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/citations"
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
              Back to Citations and NAP Consistency
            </Link>
            <Link
              href="/courses/citations/directories"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Best Places to List Your Business
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

