import Link from "next/link"

export default function ContentOptimizationPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">MODULE 3: ON-PAGE SEO</h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Content Creation and Optimization
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Creating and optimizing high-quality content is crucial for improving your website's search engine rankings
            and engaging potential clients. In this section, we will cover the principles of effective content creation
            and offer actionable strategies for optimizing your content to attract more traffic and generate leads.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Importance of High-Quality Content</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Enhanced Engagement:</h3>
                <p className="text-gray-300">
                  Quality content keeps visitors on your site longer and reduces bounce rates. This improves your SEO as
                  search engines favor sites with low bounce rates and high user engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Improved Search Rankings:</h3>
                <p className="text-gray-300">
                  Well-crafted content that satisfies user intent and includes relevant keywords can improve your
                  position in search engine results pages (SERPs).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Building Trust and Authority:</h3>
                <p className="text-gray-300">
                  High-quality content establishes you as an authority in the real estate market, building trust with
                  potential clients.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Principles of Effective Content Creation</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Understand Your Audience:</h3>
                <p className="text-gray-300 mb-4">
                  Identify the needs, preferences, and pain points of your target audience. Create content that
                  addresses these aspects to provide real value.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Develop buyer personas to guide your content creation.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Keyword Research:</h3>
                <p className="text-gray-300 mb-4">
                  Use keyword research tools, such as SEOrocket.ai, to identify relevant keywords. Target a mix of
                  short-tail and long-tail keywords.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Focus on geographic keywords (e.g., "houses for sale in Miami") and property-specific keywords
                    (e.g., "luxury condos").
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Create Valuable Content:</h3>
                <p className="text-gray-300 mb-4">
                  Offer insightful, informative, and valuable content that answers questions, solves problems, or
                  provides useful information.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Topics can include "How to Buy Your First Home," "Real Estate Market Trends in [City]," or "Top
                    Features to Look for in a Family Home."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Use Various Content Formats:</h3>
                <p className="text-gray-300 mb-4">
                  Diversify your content with blog posts, videos, infographics, eBooks, and case studies to keep your
                  audience engaged.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Video tours of properties or infographics on market trends can be very effective.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Engaging Headlines and Subheadings:</h3>
                <p className="text-gray-300 mb-4">
                  Craft compelling headlines and subheadings to draw readers in and organize your content.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Use numbers, questions, and power words in your headlines (e.g., "10 Tips for First-Time
                    Homebuyers").
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Content Optimization Strategies</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">On-Page SEO:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="text-white font-medium">Title Tag: </span>
                    Include your primary keyword in the title tag. Keep it under 60 characters.
                  </li>
                  <li>
                    <span className="text-white font-medium">Meta Description: </span>
                    Write a concise meta description (150-160 characters) with a call to action and relevant keywords.
                  </li>
                  <li>
                    <span className="text-white font-medium">Headers: </span>
                    Use H1, H2, and H3 tags to structure your content. Include keywords naturally within these headers.
                  </li>
                  <li>
                    <span className="text-white font-medium">Keyword Usage: </span>
                    Use primary and secondary keywords naturally throughout the content. Avoid keyword stuffing.
                  </li>
                  <li>
                    <span className="text-white font-medium">Internal Linking: </span>
                    Link to other relevant pages within your website to improve navigation and SEO.
                  </li>
                  <li>
                    <span className="text-white font-medium">External Linking: </span>
                    Link to authoritative external sources to add credibility to your content.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimize Images:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="text-white font-medium">Alt Text: </span>
                    Include keywords in the alt text of images to improve image search SEO.
                  </li>
                  <li>
                    <span className="text-white font-medium">File Names: </span>
                    Use descriptive, keyword-rich file names for images.
                  </li>
                  <li>
                    <span className="text-white font-medium">Compression: </span>
                    Ensure images are properly compressed for faster load times.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Mobile Optimization:</h3>
                <p className="text-gray-300 mb-4">
                  Ensure your content is mobile-friendly, as more users search and view content on mobile devices.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Use responsive design and test your content on various devices.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Content Freshness:</h3>
                <p className="text-gray-300 mb-4">
                  Regularly update your content to keep it current and relevant. This signals search engines that your
                  site is fresh and active.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Update old blog posts with new information or republish them with updated statistics and images.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example of High-Quality, Optimized Content</h2>
            <div className="bg-gray-900 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Title: "10 Essential Tips for First-Time Homebuyers in Miami"
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Introduction:</h4>
                    <p className="text-gray-300">
                      Briefly introduce the topic and its relevance to first-time homebuyers.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Body:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Use H2 headers for each tip</li>
                      <li>Write concise, informative content for each tip</li>
                      <li>
                        Include relevant keywords like "first-time homebuyers in Miami," "real estate market," and
                        "affordable homes"
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Visuals:</h4>
                    <p className="text-gray-300">
                      Add images of homes, Miami neighborhoods, and infographics summarizing each tip.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Optimization:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>
                        <span className="text-white font-medium">Title Tag: </span>
                        "10 Essential Tips for First-Time Homebuyers in Miami"
                      </li>
                      <li>
                        <span className="text-white font-medium">Meta Description: </span>
                        "Discover crucial tips for first-time homebuyers in Miami. Learn about the real estate market,
                        financing, and more. Contact us to get started!"
                      </li>
                      <li>
                        <span className="text-white font-medium">Alt Text for Images: </span>
                        "First-time homebuyers guide in Miami"
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Select a key topic relevant to your real estate market and follow the principles outlined to create a
              piece of high-quality content. Use SEOrocket.ai to automatically optimize your content for search engines,
              ensuring proper keyword usage, meta descriptions, and more. Publish the content and monitor its
              performance using Google Analytics and Google Search Console. Adjust as needed based on the insights you
              gather.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/title-tags/examples"
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
              Previous: Examples from Successful Websites
            </Link>
            <Link
              href="/courses/content-optimization/quality-content"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Creating High-Quality, Useful Content
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

