import Link from "next/link"

export default function QuickFixesPage() {
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
            Quick Fixes for Common Mobile Usability Issues
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Ensuring that your real estate website works well on mobile devices is crucial for attracting and retaining
            visitors. Mobile usability issues can drive potential clients away, so fixing them promptly helps improve
            user experience and online visibility. Here are some simple and non-technical steps to fix common mobile
            usability issues.
          </p>
        </div>

        <div className="space-y-12">
          {/* Common Mobile Usability Issues and Quick Fixes Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Common Mobile Usability Issues and Quick Fixes</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Slow Loading Times</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Issue:</strong> Pages take too long to load on mobile devices.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Quick Fixes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Compress Images:</strong> Use tools like TinyPNG to shrink your image sizes without losing
                      quality.
                    </li>
                    <li>
                      <strong>Enable Browser Caching:</strong> Ensure your website settings save parts of your site on
                      users' devices for faster future loads.
                    </li>
                    <li>
                      <strong>Minify CSS and JavaScript:</strong> Simplify your website's code. Ask your web developer
                      or use online tools.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Unresponsive Design</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Issue:</strong> The website layout doesn't adjust to different screen sizes, causing elements
                  to overlap or become inaccessible.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Quick Fixes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Use a Responsive Theme:</strong> Choose a responsive design template if you're using
                      website builders like WordPress, Squarespace, or Wix.
                    </li>
                    <li>
                      <strong>Check Mobile View:</strong> Most website builders have a "preview" mode to see how your
                      site looks on mobile devices. Adjust accordingly.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Text Too Small to Read</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Issue:</strong> Users need to zoom in to read the content.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Quick Fixes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Increase Font Size:</strong> Make sure your text isn't too small. Aim for at least 16px
                      font size.
                    </li>
                    <li>
                      <strong>Viewport Settings:</strong> Ensure your website automatically adjusts to fit the screen
                      size. Most modern website templates do this by default.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Clickable Elements Too Close Together</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Issue:</strong> Buttons and links are too close, making it hard for users to tap the right
                  one.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Quick Fixes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Increase Spacing:</strong> Add more space around clickable items like buttons or links.
                      Ensure they are easy to tap.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Intrusive Pop-ups and Interstitials</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Issue:</strong> Pop-ups that cover the content can frustrate mobile users.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Quick Fixes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Limit Pop-ups:</strong> Avoid using pop-ups. If necessary, keep them small and easy to
                      close.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Poor Navigation</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Issue:</strong> Users find it hard to navigate through the site.
                </p>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-white">Quick Fixes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <strong>Simplify Menus:</strong> Use simple, clean menus that are easy to tap. A "hamburger menu"
                      (three lines) that expands is a good option.
                    </li>
                    <li>
                      <strong>Add Search Function:</strong> Make sure it's easy for users to find what they're looking
                      for with a search bar.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Simple Solutions for Common Issues Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Simple Solutions for Common Issues</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 1: Slow Loading Times</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <strong>Fix:</strong> Compress images using TinyPNG to make them load faster.
                  </p>
                  <p className="text-gray-300">
                    Visit TinyPNG, upload your images, compress them, and then upload the smaller versions to your site.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 2: Unresponsive Design</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <strong>Fix:</strong> Use a responsive theme/template.
                  </p>
                  <p className="text-gray-300">
                    If you're using WordPress, go to your theme settings and select a responsive theme in 'Appearance
                    &gt; Themes.'
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 3: Text Too Small to Read</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <strong>Fix:</strong> Increase the font size.
                  </p>
                  <p className="text-gray-300">
                    In your website builder, go to the style settings and change the font size to at least 16px.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 4: Clickable Elements Too Close</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-4">
                  <p className="text-gray-300">
                    <strong>Fix:</strong> Increase spacing around buttons and links.
                  </p>
                  <p className="text-gray-300">
                    Ensure there is ample space between clickable items so that they are easier to tap on touchscreens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools to Easily Test Mobile Usability Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Easily Test Mobile Usability</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Google Mobile-Friendly Test</h3>
                <p className="text-gray-300">
                  Check if Google considers your site mobile-friendly. Just enter your URL and see the results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Google PageSpeed Insights</h3>
                <p className="text-gray-300">
                  See how fast your site loads on mobile and get suggestions for improvements. Enter your URL and review
                  the report.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">BrowserStack</h3>
                <p className="text-gray-300">
                  View your site on different devices without needing to own them. They offer a free trial to get
                  started.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Responsive Design Checker</h3>
                <p className="text-gray-300">
                  Test how your site looks on various screen sizes. Enter your URL and see instant previews.
                </p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong>Check if Your Site is Mobile-Friendly:</strong> Use the Google Mobile-Friendly Test to analyze
                your site. Enter your site's URL and see if it passes the test.
              </p>
              <p className="text-gray-300">
                <strong>Improve Speed and Performance:</strong> Compress your images using TinyPNG and test your page
                speed using Google PageSpeed Insights.
              </p>
              <p className="text-gray-300">
                <strong>Simplify User Experience:</strong> Make sure your text is readable, navigation is easy, and
                clickable items are well spaced. Use your website builder's tools to adjust these elements.
              </p>
              <p className="text-gray-300">
                <strong>Regularly Test and Adjust:</strong> Regularly test your site's mobile performance using
                BrowserStack and Responsive Design Checker. Keep making improvements based on the feedback.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/mobile-friendly/testing-tools"
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
              Previous: Tools to Test Mobile Usability
            </Link>
            <Link
              href="/courses/website-speed"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Improving Website Speed
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

