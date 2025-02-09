export default function WebsiteSpeed() {
    return (
      <div className="min-h-screen bg-[#1A1A1A]">
        <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
          <div className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
            MODULE 5: TECHNICAL SEO BASICS
          </div>
  
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Improving Website Speed
            <br />
            (Basics and Easy Fixes)
          </h1>
  
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            The speed at which your website loads plays a crucial role in user experience and search engine rankings. A
            slow website can frustrate visitors and lead to higher bounce rates. Fortunately, there are simple,
            non-technical steps you can take to improve your website's loading speed. This section covers basic concepts
            and easy fixes to help you ensure your website loads quickly.
          </p>
  
          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Why Website Speed Matters</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Better User Experience:</h3>
                  <p className="text-gray-300">
                    Faster loading times mean visitors can access and navigate your site smoothly, improving their overall
                    experience.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Higher Search Engine Rankings:</h3>
                  <p className="text-gray-300">
                    Google and other search engines favor websites that load quickly, boosting their rankings in search
                    results.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Increased Engagement:</h3>
                  <p className="text-gray-300">
                    Quicker load times lead to higher engagement, such as longer visits, more page views, and higher
                    conversion rates.
                  </p>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Lower Bounce Rates:</h3>
                  <p className="text-gray-300">
                    When a website loads too slowly, visitors are more likely to leave immediately. Faster sites keep
                    visitors engaged.
                  </p>
                </div>
              </div>
            </div>
  
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Basics of Improving Website Speed</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Optimize Images:</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Large images can slow down your website. Optimize them by reducing their file size without
                      sacrificing quality.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Tool: </span>
                        <a href="https://tinypng.com" className="text-orange-400 hover:text-orange-300">
                          TinyPNG
                        </a>{" "}
                        – Easily compress your images by uploading them to TinyPNG, which reduces file sizes while
                        maintaining quality.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Enable Browser Caching:</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Browser caching stores parts of your website on a visitor's device, so it loads faster on subsequent
                      visits.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Tip: </span>
                        If using WordPress, plugins like <span className="text-white">W3 Total Cache</span> can handle
                        this for you with minimal setup.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Minimize HTTP Requests:</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Each element on your webpage (images, scripts, stylesheets) makes an HTTP request. Fewer elements
                      mean fewer requests and faster loading.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Tip: </span>
                        Combine multiple images into a single image file (sprite) or use fewer images.
                      </p>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Use a Content Delivery Network (CDN):</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      A CDN caches your site's content on multiple servers worldwide, reducing load times for visitors who
                      are far from your main server.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-gray-300">
                        <span className="text-white font-medium">Service: </span>
                        <a href="https://cloudflare.com" className="text-orange-400 hover:text-orange-300">
                          Cloudflare
                        </a>{" "}
                        – Sign up for a free plan and set it up to distribute your content globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  
  