import Link from "next/link"

export default function ImageOptimizationPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">MODULE 3: ON-PAGE SEO</h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">Image Optimization</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Images play a crucial role in engaging your audience and showcasing properties effectively on your real
            estate website. However, to ensure these images also contribute to your SEO efforts, optimizing them
            properly is essential. This section will cover the best practices for image optimization, including file
            naming, alt text, and image compression.
          </p>
        </div>

        <div className="space-y-12">
          {/* Importance Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Importance of Image Optimization</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhanced User Experience:</h3>
                <p className="text-gray-300">
                  Optimized images load faster and appear correctly across different devices, improving overall user
                  experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improved SEO:</h3>
                <p className="text-gray-300">
                  Search engines index images and consider them when ranking pages. Optimized images can help improve
                  your search engine rankings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Higher Engagement:</h3>
                <p className="text-gray-300">
                  High-quality, relevant images attract more attention and can lead to higher engagement with your
                  content.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Best Practices for Image Optimization</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Choose High-Quality Images:</h3>
                <p className="text-gray-300 mb-4">
                  Use professional, high-resolution images that showcase properties in the best light. Quality images
                  enhance credibility and appeal.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Invest in professional photography or use high-quality stock images if needed.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Optimize File Names:</h3>
                <p className="text-gray-300 mb-4">
                  Use descriptive, keyword-rich file names for your images. This helps search engines understand the
                  content of the images.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Instead of using "IMG1234.jpg," use "luxury-home-for-sale-miami.jpg."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Add Alt Text:</h3>
                <p className="text-gray-300 mb-4">
                  Alt text provides a text alternative for search engines and improves accessibility. Include relevant
                  keywords naturally within your alt text.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Alt Text: "Luxury home for sale with private pool in Miami."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Use Descriptive Captions:</h3>
                <p className="text-gray-300 mb-4">
                  Captions provide context and can improve user engagement. Make them descriptive and relevant to the
                  image.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Caption: "Spacious living room with ocean views in a luxury Miami condo."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Compress Images:</h3>
                <p className="text-gray-300 mb-4">
                  Compress images to reduce file sizes without significantly compromising quality. This improves page
                  load speed and user experience.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tools: </span>
                    Use tools like TinyPNG, ImageOptim, or ShortPixel for image compression.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Specify Image Dimensions:</h3>
                <p className="text-gray-300 mb-4">
                  Specify the width and height attributes for images to ensure they load correctly and quickly.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Set these attributes in your HTML or CSS to control image dimensions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Use Appropriate File Formats:</h3>
                <p className="text-gray-300 mb-4">
                  Choose the right file format based on the type of image. Use JPEG for photographs and PNG for images
                  that require transparency.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Consider using next-gen formats like WebP for better compression and quality.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Create an Image Sitemap:</h3>
                <p className="text-gray-300 mb-4">
                  An image sitemap helps search engines discover and index all the images on your website.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tools: </span>
                    Use plugins like Yoast SEO or create a sitemap manually following Google's guidelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Steps for Optimizing Images</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Select and Edit Images:</h3>
                <p className="text-gray-300">
                  Choose high-quality images that are relevant to your content. Use photo editing tools like Adobe
                  Photoshop or Lightroom to enhance them if necessary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Rename Image Files:</h3>
                <p className="text-gray-300 mb-4">
                  Rename your image files with descriptive, keyword-rich names before uploading them to your website.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Change "DSC_001.jpg" to "modern-kitchen-interior-design.jpg."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Add Alt Text:</h3>
                <p className="text-gray-300 mb-4">
                  After uploading, add alt text to each image. Make sure the alt text is descriptive and includes
                  relevant keywords naturally.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    Alt Text: "Affordable family home with large backyard in Austin."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">4. Compress Images:</h3>
                <p className="text-gray-300">
                  Use image compression tools to reduce file sizes. Aim for a balance between quality and file size to
                  ensure fast loading times.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">5. Specify Dimensions:</h3>
                <p className="text-gray-300 mb-4">
                  In your HTML or CSS, specify the width and height attributes for each image.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-gray-300">
                    {
                      '<img src="modern-kitchen-interior-design.jpg" alt="Modern kitchen interior design" width="600" height="400">'
                    }
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">6. Use Appropriate Formats:</h3>
                <p className="text-gray-300">
                  Choose the best file format for each image type. Save photographs as JPEGs and images with
                  transparency as PNGs.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">7. Add Captions:</h3>
                <p className="text-gray-300">
                  Include descriptive captions where appropriate to provide additional context and enhance user
                  engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">8. Update Image Sitemap:</h3>
                <p className="text-gray-300">
                  Update your image sitemap to include new images. Submit the sitemap through Google Search Console to
                  ensure all images are indexed.
                </p>
              </div>
            </div>
          </section>

          {/* Example Implementation Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example of Optimized Image Implementation</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">HTML Example:</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-gray-300 overflow-x-auto">
                    {`<article>
    <h2>Luxury Homes for Sale in Miami</h2>
    <img src="luxury-home-for-sale-miami.jpg" 
         alt="Luxury home for sale with private pool in Miami" 
         width="800" 
         height="600">
    <p>Discover exquisite luxury homes in Miami, featuring stunning designs and premium amenities.</p>
    <img src="oceanfront-living-room-miami.jpg" 
         alt="Oceanfront living room in Miami luxury condo" 
         width="800" 
         height="600">
    <p>Experience breathtaking ocean views from this modern living room in a Miami condo.</p>
</article>`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Image Sitemap Example:</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-gray-300 overflow-x-auto">
                    {`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.yourdomain.com/luxury-home-for-sale-miami</loc>
    <image:image>
      <image:loc>https://www.yourdomain.com/images/luxury-home-for-sale-miami.jpg</image:loc>
      <image:caption>Luxury home for sale with private pool in Miami</image:caption>
      <image:title>Luxury Home in Miami</image:title>
    </image:image>
    <image:image>
      <image:loc>https://www.yourdomain.com/images/oceanfront-living-room-miami.jpg</image:loc>
      <image:caption>Oceanfront living room in Miami luxury condo</image:caption>
      <image:title>Oceanfront Living Room in Miami Condo</image:title>
    </image:image>
  </url>
</urlset>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Choose several key images on your real estate website and optimize them following the guidelines above.
              Use TinyPNG or similar compression tools to reduce their file sizes. Add descriptive, keyword-rich alt
              text and update your image sitemap. Monitor your website's performance using tools like Google PageSpeed
              Insights to ensure that your images are loading quickly and efficiently, contributing to a better user
              experience and improved SEO. If you use SEOrocket.ai, all images will already be optimized when you create
              content, saving you time and effort.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/content-optimization/incorporating-keywords"
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
              Previous: Incorporating Keywords
            </Link>
            <Link
              href="/courses/image-optimization/alt-text"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Using Alt Text for SEO
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

