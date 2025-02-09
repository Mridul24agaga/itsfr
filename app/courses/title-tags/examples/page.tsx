import Link from "next/link"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/title-tags" className="text-orange-400 hover:text-orange-300">
              MODULE 3: ON-PAGE SEO
            </Link>
            <span>›</span>
            <Link href="/courses/title-tags" className="text-orange-400 hover:text-orange-300">
              TITLE TAGS AND META DESCRIPTIONS
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Examples from Successful Real Estate Websites
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Learning from successful real estate websites can provide valuable insights into creating effective title
            tags and meta descriptions. In this section, we will analyze a few examples from high-ranking real estate
            sites and explain why they work. You can then adapt these strategies to your own SEO efforts.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example 1: Zillow</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <p className="text-gray-300">
                <span className="text-white font-medium">Title Tag: </span>
                "Real Estate & Homes For Sale - Zillow"
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-white font-medium">Meta Description: </span>
                "The leading real estate marketplace. Search millions of for-sale and rental listings, compare
                Zestimate® home values and connect with local professionals."
              </p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Why It Works:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="text-white font-medium">Branding:</span> The title includes "Zillow," leveraging its
                brand recognition.
              </li>
              <li>
                <span className="text-white font-medium">Keyword Inclusion:</span> "Real estate" and "homes for sale"
                are primary keywords that attract broad and relevant traffic.
              </li>
              <li>
                <span className="text-white font-medium">Conciseness:</span> Both the title and meta description are
                concise yet informative.
              </li>
              <li>
                <span className="text-white font-medium">Value Proposition:</span> The meta description highlights the
                benefits of using Zillow—search millions of listings, compare home values, and connect with local
                professionals.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example 2: Realtor.com</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <p className="text-gray-300">
                <span className="text-white font-medium">Title Tag: </span>
                "Real Estate Listings: Buy or Sell a House | Realtor.com®"
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-white font-medium">Meta Description: </span>
                "Search real estate for sale, discover new homes, shop mortgages, find property records & take virtual
                tours of houses, condos & apartments on realtor.com®."
              </p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Why It Works:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="text-white font-medium">Brand Authority:</span> The title includes "Realtor.com®,"
                which is a trusted name in real estate.
              </li>
              <li>
                <span className="text-white font-medium">Comprehensive Keywords:</span> The title efficiently uses
                keywords like "real estate listings," "buy or sell a house," which cover a broad range of search
                intents.
              </li>
              <li>
                <span className="text-white font-medium">Action-Oriented:</span> The meta description is full of action
                verbs—"search," "discover," "shop," "find," and "take virtual tours," which drive user engagement.
              </li>
              <li>
                <span className="text-white font-medium">Variety of Services:</span> The meta description highlights
                multiple services provided, appealing to a wide audience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example 3: Redfin</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <p className="text-gray-300">
                <span className="text-white font-medium">Title Tag: </span>
                "Homes for Sale, Real Estate & Houses for Rent - Redfin"
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-white font-medium">Meta Description: </span>
                "Search real estate listings. Buy or sell your home with Redfin. The #1 brokerage website in the US.
                Browse photos, see new properties, get open house info, and research neighborhoods."
              </p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Why It Works:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="text-white font-medium">Mixed Keyword Strategy:</span> Combines high-volume keywords
                like "homes for sale," "real estate," and "houses for rent."
              </li>
              <li>
                <span className="text-white font-medium">Strong CTA and Branding:</span> "Buy or sell your home with
                Redfin" serves as both a CTA and a branding technique.
              </li>
              <li>
                <span className="text-white font-medium">Credibility:</span> The phrase "The #1 brokerage website in the
                US" adds authority and trust.
              </li>
              <li>
                <span className="text-white font-medium">Detailed Services:</span> The meta description lists detailed
                services offered—browsing photos, new properties, open house info, and neighborhood research.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example 4: Trulia</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <p className="text-gray-300">
                <span className="text-white font-medium">Title Tag: </span>
                "Trulia: Real Estate Listings, Homes For Sale, Housing Data"
              </p>
              <p className="text-gray-300 mt-2">
                <span className="text-white font-medium">Meta Description: </span>
                "Find real estate, homes for sale, properties for rent, school and neighborhood information and much
                more. Get advice from real estate professionals on Trulia."
              </p>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Why It Works:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                <span className="text-white font-medium">Direct and Clear:</span> The title and meta description are
                straightforward and clearly describe what users can expect to find.
              </li>
              <li>
                <span className="text-white font-medium">Keyword Inclusion:</span> Keywords like "real estate listings,"
                "homes for sale," and "housing data" target both general and niche audiences.
              </li>
              <li>
                <span className="text-white font-medium">Comprehensive Information:</span> The meta description promises
                valuable information—school and neighborhood data, expert advice—which can attract users looking for
                detailed insights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              How to Apply These Examples to Your Real Estate Website:
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Leverage Brand Recognition:</h3>
                <p className="text-gray-300">
                  If your brand is well-known, include it in your title tags and meta descriptions to build trust and
                  encourage clicks.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-2">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Luxury Homes in [City] | [Your Brand] Real Estate"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Use Comprehensive Keywords:</h3>
                <p className="text-gray-300">
                  Combine broad keywords with more specific phrases to cover various search intents.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-2">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Affordable Apartments & Luxury Condos for Sale in [City]"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Be Action-Oriented:</h3>
                <p className="text-gray-300">Include action verbs and clear CTAs to drive user engagement.</p>
                <div className="bg-gray-900 rounded-lg p-4 mt-2">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Discover Stunning Properties | Browse Listings & Schedule a Tour Today"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Highlight Value Propositions:</h3>
                <p className="text-gray-300">Emphasize what makes your services unique and beneficial.</p>
                <div className="bg-gray-900 rounded-lg p-4 mt-2">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Find Family-Friendly Homes with Top Schools in [Neighborhood] | Expert Realtors Available"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Provide Detailed Information:</h3>
                <p className="text-gray-300">
                  Promise comprehensive services or data to attract users looking for in-depth information.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-2">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Search Homes for Sale in [City] | View Photos, Take Virtual Tours, and Explore Neighborhoods"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Review the title tags and meta descriptions on your key website pages. Compare them to the successful
              examples provided above. Make necessary adjustments to include relevant keywords, strong CTAs, and unique
              value propositions. You can use a tool like texta.ai to assist in crafting compelling and optimized titles
              and meta descriptions. Implement these changes and monitor your website's performance metrics to see how
              the new titles and meta descriptions impact traffic and click-through rates.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/title-tags/writing-effective"
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
              Previous: Writing Effective Titles and Meta Descriptions
            </Link>
            <Link
              href="/courses/content-optimization"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Content Creation and Optimization
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

