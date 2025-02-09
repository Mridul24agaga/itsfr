import Link from "next/link"

export default function TestingToolsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/mobile-friendly" className="text-orange-400 hover:text-orange-300">
              MODULE 5: TECHNICAL SEO BASICS
            </Link>
            <span>›</span>
            <Link href="/courses/mobile-friendly" className="text-orange-400 hover:text-orange-300">
              ENSURING MOBILE-FRIENDLINESS
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Tools to Test Mobile Usability
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Having the right tools is essential for ensuring your real estate website is truly mobile-friendly. This
            section explores various tools that can help you test, analyze, and improve your website's mobile usability.
          </p>
        </div>

        <div className="space-y-12">
          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Help Ensure Mobile-Friendliness</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Google Mobile-Friendly Test</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    A free tool that analyzes if your website is mobile-friendly and provides recommendations for
                    improvement.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Instant mobile-friendly analysis</li>
                      <li>Detailed reports on mobile usability issues</li>
                      <li>Screenshot of how Google sees your page on mobile</li>
                      <li>Specific recommendations for improvements</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://search.google.com/test/mobile-friendly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      Access Google Mobile-Friendly Test →
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Google PageSpeed Insights</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    Evaluates your website's loading speed on mobile devices and offers suggestions to enhance
                    performance.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Detailed performance metrics</li>
                      <li>Mobile and desktop analysis</li>
                      <li>Real-world performance data</li>
                      <li>Actionable optimization suggestions</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://pagespeed.web.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      Access PageSpeed Insights →
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">GTmetrix</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    Provides detailed insights into your page load times and offers recommendations to improve speed.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Comprehensive performance reports</li>
                      <li>Waterfall analysis of page loading</li>
                      <li>Performance scores and metrics</li>
                      <li>Detailed recommendations for optimization</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://gtmetrix.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      Access GTmetrix →
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">BrowserStack</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    Lets you test your website across a wide range of devices and browsers to ensure compatibility and
                    performance.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Real device testing</li>
                      <li>Multiple browser versions</li>
                      <li>Interactive testing capabilities</li>
                      <li>Screenshot and video recording</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://www.browserstack.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      Access BrowserStack →
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Responsive Design Checker</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    Simulates different device sizes to help you check the responsiveness of your design.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Multiple device viewport sizes</li>
                      <li>Real-time responsive testing</li>
                      <li>Popular device presets</li>
                      <li>Custom viewport size options</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://responsivedesignchecker.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      Access Responsive Design Checker →
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">TinyPNG</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    Optimizes images by reducing file sizes without compromising quality, enhancing load times.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Smart lossy compression</li>
                      <li>Bulk image optimization</li>
                      <li>WebP format support</li>
                      <li>Developer API available</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://tinypng.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300"
                    >
                      Access TinyPNG →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Start by running your real estate website through Google's Mobile-Friendly Test to get a baseline
              assessment. Then use PageSpeed Insights to identify specific performance improvements. Utilize
              BrowserStack to test across different devices, and optimize your images with TinyPNG. Regular testing with
              these tools will help ensure your website maintains optimal mobile performance and usability.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/mobile-friendly"
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
              Previous: Ensuring Mobile-Friendliness
            </Link>
            <Link
              href="/courses/mobile-friendly/quick-fixes"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Quick Fixes for Common Mobile Usability Issues
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

