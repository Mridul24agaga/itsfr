import Link from "next/link"

export default function WritingEffectivePage() {
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
            Writing Effective Titles and Meta Descriptions
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Crafting effective titles and meta descriptions is vital for attracting clicks and improving your search
            engine rankings. This section will provide you with practical guidelines for creating compelling titles and
            meta descriptions that will help you stand out in search engine results pages (SERPs).
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Guidelines for Writing Effective Titles</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Incorporate Keywords Early:</h3>
                <p className="text-gray-300 mb-2">
                  Include your primary keyword near the beginning of the title. Search engines place more weight on
                  words that appear early in the title.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Homes for Sale in Miami | Luxury Real Estate Listings"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Keep It Concise:</h3>
                <p className="text-gray-300 mb-2">
                  Aim for a length of 50-60 characters. Titles longer than this may get cut off in SERPs.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Affordable Family Homes in Austin"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Make It Descriptive and Specific:</h3>
                <p className="text-gray-300 mb-2">
                  Clearly describe what the page is about. Specificity can attract more relevant clicks.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "3-Bedroom Townhouses for Sale in Brooklyn"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Use Compelling Language:</h3>
                <p className="text-gray-300 mb-2">
                  Use action verbs and persuasive language to make your title enticing.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Discover Stunning Beachfront Villas in Malibu"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Include Branding When Appropriate:</h3>
                <p className="text-gray-300 mb-2">
                  Adding your brand name can build trust and recognition, especially if your brand is well-known.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Luxury Condos in NYC | [Your Brand] Real Estate"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">6. Ensure Uniqueness:</h3>
                <p className="text-gray-300 mb-2">
                  Each page should have a unique title to target different keywords and avoid duplication.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example:</span>
                  </p>
                  <p className="text-gray-300">Page 1: "Modern Apartments in Downtown San Francisco"</p>
                  <p className="text-gray-300">Page 2: "Spacious Lofts in San Francisco's Financial District"</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Guidelines for Writing Effective Meta Descriptions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Incorporate Keywords Naturally:</h3>
                <p className="text-gray-300 mb-2">
                  Include your primary and possibly secondary keywords in a way that reads naturally and provides value.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Explore luxury homes for sale in Miami. View photos, schedule tours, and connect with our expert
                    real estate agents."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Be Concise and Clear:</h3>
                <p className="text-gray-300 mb-2">
                  Meta descriptions should be 150-160 characters long. This ensures the full description is displayed in
                  the SERPs.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Find affordable family homes in Austin. Browse listings and schedule a viewing today."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Highlight Unique Selling Points:</h3>
                <p className="text-gray-300 mb-2">
                  Include what makes the page stand out and why users should click. Mention any special offers, unique
                  features, or benefits.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Discover upscale living in downtown condos with rooftop pools and city views."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  4. Use Persuasive Language and a Call to Action (CTA):
                </h3>
                <p className="text-gray-300 mb-2">
                  Encourage users to click with engaging language and action-oriented words.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Book a tour of 3-bedroom townhouses in Brooklyn today!"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Avoid Duplicate Descriptions:</h3>
                <p className="text-gray-300 mb-2">
                  Ensure each page has a unique meta description to avoid being penalized by search engines for
                  duplication.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example:</span>
                  </p>
                  <p className="text-gray-300">
                    Meta Description 1: "View beautiful, modern apartments in San Francisco's Financial District."
                  </p>
                  <p className="text-gray-300">
                    Meta Description 2: "Discover spacious, loft-style apartments near Union Square."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Examples of Effective Titles and Meta Descriptions</h2>
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Example 1:</h3>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Title Tag: </span>
                  "Luxury Homes for Sale in Miami | Top Real Estate Listings"
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Meta Description: </span>
                  "Explore luxury homes for sale in Miami. View photos, find open houses, and schedule tours with our
                  expert real estate agents. Contact us today!"
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Example 2:</h3>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Title Tag: </span>
                  "Affordable Family Homes in Austin | Real Estate Deals"
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Meta Description: </span>
                  "Find affordable family homes in Austin. Browse our listings and schedule a viewing today. Perfect for
                  growing families!"
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Example 3:</h3>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Title Tag: </span>
                  "Modern Downtown Apartments in San Francisco"
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Meta Description: </span>
                  "Discover modern apartments in downtown San Francisco. Enjoy city living with state-of-the-art
                  amenities. Book a tour now!"
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Tips for Crafting Your Own Titles and Meta Descriptions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Know Your Audience:</h3>
                <p className="text-gray-300">
                  Consider what potential buyers or sellers are looking for and use language that speaks directly to
                  them.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">A/B Testing:</h3>
                <p className="text-gray-300">
                  Experiment with different versions of titles and meta descriptions to see which ones get the best
                  results. Use tools like Google Search Console to track performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Localize Your Content:</h3>
                <p className="text-gray-300">
                  Use location-specific keywords to attract local traffic. Mention the city or neighborhood prominently.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Provide Value:</h3>
                <p className="text-gray-300">
                  Ensure that both your title and meta description provide a clear value proposition. What will users
                  get or learn by clicking your link?
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Stay Updated:</h3>
                <p className="text-gray-300">
                  Regularly review and update your titles and meta descriptions based on changes in search trends and
                  user behavior.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Choose one or two pages on your website and write new, optimized title tags and meta descriptions
              following the guidelines provided. Use tools like texta.ai to assist in creating compelling and effective
              content. Implement these changes and monitor the impact on your organic traffic and click-through rates
              using Google Search Console. Observe which changes yield the best results and consider applying similar
              strategies across other pages on your site.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/title-tags"
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
              Back to Title Tags
            </Link>
            <Link
              href="/courses/title-tags/examples"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Examples from Successful Websites
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

