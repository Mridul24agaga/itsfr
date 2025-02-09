import Link from "next/link"

export default function CitationsDirectoriesPage() {
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
            Best Places to List Your Business
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            To enhance your visibility and attract more local clients, it's essential to list your real estate business
            in reputable directories and platforms. This section will guide you through the best places to list your
            business and how to maximize the benefits of these listings.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Listing Matters Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Listing Your Business Matters</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Increases Online Visibility:</h3>
                <p className="text-gray-300">
                  Listing your business on multiple platforms improves its visibility in local search results, making it
                  easier for potential clients to find you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Builds Trust and Credibility:</h3>
                <p className="text-gray-300">
                  Being listed on well-known, reputable directories boosts your credibility and builds trust with
                  potential clients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improves Local SEO:</h3>
                <p className="text-gray-300">
                  Accurate and consistent business listings contribute to better local SEO rankings. Search engines
                  prioritize businesses with strong, consistent online presences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Attracts More Clients:</h3>
                <p className="text-gray-300">
                  Listings provide multiple touchpoints for clients to discover and contact your business, driving more
                  traffic and leads.
                </p>
              </div>
            </div>
          </section>

          {/* Best Places Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Best Places to List Your Real Estate Business</h2>
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Google My Business (GMB)</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Why: </span>
                    GMB is crucial for local SEO and appears in Google Maps and local search results.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Ensure your GMB profile is complete, accurate, and up-to-date.
                  </p>
                  <p>
                    <Link href="https://business.google.com" className="text-orange-400 hover:text-orange-300">
                      Google My Business →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Yelp</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Why: </span>
                    Yelp is widely used by people searching for local businesses and reviews.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Claim and verify your business, then fill out your profile completely and encourage satisfied
                    clients to leave reviews.
                  </p>
                  <p>
                    <Link href="https://biz.yelp.com" className="text-orange-400 hover:text-orange-300">
                      Yelp for Business →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Facebook</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Why: </span>
                    Facebook is a powerful platform for local businesses and offers unique features for engaging with
                    clients.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Create a business page, regularly update it with posts, and engage with your audience.
                  </p>
                  <p>
                    <Link href="https://www.facebook.com/business" className="text-orange-400 hover:text-orange-300">
                      Facebook Business →
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Bing Places</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Why: </span>
                    Listing on Bing Places helps you reach users who prefer Bing over Google for search.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Action: </span>
                    Claim and verify your listing, then ensure all information is accurate and complete.
                  </p>
                  <p>
                    <Link href="https://www.bingplaces.com" className="text-orange-400 hover:text-orange-300">
                      Bing Places for Business →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Real Estate Specific Platforms */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Real Estate Specific Platforms</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Zillow</h3>
                <p className="text-gray-300 mb-4">
                  Popular real estate platform where users actively search for property listings and real estate agents.
                </p>
                <Link href="https://www.zillow.com/agent-resources/" className="text-orange-400 hover:text-orange-300">
                  Zillow Premier Agent →
                </Link>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Realtor.com</h3>
                <p className="text-gray-300 mb-4">
                  Authoritative real estate site that attracts potential homebuyers and sellers.
                </p>
                <Link href="https://www.realtor.com/realestateagents" className="text-orange-400 hover:text-orange-300">
                  Realtor.com Professional Center →
                </Link>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Trulia</h3>
                <p className="text-gray-300 mb-4">Popular platform for property listings and agent profiles.</p>
                <Link
                  href="https://www.trulia.com/real_estate/agents"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Trulia Agent Center →
                </Link>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Homes.com</h3>
                <p className="text-gray-300 mb-4">Comprehensive real estate search platform.</p>
                <Link
                  href="https://www.homes.com/real-estate-agents/"
                  className="text-orange-400 hover:text-orange-300"
                >
                  Homes.com Agent Portal →
                </Link>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Manage Business Listings</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Moz Local</h3>
                <p className="text-gray-300">Manage and sync your local business listings across multiple platforms.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BrightLocal</h3>
                <p className="text-gray-300">Comprehensive tool for listing management and local SEO tracking.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Yext</h3>
                <p className="text-gray-300">Robust platform for managing business information and listings.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Whitespark</h3>
                <p className="text-gray-300">Specializes in local listing audits, management, and citation building.</p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Begin by listing your real estate business on key platforms: Google My Business, Yelp, Facebook, and
              Zillow. Ensure your profiles are fully complete, accurate, and updated regularly. Use a tool like Moz
              Local or BrightLocal to manage your listings efficiently and maintain consistency across all platforms.
              Remember to encourage satisfied clients to leave reviews and respond promptly to all feedback to build
              trust and credibility.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/citations/audit"
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
              Previous: Auditing Your Online Information
            </Link>
            <Link
              href="/courses/reviews"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Gathering and Managing Online Reviews
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

