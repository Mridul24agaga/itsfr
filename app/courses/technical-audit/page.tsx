import Link from "next/link"

export default function TechnicalSEOAudit() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-300 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-blue-500 mb-2 font-medium">MODULE 5: TECHNICAL SEO BASICS</p>
          <h1 className="text-3xl font-bold text-white mb-4">
            Practical Exercise: Run a Basic Technical SEO Audit Using Free Tools
          </h1>
          <p className="text-gray-300 mb-6">
            A technical SEO audit helps you identify and fix issues that might be affecting your website's performance
            and visibility in search engines. This practical exercise will guide you through a simple, non-technical
            audit using free tools like Google PageSpeed Insights.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Step-by-Step Instructions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Step 1: Gather Your Website Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">URL:</strong> Note the web address of the site or page you want to
                    audit.
                  </li>
                  <li>
                    <strong className="text-white">Site Builder/Host Information:</strong> Knowing the platform (e.g.,
                    WordPress, Wix) and hosting provider can be helpful for implementing fixes.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Step 2: Test Your Page Speed</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Visit Google PageSpeed Insights:</h4>
                    <p>
                      Go to{" "}
                      <Link
                        href="https://pagespeed.web.dev/"
                        className="text-orange-400 hover:text-orange-300"
                        target="_blank"
                      >
                        Google PageSpeed Insights
                      </Link>
                      .
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Enter Your URL:</h4>
                    <p>Type in the URL of the webpage you want to test and click "Analyze."</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Review the Results:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Note your speed score for both mobile and desktop.</li>
                      <li>Scroll down to review the recommendations for improvement.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Key Metrics to Look At:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong className="text-white">First Contentful Paint (FCP):</strong> How long it takes for the
                        first piece of content to load.
                      </li>
                      <li>
                        <strong className="text-white">Largest Contentful Paint (LCP):</strong> Time it takes for the
                        largest element to load.
                      </li>
                      <li>
                        <strong className="text-white">Cumulative Layout Shift (CLS):</strong> Measures visual
                        stability.
                      </li>
                      <li>
                        <strong className="text-white">Speed Index:</strong> Average time for the page to become
                        visually complete.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Step 3: Optimize Images</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Check for Image Optimization Suggestions:</h4>
                    <p>
                      PageSpeed Insights will often recommend optimizing images if they are too large or not compressed.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">Compress Images Using TinyPNG:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Go to{" "}
                        <Link
                          href="https://tinypng.com"
                          className="text-orange-400 hover:text-orange-300"
                          target="_blank"
                        >
                          TinyPNG
                        </Link>
                        .
                      </li>
                      <li>Upload your images to compress them.</li>
                      <li>
                        Download the compressed images and replace the existing images on your website with these
                        smaller versions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-white mb-4">Tools for Technical SEO Audit</h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-white block">Google PageSpeed Insights:</strong>
                    <p>Enter your URL to get an analysis of your page speed and actionable suggestions.</p>
                  </li>
                  <li>
                    <strong className="text-white block">TinyPNG:</strong>
                    <p>Compress images to improve loading times without sacrificing quality.</p>
                  </li>
                  <li>
                    <strong className="text-white block">Cloudflare:</strong>
                    <p>Use it to implement a global CDN to speed up content delivery.</p>
                  </li>
                  <li>
                    <strong className="text-white block">W3 Total Cache:</strong>
                    <p>Plugin for WordPress to enable browser caching and optimize site performance.</p>
                  </li>
                  <li>
                    <strong className="text-white block">Autoptimize:</strong>
                    <p>Plugin for WordPress to minify CSS and JavaScript files, improving load times.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <h2 className="text-xl font-semibold text-white mb-3">Actionable Insight</h2>
                <p>
                  Perform a simple technical SEO audit on your website using Google PageSpeed Insights. Compress images
                  with TinyPNG and enable browser caching through a plugin like W3 Total Cache if you use WordPress.
                  Implement a CDN using Cloudflare and simplify your page design to remove unnecessary elements.
                  Regularly check your website's performance and address any issues promptly to maintain a fast and
                  efficient site. By following these steps, you can enhance user experience, improve search engine
                  rankings, and attract more clients to your real estate business.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

