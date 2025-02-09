import Link from "next/link"

export default function AltTextPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/image-optimization" className="text-orange-400 hover:text-orange-300">
              MODULE 3: ON-PAGE SEO
            </Link>
            <span>›</span>
            <Link href="/courses/image-optimization" className="text-orange-400 hover:text-orange-300">
              IMAGE OPTIMIZATION
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">Using Alt Text for SEO</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Alt text (alternative text) is a crucial component of image optimization for SEO. It not only enhances
            accessibility for visually impaired users but also helps search engines understand what an image depicts,
            thereby contributing to better search rankings. This section covers the best practices for writing and using
            alt text effectively.
          </p>
        </div>

        <div className="space-y-12">
          {/* Importance Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Importance of Alt Text</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Accessibility:</h3>
                <p className="text-gray-300">
                  Alt text ensures that visually impaired users can understand the content of images through screen
                  readers, thereby making your website more accessible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Search Engine Optimization (SEO):</h3>
                <p className="text-gray-300">
                  Search engines use alt text to understand the content of images, which can help improve your rankings
                  in image search results and boost the SEO of the entire page.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Page Load Speed:</h3>
                <p className="text-gray-300">
                  Alt text can be displayed if an image fails to load, providing context and maintaining a good user
                  experience.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Best Practices for Writing Effective Alt Text</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Be Descriptive and Specific:</h3>
                <p className="text-gray-300 mb-4">
                  Provide a clear and specific description of the image. Describe what is happening within the image and
                  its context.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Modern kitchen with stainless steel appliances and granite countertops."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Incorporate Keywords Naturally:</h3>
                <p className="text-gray-300 mb-4">
                  Include relevant keywords, but ensure they fit naturally within the description. Avoid keyword
                  stuffing, which can harm your SEO.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Luxury condo for sale in Miami with ocean view."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Keep It Concise:</h3>
                <p className="text-gray-300 mb-4">
                  While alt text should be descriptive, it should also be concise. Aim for 125 characters or less.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Spacious master bedroom in Victorian home in San Francisco."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Avoid Redundant Phrases:</h3>
                <p className="text-gray-300 mb-4">
                  Do not use phrases like "image of" or "picture of." The search engine already knows it's an image.
                  Instead, jump directly into the description.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Instead of "Image of a 3-bedroom house for sale," use "3-bedroom house for sale with large garden."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Describe the Function if Contextual:</h3>
                <p className="text-gray-300 mb-4">
                  If the image serves a particular function, describe its purpose. For example, if it's an image of a
                  button, mention its function.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Submit button in a contact form."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Use Alt Text for All Images:</h3>
                <p className="text-gray-300 mb-4">
                  Ensure every image on your website has alt text, including decorative images, logos, and buttons. If
                  an image is purely decorative, set the alt attribute to an empty string (alt="") to ignore it by
                  screen readers.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-gray-300">{'<img src="decorative-border.jpg" alt="">'}</code>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Examples of Good and Bad Alt Text</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 1: Residential Property</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Image: </span>A photo of a charming 2-story house with a
                    white picket fence and a blooming garden.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Good Alt Text: </span>
                    "Charming 2-story house with a white picket fence and a blooming garden."
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Bad Alt Text: </span>
                    "House for sale."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 2: Interior Design</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Image: </span>A modern kitchen with stainless steel
                    appliances, marble countertops, and a large island.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Good Alt Text: </span>
                    "Modern kitchen with stainless steel appliances, marble countertops, and a large island."
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Bad Alt Text: </span>
                    "Modern kitchen appliances."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 3: Location Specific</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Image: </span>A beautiful beachfront condo in Miami during
                    sunset.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Good Alt Text: </span>
                    "Beachfront condo in Miami with a stunning sunset view."
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Bad Alt Text: </span>
                    "Miami condo sunset."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools for Checking and Adding Alt Text</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">CMS Platforms:</h3>
                <p className="text-gray-300 mb-4">
                  Most content management systems (like WordPress, Squarespace, and Wix) provide fields for adding alt
                  text to images.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Always fill out these fields when uploading new images.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Google Lighthouse:</h3>
                <p className="text-gray-300 mb-4">
                  Use the Google Lighthouse tool to audit your website's accessibility and identify images missing alt
                  text.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Run regular audits to ensure all new content meets accessibility standards.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Browser Extensions:</h3>
                <p className="text-gray-300 mb-4">
                  Use browser extensions such as WAVE (Web Accessibility Evaluation Tool) to review and analyze your
                  website's images for alt text completeness and quality.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Conduct a thorough review after significant content updates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Review all images on a key page of your website and ensure they have descriptive, keyword-rich alt text.
              Use tools like Google Lighthouse and WAVE to audit your alt text and make necessary adjustments. Implement
              these best practices across your site and monitor the impact on your search engine rankings and user
              engagement using tools like Google Analytics and Google Search Console. Make alt text optimization a
              regular part of your content update process. If you use SEOrocket.ai, all images and alt text will already
              be optimized when you create content, saving you time and effort.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/image-optimization"
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
              Previous: Image Optimization
            </Link>
            <Link
              href="/courses/image-optimization/sizing-loading"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Image Sizing and Loading Times
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

