import Link from "next/link"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 4: LOCAL SEO STRATEGIES
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Gathering and Managing Online Reviews
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Online reviews play a crucial role in building trust and attracting new clients to your real estate
            business. Positive reviews not only enhance your reputation but also improve your local SEO rankings. This
            section will guide you through effective strategies for gathering and managing online reviews.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Reviews Matter Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Online Reviews Matter</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Build Trust and Credibility:</h3>
                <p className="text-gray-300">
                  Positive reviews from satisfied clients serve as testimonials that can build trust and credibility
                  with potential clients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improve Local SEO:</h3>
                <p className="text-gray-300">
                  Reviews are a key factor in local search rankings. Businesses with positive reviews are more likely to
                  appear in local search results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Influence Consumer Decisions:</h3>
                <p className="text-gray-300">
                  Many potential clients read reviews before making a decision. Positive reviews can influence their
                  choice in your favor.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Identify Areas for Improvement:</h3>
                <p className="text-gray-300">
                  Reviews provide insights into what clients appreciate and areas where you can improve your services.
                </p>
              </div>
            </div>
          </section>

          {/* Strategies Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Strategies for Gathering Online Reviews</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Create a Review Request System:</h3>
                <p className="text-gray-300 mb-4">
                  Develop a system for requesting reviews from clients after a successful transaction. This can be done
                  via email, SMS, or in-person.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Request Email:</h4>
                  <pre className="text-gray-300 whitespace-pre-wrap">
                    {`Subject: We'd Love Your Feedback!

Hi [Client's Name],

Thank you for choosing [Your Business Name]. We hope you had a great experience working with us. Your feedback is important to us and helps us provide the best service possible.

We would greatly appreciate it if you could take a few minutes to leave us a review on [Google/Yelp/Facebook].

[Review Link]

Thank you for your time and support!

Best regards,
[Your Name]
[Your Business Name]`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Make It Easy:</h3>
                <p className="text-gray-300 mb-4">
                  Provide direct links to your review profiles (Google, Yelp, Facebook) to make it easy for clients to
                  leave a review.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Leave us a review on Google | Yelp | Facebook."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Ask at the Right Time:</h3>
                <p className="text-gray-300 mb-4">
                  Request reviews when clients are most satisfied, such as after closing a deal or completing a
                  successful transaction.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Tip: </span>
                    Timing is crucial. Send your request shortly after a positive interaction to increase the likelihood
                    of receiving a review.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Reviews Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Managing Online Reviews</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Monitor Reviews Regularly:</h3>
                <p className="text-gray-300 mb-4">
                  Use tools or set up notifications to monitor reviews on different platforms. Respond to both positive
                  and negative reviews promptly.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Tools:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Google Alerts</li>
                    <li>ReviewTrackers</li>
                    <li>Yext</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Respond to Reviews:</h3>
                <div className="space-y-6">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Positive Review Response Example:</h4>
                    <pre className="text-gray-300 whitespace-pre-wrap">
                      {`Hi [Client's Name],

Thank you so much for your kind words! We're thrilled to hear that you had a great experience with [Your Business Name]. Your satisfaction is our top priority, and we're here if you need anything in the future.

Best regards,
[Your Name]
[Your Business Name]`}
                    </pre>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Negative Review Response Example:</h4>
                    <pre className="text-gray-300 whitespace-pre-wrap">
                      {`Hi [Client's Name],

We're sorry to hear about your experience. At [Your Business Name], we strive to provide excellent service, and it's clear we fell short in this instance. We would like to resolve this issue to your satisfaction. Please contact us directly at [Your Contact Info] so we can discuss this further.

Best regards,
[Your Name]
[Your Business Name]`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Help You Manage Reviews</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Google Alerts</h3>
                <p className="text-gray-300 mb-4">
                  Set up alerts to notify you whenever your business is mentioned online.
                </p>
                <Link href="https://www.google.com/alerts" className="text-orange-400 hover:text-orange-300">
                  Visit Google Alerts →
                </Link>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">ReviewTrackers</h3>
                <p className="text-gray-300 mb-4">
                  A tool to monitor and manage your online reviews across multiple platforms.
                </p>
                <Link href="https://www.reviewtrackers.com" className="text-orange-400 hover:text-orange-300">
                  Visit ReviewTrackers →
                </Link>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BirdEye</h3>
                <p className="text-gray-300 mb-4">
                  A review management and customer experience platform that helps gather and manage reviews.
                </p>
                <Link href="https://birdeye.com" className="text-orange-400 hover:text-orange-300">
                  Visit BirdEye →
                </Link>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">HubSpot CRM</h3>
                <p className="text-gray-300 mb-4">Automate review requests and follow-ups with this CRM tool.</p>
                <Link href="https://www.hubspot.com/products/crm" className="text-orange-400 hover:text-orange-300">
                  Visit HubSpot CRM →
                </Link>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Implement a system for regularly requesting reviews from clients after successful transactions. Use tools
              like ReviewTrackers to monitor and respond to reviews across multiple platforms. Personalize your
              responses to build stronger connections with clients and demonstrate your commitment to excellent service.
              For a comprehensive solution, consider using tools like BirdEye or HubSpot CRM to streamline your review
              management process.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/citations/directories"
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
              Previous: Best Places to List Your Business
            </Link>
            <Link
              href="/courses/reviews/encouraging"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Encouraging Positive Reviews
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

