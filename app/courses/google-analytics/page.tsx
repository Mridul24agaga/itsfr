import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Using Google Analytics | SEO for Real Estate",
  description:
    "Learn how to set up Google Analytics, track key metrics, and measure the success of your real estate website's SEO efforts.",
}

export default function GoogleAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="p-6 md:p-8 lg:p-12">
        <div className="prose prose-invert max-w-none">
          <div className="text-sm text-blue-400 mb-4">
            <span className="text-gray-400">MODULE 7: MEASURING SUCCESS</span>
          </div>

          <h1 className="text-3xl font-bold mb-6">Using Google Analytics (Setup, Key Metrics, and Tracking Success)</h1>

          <p className="text-gray-300 mb-8">
            Google Analytics is an essential tool for real estate agents to track website performance, understand user
            behavior, and measure the success of their SEO efforts. This section will guide you through setting up
            Google Analytics, identifying key metrics to track, and interpreting the data to adjust your strategy.
          </p>

          {/* Why Google Analytics Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Google Analytics Matters</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Tracks User Behavior:</h3>
                <p className="text-gray-300 ml-4">
                  Understand how visitors interact with your website and identify areas for improvement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Measures SEO Success:</h3>
                <p className="text-gray-300 ml-4">
                  Track the effectiveness of your SEO strategies and make data-driven decisions to enhance your
                  performance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Improves Website Performance:</h3>
                <p className="text-gray-300 ml-4">
                  Identify high-performing pages and areas that need optimization to improve user experience and
                  engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Informs Content Strategy:</h3>
                <p className="text-gray-300 ml-4">
                  Analyze which content resonates most with your audience and plan future content accordingly.
                </p>
              </div>
            </div>
          </section>

          {/* Setup Instructions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Step-by-Step Instructions: Setting Up Google Analytics</h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <h3 className="text-xl font-medium mb-4">Step 1: Create a Google Analytics Account</h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Sign Up:</h4>
                    <p className="text-gray-300">
                      Go to{" "}
                      <a href="https://analytics.google.com" className="text-blue-400 hover:text-blue-300">
                        Google Analytics
                      </a>{" "}
                      and click on "Start for free."
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Set Up Account:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Sign in with your Google account or create a new one.</li>
                      <li>Click on "Start measuring" to create an account.</li>
                      <li>Enter your account name (e.g., John Doe Real Estate).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="text-xl font-medium mb-4">Step 2: Set Up a Property</h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Add Property:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Click on "Next" to add a property, which represents your website.</li>
                      <li>
                        Enter your website name, URL, industry category (e.g., Real Estate), and reporting time zone.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Choose a Data Stream:</h4>
                    <p className="text-gray-300">
                      Select "Web" as your data stream and enter your website URL. Click "Create stream."
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="text-xl font-medium mb-4">Step 3: Add the Tracking Code to Your Website</h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Get the Tracking Code:</h4>
                    <p className="text-gray-300">
                      Google Analytics will provide you with a Global Site Tag (gtag.js) tracking code.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Add the Code to Your Site:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        For WordPress: Install a plugin like Insert Headers and Footers to add the tracking code to your
                        site.
                      </li>
                      <li>Go to Plugins - Add New, search for "Insert Headers and Footers," install, and activate.</li>
                      <li>
                        Navigate to Settings - Insert Headers and Footers and paste the tracking code in the "Header"
                        section. Click "Save."
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Verify Integration:</h4>
                    <p className="text-gray-300">
                      Return to Google Analytics and click "Verify" to ensure the tracking code is correctly installed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Key Metrics to Track in Google Analytics</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-2">Users and Sessions:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">Users: The number of unique visitors to your website.</p>
                  <p className="text-gray-300">
                    Sessions: The total number of visits, including repeat visits by the same user.
                  </p>
                  <p className="text-gray-400 italic">
                    Why It Matters: Helps you understand your audience size and engagement level.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Bounce Rate:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">
                    The percentage of visitors who leave your site after viewing only one page.
                  </p>
                  <p className="text-gray-400 italic">
                    Why It Matters: High bounce rates can indicate issues with site content or user experience.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Average Session Duration:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">
                    The average amount of time users spend on your site during a single session.
                  </p>
                  <p className="text-gray-400 italic">
                    Why It Matters: Longer session durations suggest that visitors find your content valuable and
                    engaging.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Pages per Session:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">The average number of pages viewed per session.</p>
                  <p className="text-gray-400 italic">
                    Why It Matters: Indicates how effectively your site encourages visitors to explore multiple pages.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Traffic Sources:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">
                    Where your visitors are coming from (e.g., organic search, direct, social media, referrals).
                  </p>
                  <p className="text-gray-400 italic">
                    Why It Matters: Helps you identify the most effective channels for attracting visitors.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Top Landing Pages:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">The pages where visitors first arrive on your site.</p>
                  <p className="text-gray-400 italic">
                    Why It Matters: Understanding popular entry points can help you optimize these pages for
                    conversions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Goals and Conversions:</h3>
                <div className="ml-4 space-y-2">
                  <p className="text-gray-300">
                    Track specific actions that align with your business objectives, such as form submissions,
                    downloads, or contact requests.
                  </p>
                  <p className="text-gray-400 italic">
                    Why It Matters: Measures how effectively your site drives desired actions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Setting Up Goals */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Step-by-Step Instructions: Setting Up and Tracking Goals</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Set Up Goals:</h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Navigate to Admin:</h4>
                    <p className="text-gray-300">
                      In Google Analytics, click on the "Admin" gear icon at the bottom left.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Create a New Goal:</h4>
                    <p className="text-gray-300">Under the "View" column, click on "Goals" and then "+ New Goal."</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Select Goal Setup:</h4>
                    <p className="text-gray-300">
                      Choose a template that matches your objective (e.g., "Contact Form Submission" for inquiries).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Configure Goal Details:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Enter a description, such as "Contact Form Submission."</li>
                      <li>Set the goal type to "Destination," and click "Continue."</li>
                      <li>Input the destination URL (the thank you page users see after submitting the form).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">Verify and Save:</h4>
                    <p className="text-gray-300">Verify the goal to ensure it tracks correctly, then click "Save."</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">Track Goal Conversions:</h3>

                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Navigate to Conversions:</h4>
                    <p className="text-gray-300">In the left-hand menu, click on "Conversions" and then "Goals."</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">View Goal Performance:</h4>
                    <p className="text-gray-300">
                      Analyze the performance of your goals, including goal completions, conversion rates, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interpreting Data */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Interpreting and Using Google Analytics Data</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Monitor Audience Growth:</h3>
                <p className="text-gray-300 ml-4">
                  Regularly check the number of users and sessions to gauge audience growth. If numbers are stagnant,
                  consider revising your SEO and marketing strategies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Assess Content Effectiveness:</h3>
                <p className="text-gray-300 ml-4">
                  Evaluate which blog posts and pages receive the most traffic. Create similar content to meet audience
                  demand.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Identify High Bounce Rates:</h3>
                <p className="text-gray-300 ml-4">
                  Examine pages with high bounce rates to identify potential issues, such as irrelevant content or poor
                  design. Implement changes to improve user engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Analyze Traffic Sources:</h3>
                <p className="text-gray-300 ml-4">
                  Determine which channels drive the most traffic and allocate marketing resources accordingly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Adjust Based on Conversions:</h3>
                <p className="text-gray-300 ml-4">
                  Use goal tracking data to identify which pages and actions lead to conversions. Optimize these areas
                  to improve conversion rates.
                </p>
              </div>
            </div>
          </section>

          {/* Example Insights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Example Use of Google Analytics Insights</h2>

            <p className="text-gray-300 mb-4">
              Scenario: After setting up Google Analytics and tracking your website's performance for a month, you
              notice the following:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">High Bounce Rate on the Home Page:</h3>
                <p className="text-gray-300 mb-2">Insight: Visitors may not be finding what they expect.</p>
                <p className="text-gray-400">
                  Action: Revise the home page content to ensure it clearly communicates your value proposition and
                  includes clear navigation to other pages.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Increased Traffic from Social Media:</h3>
                <p className="text-gray-300 mb-2">Insight: Social media campaigns are effective.</p>
                <p className="text-gray-400">
                  Action: Continue to invest in social media marketing. Share more engaging content to capitalize on
                  this traffic source.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Low Average Session Duration on Blog Posts:</h3>
                <p className="text-gray-300 mb-2">Insight: Visitors might not find the blog content engaging.</p>
                <p className="text-gray-400">
                  Action: Improve blog post quality by adding more detailed information, images, and links to related
                  content.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">High Conversion Rate on Property Listings:</h3>
                <p className="text-gray-300 mb-2">Insight: Property listing pages are driving inquiries.</p>
                <p className="text-gray-400">
                  Action: Optimize other pages to replicate the success of property listings, such as adding more CTAs
                  and contact forms.
                </p>
              </div>
            </div>
          </section>

          {/* Tools and Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Tools and Resources for Using Google Analytics</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Google Analytics:</h3>
                <p className="text-gray-300 ml-4">
                  The primary tool for tracking website performance and user behavior.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Google Tag Manager:</h3>
                <p className="text-gray-300 ml-4">
                  Simplifies the process of adding and managing tags on your website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Insert Headers and Footers:</h3>
                <p className="text-gray-300 ml-4">
                  A WordPress plugin for easily adding tracking code to your website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Yoast SEO:</h3>
                <p className="text-gray-300 ml-4">
                  A WordPress plugin to optimize content for SEO and monitor keyword performance.
                </p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <div className="bg-gray-800 border border-orange-600/20 rounded-lg p-6 mt-12">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Set up Google Analytics by following the step-by-step instructions to track your website's performance.
              Focus on key metrics such as users, sessions, bounce rate, and conversions to understand how visitors
              interact with your site. Use this data to identify high-performing pages and areas needing improvement.
              Implement changes based on insights, such as optimizing content and improving user experience. Regularly
              monitor your website's performance and adjust your strategy to enhance SEO, engage your audience, and
              drive more conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

