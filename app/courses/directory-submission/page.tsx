import Link from "next/link"

export default function DirectorySubmissionPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 4: LOCAL SEO STRATEGIES
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Practical Exercise: Submit Your Business to 3 Online Directories
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            One of the most effective ways to improve your local SEO and increase your online visibility is by listing
            your business in reputable online directories. This practical exercise will guide you through the process of
            submitting your real estate business to three essential online directories: Google My Business, Yelp, and
            Bing Places for Business.
          </p>
        </div>

        <div className="space-y-12">
          {/* Step-by-Step Instructions Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Step-by-Step Instructions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 1: Gather Your Business Information</h3>
                <p className="text-gray-300 mb-4">
                  Before you begin, make sure you have all the necessary information about your business. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Business Name</li>
                  <li>Address (Use your standardized NAP format)</li>
                  <li>Phone Number</li>
                  <li>Website URL</li>
                  <li>Business Hours</li>
                  <li>Business Description (including relevant keywords)</li>
                  <li>High-quality images (logo, office, team, properties)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 2: Submit to Google My Business</h3>
                <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                  <li>
                    <strong>Visit Google My Business:</strong>
                    <p>Go to Google My Business.</p>
                  </li>
                  <li>
                    <strong>Sign In:</strong>
                    <p>Sign in with your Google account. If you don't have one, create a new account.</p>
                  </li>
                  <li>
                    <strong>Add Your Business:</strong>
                    <p>
                      Click on the "Manage now" button and enter your business name. If your business appears in the
                      drop-down list, select it. If not, click "Add your business to Google."
                    </p>
                  </li>
                  <li>
                    <strong>Enter Business Information:</strong>
                    <p>
                      Fill out your business details, including name, address, phone number, and website URL. Choose the
                      appropriate category for your business (e.g., Real Estate Agency).
                    </p>
                  </li>
                  <li>
                    <strong>Verify Your Business:</strong>
                    <p>
                      Google will prompt you to verify your business. Choose the verification method (e.g., postcard,
                      phone, or email) and follow the instructions.
                    </p>
                  </li>
                  <li>
                    <strong>Complete Your Profile:</strong>
                    <p>
                      Once verified, add business hours, a detailed description, high-quality images, and other relevant
                      information.
                    </p>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 3: Submit to Yelp</h3>
                <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                  <li>
                    <strong>Visit Yelp for Business:</strong>
                    <p>Go to Yelp for Business.</p>
                  </li>
                  <li>
                    <strong>Sign Up or Log In:</strong>
                    <p>If you already have a Yelp account, log in. If not, create a new account.</p>
                  </li>
                  <li>
                    <strong>Add Your Business:</strong>
                    <p>
                      Enter your business name and address. If your business is already listed, claim it. If not,
                      continue to add a new business.
                    </p>
                  </li>
                  <li>
                    <strong>Fill Out Business Information:</strong>
                    <p>
                      Provide your standardized NAP information, business hours, and a detailed description with
                      relevant keywords. Upload high-quality images of your business and properties.
                    </p>
                  </li>
                  <li>
                    <strong>Verify Your Business:</strong>
                    <p>
                      Yelp may require verification via phone or email. Follow the provided instructions to complete the
                      verification process.
                    </p>
                  </li>
                  <li>
                    <strong>Optimize Your Listing:</strong>
                    <p>
                      Encourage clients to leave reviews and respond promptly to all feedback. Keep your listing updated
                      with new photos and information.
                    </p>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Step 4: Submit to Bing Places for Business</h3>
                <ol className="list-decimal pl-6 space-y-4 text-gray-300">
                  <li>
                    <strong>Visit Bing Places:</strong>
                    <p>Go to Bing Places for Business.</p>
                  </li>
                  <li>
                    <strong>Sign In or Sign Up:</strong>
                    <p>Log in with your Microsoft account, or create a new account if needed.</p>
                  </li>
                  <li>
                    <strong>Add Your Business:</strong>
                    <p>Click on "Add a new business" and enter your business name and location.</p>
                  </li>
                  <li>
                    <strong>Complete Business Details:</strong>
                    <p>
                      Fill in your standardized NAP information, website URL, business hours, and a detailed
                      description. Add high-quality images, including your logo and property photos.
                    </p>
                  </li>
                  <li>
                    <strong>Verify Your Business:</strong>
                    <p>
                      Bing will prompt you to verify your business either through phone, email, or postcard. Follow the
                      instructions to complete the verification.
                    </p>
                  </li>
                  <li>
                    <strong>Optimize Your Profile:</strong>
                    <p>
                      Regularly update your listing with new photos, respond to reviews, and ensure all information is
                      current.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Example Submissions Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Example Submissions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Google My Business:</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Business Name:</strong> John Doe Real Estate
                    </li>
                    <li>
                      <strong>Address:</strong> 123 Main Street, Miami, FL 33101
                    </li>
                    <li>
                      <strong>Phone:</strong> (305) 555-1234
                    </li>
                    <li>
                      <strong>Website:</strong> www.johndoerealestate.com
                    </li>
                    <li>
                      <strong>Business Hours:</strong> Mon-Fri: 9 AM - 6 PM
                    </li>
                    <li>
                      <strong>Business Description:</strong> "John Doe Real Estate offers top-notch real estate services
                      in Miami. Whether buying or selling, our experienced agents are here to help. Contact us today to
                      find your dream home."
                    </li>
                    <li>
                      <strong>Images:</strong> High-quality logo, office exterior and interior, team photos, featured
                      properties.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Yelp:</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Business Name:</strong> John Doe Real Estate
                    </li>
                    <li>
                      <strong>Address:</strong> 123 Main Street, Miami, FL 33101
                    </li>
                    <li>
                      <strong>Phone:</strong> (305) 555-1234
                    </li>
                    <li>
                      <strong>Website:</strong> www.johndoerealestate.com
                    </li>
                    <li>
                      <strong>Business Hours:</strong> Mon-Fri: 9 AM - 6 PM
                    </li>
                    <li>
                      <strong>Business Description:</strong> "Expert real estate agency in Miami, specializing in
                      residential properties, luxury homes, and investment properties. Customer satisfaction is our
                      number one priority."
                    </li>
                    <li>
                      <strong>Images:</strong> High-quality logo, property photos, office interior.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Bing Places for Business:</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Business Name:</strong> John Doe Real Estate
                    </li>
                    <li>
                      <strong>Address:</strong> 123 Main Street, Miami, FL 33101
                    </li>
                    <li>
                      <strong>Phone:</strong> (305) 555-1234
                    </li>
                    <li>
                      <strong>Website:</strong> www.johndoerealestate.com
                    </li>
                    <li>
                      <strong>Business Hours:</strong> Mon-Fri: 9 AM - 6 PM
                    </li>
                    <li>
                      <strong>Business Description:</strong> "John Doe Real Estate in Miami offers comprehensive real
                      estate services. Our dedicated team is here to assist with buying, selling, and investing in
                      properties."
                    </li>
                    <li>
                      <strong>Images:</strong> Company logo, team photos, sample property listings.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Help Submit and Manage Listings</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Moz Local</h3>
                <p className="text-gray-300">
                  Manage your local business listings across multiple platforms and ensure NAP consistency.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BrightLocal</h3>
                <p className="text-gray-300">
                  Comprehensive tool for listing management, local SEO tracking, and citation updates.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Yext</h3>
                <p className="text-gray-300">
                  Automate and manage your business information across multiple directories from a single platform.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Whitespark</h3>
                <p className="text-gray-300">Specializes in local listing audits, management, and citation building.</p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Begin by submitting your real estate business to Google My Business, Yelp, and Bing Places for Business.
              Use your standardized NAP information and include detailed descriptions and high-quality images. For
              ongoing management and to ensure consistency across all listings, consider using tools like Moz Local or
              BrightLocal. Regularly update your listings and engage with reviews to maintain a strong online presence
              and improve your local SEO.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/local-links/news"
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
              Previous: Using Local News and Community Boards
            </Link>
            <Link
              href="/courses/mobile-friendly"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Ensuring Mobile-Friendliness
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

