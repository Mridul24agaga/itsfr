import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Google Search Console | SEO for Real Estate",
  description:
    "Learn how to use Google Search Console to monitor, maintain, and troubleshoot your site's presence in Google Search results.",
}

export default function GoogleSearchConsolePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-200 p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <nav className="text-sm mb-6">
          <Link href="/courses" className="text-orange-500 hover:text-orange-400">
            Courses
          </Link>
          <span className="mx-2">/</span>
          <Link href="/courses/measuring-success" className="text-orange-500 hover:text-orange-400">
            Measuring Success
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Google Search Console</span>
        </nav>

        <h1 className="text-3xl font-bold text-white">Google Search Console</h1>

        <p>
          Google Search Console is a vital tool for real estate agents to monitor, maintain, and troubleshoot their
          site's presence in Google Search results. It provides valuable insights into how Google views your site and
          helps you optimize your online presence to improve search rankings and visibility. This section covers setting
          up Google Search Console, understanding search performance, fixing errors, and enhancing visibility.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Why Google Search Console Matters</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Monitors Search Performance:</span> Provides detailed reports on how your
              site performs in Google Search, including traffic, impressions, and click-through rates (CTR).
            </li>
            <li>
              <span className="font-semibold">Identifies and Fixes Errors:</span> Alerts you to issues affecting your
              site's searchability, such as crawl errors, mobile usability issues, and security problems.
            </li>
            <li>
              <span className="font-semibold">Optimizes for Better Rankings:</span> Offers insights and suggestions to
              improve your site's SEO and overall performance in search results.
            </li>
            <li>
              <span className="font-semibold">Enhances Visibility:</span> Helps you understand which queries drive
              traffic to your site and how you can enhance visibility for those queries.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Step-by-Step Instructions: Setting Up Google Search Console
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Step 1: Add and Verify Your Website</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit Google Search Console: Go to Google Search Console.</li>
              <li>Sign In: Sign in with your Google account. If you don't have one, create a new account.</li>
              <li>
                Add Property: Click on the "Start now" button and enter your website URL under "URL prefix." Click
                "Continue."
              </li>
              <li>Verify Ownership: Choose a verification method. The recommended method is to use the HTML tag.</li>
              <li>Click "Copy" to copy the verification code.</li>
              <li>
                Add Verification Code to Your Site:
                <ul className="list-disc pl-6 mt-2">
                  <li>For WordPress: Use the Insert Headers and Footers plugin.</li>
                  <li>Go to Plugins - Add New, search for "Insert Headers and Footers," install, and activate.</li>
                  <li>
                    Navigate to Settings - Insert Headers and Footers and paste the verification code in the "Header"
                    section. Click "Save."
                  </li>
                </ul>
              </li>
              <li>Confirm Verification: Return to Google Search Console and click "Verify" to complete the setup.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Understanding Search Performance</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-semibold">Navigate to the Performance Report:</span> In Google Search Console, click
              on "Performance" in the left-hand menu.
            </li>
            <li>
              <span className="font-semibold">Review Key Metrics:</span>
              <ul className="list-disc pl-6 mt-2">
                <li>Total Clicks: Number of clicks to your website from Google Search results.</li>
                <li>Total Impressions: Number of times your site appeared in search results.</li>
                <li>Average CTR: The ratio of clicks to impressions, expressed as a percentage.</li>
                <li>Average Position: The average ranking position of your site in search results.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Analyze Search Queries:</span>
              <ul className="list-disc pl-6 mt-2">
                <li>See which search queries drive the most traffic to your site.</li>
                <li>Identify high-performing queries and opportunities for optimization.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Assess Page Performance:</span>
              <ul className="list-disc pl-6 mt-2">
                <li>Review the performance of individual pages to see which ones attract the most traffic.</li>
                <li>Optimize pages with low performance but high impression rates.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Fixing Errors and Enhancing Visibility</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Identify and Fix Crawl Errors:</h3>
              <p>Click on "Coverage" in the left-hand menu to see if Google is having trouble crawling any pages.</p>
              <p className="font-semibold mt-2">Types of Errors:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  404 Errors (Not Found): Pages that can't be found. Fix by ensuring the correct URLs are used and
                  setting up redirects.
                </li>
                <li>
                  Server Errors (5xx): Server issues preventing Google from accessing pages. Consult your web host or
                  developer to resolve these.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Enhance Mobile Usability:</h3>
              <p>Click on "Mobile Usability" to check for issues affecting mobile users.</p>
              <p className="font-semibold mt-2">Common Issues:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Text too small to read</li>
                <li>Clickable elements too close together</li>
                <li>Content wider than screen</li>
              </ul>
              <p className="mt-2">Fixes: Adjust your site's design and layout to improve mobile user experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Check Security Issues:</h3>
              <p>Click on "Security Issues" to ensure your site is free from malware or hacking issues.</p>
              <p>Action: If issues are detected, follow Google's recommended steps to resolve them promptly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Use the URL Inspection Tool:</h3>
              <p>Click on "URL Inspection" in the left-hand menu.</p>
              <p>Enter a URL from your site to see how Google views it and identify any issues.</p>
              <p>
                Fixes: Address any issues found and request reindexing to ensure Google updates its index with the
                latest version of your page.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Submit Sitemaps:</h3>
              <p>
                Click on "Sitemaps" and enter the URL of your sitemap (usually something like
                https://www.yourdomain.com/sitemap.xml).
              </p>
              <p>This helps Google better understand the structure of your site and ensures all pages are crawled.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Enhance Visibility with Rich Results:</h3>
              <p>Implement structured data on your site to enhance search result appearances with rich snippets.</p>
              <p>Tool: Use Google's Structured Data Testing Tool to validate your markup.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Example Use of Google Search Console Insights</h2>
          <p>
            Scenario: After setting up Google Search Console and monitoring your website's performance for a month, you
            notice the following:
          </p>
          <div className="bg-gray-800 p-6 rounded-lg space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white">
                High Impressions but Low Clicks for a Key Search Query:
              </h3>
              <p>
                <span className="font-semibold">Insight:</span> Your site appears often in search results, but few users
                click on it.
              </p>
              <p>
                <span className="font-semibold">Action:</span> Improve your meta titles and descriptions to make them
                more compelling and relevant to the query.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Several 404 Errors:</h3>
              <p>
                <span className="font-semibold">Insight:</span> Users are encountering broken pages.
              </p>
              <p>
                <span className="font-semibold">Action:</span> Fix the broken links or set up appropriate redirects to
                ensure a smooth user experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Mobile Usability Issues:</h3>
              <p>
                <span className="font-semibold">Insight:</span> Some pages are not optimized for mobile users.
              </p>
              <p>
                <span className="font-semibold">Action:</span> Adjust the text size, button spacing, and content layout
                to improve mobile usability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Security Issues Detected:</h3>
              <p>
                <span className="font-semibold">Insight:</span> Potential security vulnerabilities.
              </p>
              <p>
                <span className="font-semibold">Action:</span> Follow Google's recommendations to resolve security
                issues and ensure your site is secure.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Tools and Resources for Google Search Console</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Google Search Console:</span> The primary tool for monitoring and
              maintaining your site's presence in Google Search results.
            </li>
            <li>
              <span className="font-semibold">Google Tag Manager:</span> Simplifies the process of adding and managing
              tags on your website.
            </li>
            <li>
              <span className="font-semibold">Insert Headers and Footers:</span> A WordPress plugin for easily adding
              verification codes and other scripts to your site.
            </li>
            <li>
              <span className="font-semibold">Yoast SEO:</span> A WordPress plugin to optimize content for SEO and
              monitor keyword performance.
            </li>
            <li>
              <span className="font-semibold">Structured Data Testing Tool:</span> Validate your structured data to
              enhance search result appearances with rich snippets.
            </li>
          </ul>
        </section>

        <section className="bg-orange-900 border border-orange-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Actionable Insight</h2>
          <p>
            Set up Google Search Console by following the step-by-step instructions to monitor your site's performance
            in Google Search results. Focus on key metrics such as clicks, impressions, CTR, and average position to
            understand how your site is performing. Use the tool to identify and fix errors, enhance mobile usability,
            and ensure site security. Regularly review your search performance and make data-driven decisions to
            optimize your SEO strategy. By leveraging the insights and tools provided by Google Search Console, you can
            improve your website's visibility, enhance user experience, and attract more potential clients to your real
            estate business.
          </p>
        </section>
      </div>
    </div>
  )
}

