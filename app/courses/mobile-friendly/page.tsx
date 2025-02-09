import Link from "next/link"

export default function MobileFriendlyPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 5: TECHNICAL SEO BASICS
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">Ensuring Mobile-Friendliness</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            In today's digital landscape, ensuring that your real estate website is mobile-friendly is crucial. A
            significant portion of users access websites via mobile devices, and search engines prioritize
            mobile-optimized sites in their rankings. This section provides practical steps to ensure your website is
            mobile-friendly and presents tools to test mobile usability.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Mobile-Friendliness Matters Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Mobile-Friendliness Matters</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improved User Experience:</h3>
                <p className="text-gray-300">
                  A mobile-friendly website offers a seamless experience for users on smartphones and tablets,
                  increasing engagement and satisfaction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Higher Search Engine Rankings:</h3>
                <p className="text-gray-300">
                  Search engines like Google use mobile-first indexing, meaning they prioritize the mobile version of
                  your site when determining rankings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Increased Traffic and Leads:</h3>
                <p className="text-gray-300">
                  Mobile optimization can lead to higher traffic and more leads as users are more likely to stay on your
                  site if it functions well on their devices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhanced Accessibility:</h3>
                <p className="text-gray-300">
                  Ensuring your site is mobile-friendly makes it accessible to a broader audience, including those who
                  primarily use mobile devices.
                </p>
              </div>
            </div>
          </section>

          {/* Steps to Ensure Mobile-Friendliness Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Steps to Ensure Mobile-Friendliness</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Use a Responsive Web Design:</h3>
                <p className="text-gray-300 mb-4">
                  Implement a responsive design that automatically adjusts to fit different screen sizes and devices.
                  This ensures consistency in user experience across all devices.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Most modern website builders and content management systems (CMS) offer responsive design templates.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimize Page Loading Speed:</h3>
                <p className="text-gray-300 mb-4">
                  Speed is crucial for mobile users. Optimize images, minimize code, and use efficient caching to
                  improve load times.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Tools:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Google PageSpeed Insights:</strong> Analyze your site's speed and receive actionable
                      recommendations.
                    </li>
                    <li>
                      <strong>GTmetrix:</strong> Provides detailed reports on your site's load speed and suggests
                      improvements.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Simplify Navigation:</h3>
                <p className="text-gray-300 mb-4">
                  Make navigation easy with a clear, simple menu that's accessible on smaller screens. Use
                  touch-friendly buttons and optimize forms for mobile use.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Use a hamburger menu that expands to reveal navigation options."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimize Content Layout:</h3>
                <p className="text-gray-300 mb-4">
                  Ensure text is readable without zooming, and use a layout that's mobile-friendly. Keep paragraphs
                  short, use headers, and incorporate bullet points.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Test your site on various devices to ensure readability and ease of use.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Enable Browser Caching:</h3>
                <p className="text-gray-300 mb-4">
                  Use browser caching to store static resources on the user's device, reducing load times for subsequent
                  visits.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Configure your server settings to set expiration dates for static assets like images and CSS files.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Minimize Pop-ups and Interstitials:</h3>
                <p className="text-gray-300 mb-4">
                  Avoid intrusive pop-ups and interstitials that can frustrate mobile users. If necessary, ensure they
                  are easily dismissible.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Use less intrusive alternatives like banners or in-line CTAs.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Test Mobile Usability Regularly:</h3>
                <p className="text-gray-300 mb-4">
                  Continuously test your website's mobile usability to identify and fix any issues that arise.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Tools to Use:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Google Mobile-Friendly Test:</strong> Checks if your website meets Google's criteria for
                      mobile usability.
                    </li>
                    <li>
                      <strong>BrowserStack:</strong> Allows you to test your site across various devices and browsers.
                    </li>
                    <li>
                      <strong>Responsive Design Checker:</strong> Simulates different devices to check your site's
                      responsiveness.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Example Process Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example Process for Ensuring Mobile-Friendliness</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 1: Implement Responsive Design</h3>
                <p className="text-gray-300 mb-4">
                  Choose a responsive theme for your website on your CMS (e.g., WordPress).
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Select a theme that automatically adjusts layout for mobile devices.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 2: Optimize Page Loading Speed</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Compress images using TinyPNG.</li>
                  <li>Minify CSS and JavaScript files.</li>
                  <li>Tool: Use Google PageSpeed Insights to test and improve loading speed.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 3: Simplify Navigation</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Use a clean, expandable hamburger menu.</li>
                  <li>Optimize forms for mobile use by ensuring fields are easy to tap and fill out.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 4: Test Mobile Usability</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Run your website through the Google Mobile-Friendly Test.</li>
                  <li>Check for issues such as text size, touch elements, and loading times.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 5: Monitor and Adjust</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Regularly use tools like BrowserStack to see how your site performs on different mobile devices.
                  </li>
                  <li>Adjust and fix any issues promptly to maintain a high-quality mobile experience.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Start by implementing a responsive design on your real estate website using a modern CMS template. Use
              Google Mobile-Friendly Test to check if your site meets mobile usability standards and Google PageSpeed
              Insights to improve loading speeds. Regularly test your website's performance on various devices using
              BrowserStack and make necessary adjustments. By consistently optimizing for mobile, you can enhance user
              experience, improve search engine rankings, and attract more local clients who access your site via mobile
              devices.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/directory-submission"
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
              Previous: Submit Your Business to Online Directories
            </Link>
            <Link
              href="/courses/mobile-friendly/testing-tools"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Tools to Test Mobile Usability
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

