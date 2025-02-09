import Link from "next/link"

export default function TitleTagsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">MODULE 3: ON-PAGE SEO</h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Title Tags and Meta Descriptions
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Title tags and meta descriptions are critical components of on-page SEO. Optimizing them effectively can
            improve your search engine rankings and increase click-through rates (CTR) from search engine results pages
            (SERPs). This section will guide you through the steps to optimize your title tags and meta descriptions for
            your real estate website.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">What Are Title Tags and Meta Descriptions?</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Title Tag:</h3>
                <p className="text-gray-300">
                  The title tag is an HTML element that specifies the title of a web page. It appears as the clickable
                  headline in SERPs and is crucial for both SEO and user experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Meta Description:</h3>
                <p className="text-gray-300">
                  The meta description is an HTML element that provides a brief summary of a web page's content. It
                  appears beneath the title tag in SERPs and influences click-through rates.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Importance of Title Tags and Meta Descriptions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Search Engine Rankings:</h3>
                <p className="text-gray-300">
                  Well-optimized title tags can help improve your rankings in search engine results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Click-Through Rates (CTR):</h3>
                <p className="text-gray-300">
                  Compelling title tags and meta descriptions can attract more clicks from users, even if your page
                  isn't ranked first.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">User Experience:</h3>
                <p className="text-gray-300">
                  Clear and relevant title tags and meta descriptions enhance user experience by accurately describing
                  the page content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Best Practices for Optimizing Title Tags</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Include Primary Keywords:</h3>
                <p className="text-gray-300">
                  Make sure to incorporate your primary keyword near the beginning of the title tag. For example, "Homes
                  for Sale in [City] | Top Real Estate Listings."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Keep It Under 60 Characters:</h3>
                <p className="text-gray-300">
                  Search engines generally display the first 50-60 characters of a title tag. Keeping it concise
                  prevents important information from being cut off.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Be Descriptive and Compelling:</h3>
                <p className="text-gray-300">
                  Make your title tag descriptive yet compelling to encourage clicks. Use action words like "Find,"
                  "Explore," or "Discover."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Avoid Keyword Stuffing:</h3>
                <p className="text-gray-300">
                  Don't overuse keywords in your title tag. Aim for a natural and readable sentence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Include Branding When Appropriate:</h3>
                <p className="text-gray-300">
                  Adding your brand name can increase click-through rates, especially if your brand is well-known.
                  Example: "Luxury Homes for Sale in [City] | [Your Brand]."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Unique for Each Page:</h3>
                <p className="text-gray-300">
                  Ensure each page on your website has a unique title tag to avoid duplicate content issues and to
                  precisely target different keywords.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Best Practices for Optimizing Meta Descriptions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Include Primary and Secondary Keywords:</h3>
                <p className="text-gray-300">
                  Integrate your primary keyword naturally, and if possible, include a secondary keyword. Example:
                  "Discover beautiful homes for sale in [City]. Find listings, view photos, and schedule property tours
                  today."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Keep It Under 160 Characters:</h3>
                <p className="text-gray-300">
                  Meta descriptions should be concise and kept under 160 characters to ensure they display fully in
                  SERPs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Write Compelling Copy:</h3>
                <p className="text-gray-300">
                  Craft a compelling and informative description that encourages users to click. Use action verbs and
                  highlight benefits or unique selling points.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Make It Relevant:</h3>
                <p className="text-gray-300">
                  Ensure your meta description accurately reflects the page content to reduce bounce rates and enhance
                  user experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Include a Call to Action (CTA):</h3>
                <p className="text-gray-300">
                  Adding a CTA like "Learn more," "View listings," or "Contact us today" can drive users to take action.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Unique for Each Page:</h3>
                <p className="text-gray-300">
                  Each page should have a unique meta description to target different queries and avoid content
                  duplication.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">
              Steps for Creating Optimized Title Tags and Meta Descriptions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Identify Primary Keywords:</h3>
                <p className="text-gray-300">
                  Use your keyword research to identify primary keywords for each page. Focus on high-value, relevant
                  keywords for your real estate business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Draft Title Tags:</h3>
                <p className="text-gray-300">
                  Write a concise, keyword-rich title tag for each page, staying under 60 characters. Ensure each title
                  tag is unique and compelling.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Draft Meta Descriptions:</h3>
                <p className="text-gray-300">
                  Write a concise meta description for each page, ensuring it's informative and compelling while staying
                  under 160 characters. Include relevant keywords and a CTA.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Review and Adjust for Readability:</h3>
                <p className="text-gray-300">
                  Ensure both title tags and meta descriptions are readable and make sense to users. Avoid keyword
                  stuffing and jargon.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Implement on Your Website:</h3>
                <p className="text-gray-300">
                  Input your optimized title tags and meta descriptions into your website's HTML or through your content
                  management system (CMS).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Monitor and Refine:</h3>
                <p className="text-gray-300">
                  Use tools like Google Search Console to monitor the performance of your title tags and meta
                  descriptions. Adjust them based on performance data to improve CTR and rankings.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Example of an Optimized Title Tag and Meta Description:
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimized Example:</h3>
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
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Non-Optimized Example:</h3>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Title Tag: </span>
                  "Great Properties"
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Meta Description: </span>
                  "Check out our properties for great housing options. Contact us for more info."
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Choose one key page on your real estate website (e.g., your homepage or a high-traffic property listing).
              Use the guidelines provided to create an optimized title tag and meta description for that page. Implement
              the changes and monitor the performance in Google Search Console over the next few weeks to see how these
              adjustments impact your rankings and click-through rates.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/keyword-exercise"
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
              Previous: Practical Exercise
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

