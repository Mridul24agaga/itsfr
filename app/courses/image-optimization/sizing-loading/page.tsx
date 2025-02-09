import Link from "next/link"

export default function ImageSizingPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Image Sizing and Loading Times
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Optimizing image sizes and ensuring quick loading times are crucial for maintaining a fast and efficient
            website. Slow loading times can negatively impact user experience and search engine rankings. This section
            provides simple steps to help you optimize image sizes and loading times without getting too technical.
          </p>
        </div>

        <div className="space-y-12">
          {/* Importance Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Image Sizing and Loading Times Are Important</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Better User Experience:</h3>
                <p className="text-gray-300">
                  Fast-loading images improve the overall user experience, encouraging visitors to stay longer on your
                  site and reducing bounce rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Higher Search Engine Rankings:</h3>
                <p className="text-gray-300">
                  Google considers page speed as a ranking factor. Optimized image sizes contribute to faster loading
                  times, which can help improve your search engine rankings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Mobile-Friendly:</h3>
                <p className="text-gray-300">
                  Mobile users often have slower internet connections. Optimized images ensure your site loads quickly
                  on mobile devices, providing a seamless experience.
                </p>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Simple Steps for Image Sizing and Loading Times</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Resize Images Before Uploading:</h3>
                <p className="text-gray-300 mb-4">
                  Scale your images to the size they will appear on your website. Avoid using images that are larger
                  than necessary.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-2">How to do it:</h4>
                  <p className="text-gray-300">
                    Use free tools like Paint (Windows) or Preview (Mac) to resize images. For example, if an image will
                    be displayed at 800 pixels wide, resize it to 800 pixels wide before uploading.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Choose the Right File Format:</h3>
                <p className="text-gray-300 mb-4">
                  Use JPEG format for photos and PNG for images that need transparency (like logos).
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Why it's important:</h4>
                  <p className="text-gray-300">
                    Different formats have different file sizes and quality levels. JPEGs are usually smaller and load
                    faster.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Compress Images:</h3>
                <p className="text-gray-300 mb-4">Compress images to reduce file sizes without losing quality.</p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Tools you can use:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <span className="text-white font-medium">TinyPNG: </span>
                      Drag and drop your images into this online tool, which will compress them for you.
                    </li>
                    <li>
                      <span className="text-white font-medium">ImageOptim: </span>
                      Another free tool for Mac users to compress images.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Use Browser Caching:</h3>
                <p className="text-gray-300 mb-4">
                  Set up browser caching so that returning visitors don't have to re-download your images.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Simple explanation: </span>
                    Think of caching as your browser saving a copy of the image, so it doesn't need to download it again
                    next time.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Use a Content Delivery Network (CDN):</h3>
                <p className="text-gray-300 mb-4">
                  A CDN distributes your images across multiple servers worldwide, making them quicker to load by
                  shortening the distance between users and your content.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">User-friendly services: </span>
                    Services like Cloudflare or Amazon CloudFront can help distribute your images more efficiently.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">6. Use Lazy Loading:</h3>
                <p className="text-gray-300 mb-4">
                  Lazy loading means images only load when they are about to appear on the screen. This speeds up the
                  initial page loading time.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Simple tip: </span>
                    Many website platforms like WordPress have plugins that enable lazy loading without any coding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example Scenario</h2>
            <div className="bg-gray-900 rounded-xl p-8 space-y-6">
              <p className="text-gray-300">Suppose you're uploading an image of a house to your real estate website.</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Original Size:</h4>
                  <p className="text-gray-300">Image: 3000x2000 pixels, 5MB PNG file.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Resizing:</h4>
                  <p className="text-gray-300">
                    Resize to 1024x683 pixels using Preview or an online tool, reducing the dimensions to fit your
                    website layout properly.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Compressing:</h4>
                  <p className="text-gray-300">
                    Compress the resized image using TinyPNG, reducing the file size from 3MB to 300KB.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Choosing File Format:</h4>
                  <p className="text-gray-300">Save the image as a JPEG if it doesn't need a transparent background.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Uploading with Lazy Loading:</h4>
                  <p className="text-gray-300">
                    Use a plugin on your website platform to enable lazy loading, ensuring the image loads only when
                    about to be viewed.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Setting Up CDN and Caching:</h4>
                  <p className="text-gray-300">
                    Use a service like Cloudflare to distribute your images across various servers and enable caching
                    for quicker loading on return visits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Start by selecting a key page with several images on your website. Resize and compress these images using
              simple tools like Paint, Preview, or TinyPNG. Implement lazy loading with an easy-to-install plugin and
              set up a CDN using a user-friendly service like Cloudflare. Monitor your website's performance using
              Google PageSpeed Insights to ensure faster loading times and a better user experience.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/image-optimization/alt-text"
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
              Previous: Using Alt Text for SEO
            </Link>
            <Link
              href="/courses/blog-optimization"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Optimize an Existing Blog Article
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

