import Link from "next/link"

export default function RespondingToReviewsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/reviews" className="text-orange-400 hover:text-orange-300">
              MODULE 4: LOCAL SEO STRATEGIES
            </Link>
            <span>›</span>
            <Link href="/courses/reviews" className="text-orange-400 hover:text-orange-300">
              GATHERING AND MANAGING ONLINE REVIEWS
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Responding to Reviews Effectively
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Responding to reviews, whether positive or negative, is crucial for maintaining your online reputation and
            fostering trust with current and potential clients. How you respond to reviews can significantly impact how
            your business is perceived. This section will guide you through best practices for responding to all types
            of reviews effectively.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Responding to Reviews Matters Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Responding to Reviews Matters</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Builds Trust and Credibility:</h3>
                <p className="text-gray-300">
                  Responding to reviews shows that you value client feedback and are committed to excellent customer
                  service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Enhances Relationships:</h3>
                <p className="text-gray-300">
                  Engaging with reviewers, both satisfied and dissatisfied, helps build stronger relationships and
                  encourages loyalty.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Improves Local SEO:</h3>
                <p className="text-gray-300">
                  Active engagement with reviews can positively impact your local search rankings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Demonstrates Professionalism:</h3>
                <p className="text-gray-300">
                  Thoughtful responses exhibit professionalism and a proactive approach to client satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Best Practices for Responding to Reviews</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Respond Promptly:</h3>
                <p className="text-gray-300">
                  Aim to respond to reviews within a few days of receiving them. This shows that you are attentive and
                  value client feedback.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Personalize Your Responses:</h3>
                <p className="text-gray-300">
                  Use the reviewer's name if possible and refer to specific points they mentioned. Personalizing your
                  responses shows that you are engaged and genuinely care about their feedback.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Express Gratitude:</h3>
                <p className="text-gray-300">
                  Always thank the reviewer, regardless of whether the review is positive or negative. Acknowledging
                  their feedback shows appreciation and respect.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Thank you, [Client's Name], for your feedback. We appreciate your kind words."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Keep It Professional:</h3>
                <p className="text-gray-300">
                  Maintain a professional and courteous tone in all responses. Avoid being defensive, even if the review
                  is negative.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "We're sorry to hear about your experience and would like to address your concerns."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Offer Solutions:</h3>
                <p className="text-gray-300">
                  For negative reviews, offer to resolve the issue offline. Provide a way for the reviewer to contact
                  you directly to discuss their concerns further.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Please contact us at [Your Contact Info] so we can discuss this further and find a resolution."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Highlight Positives:</h3>
                <p className="text-gray-300">
                  In positive reviews, highlight and reinforce specific aspects that the reviewer praised. This not only
                  acknowledges their satisfaction but also showcases your strengths to other readers.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "We're thrilled to hear you enjoyed our customer service and found the perfect home."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Be Concise and Clear:</h3>
                <p className="text-gray-300">
                  Keep your responses concise and to the point, while ensuring you address the key points of the review.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 mt-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Thank you for your feedback. We're glad you had a good experience and look forward to serving you
                    again."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Examples of Responding to Reviews</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Positive Review Response</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Review:</h4>
                  <p className="text-gray-300 mb-4">
                    "Fantastic service! John Doe Real Estate helped us find our dream home quickly and efficiently.
                    Highly recommend!"
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-4">Response:</h4>
                  <p className="text-gray-300">
                    Hi [Client's Name],
                    <br />
                    <br />
                    Thank you so much for your kind words and for choosing John Doe Real Estate. We're thrilled to hear
                    that you found your dream home and had a great experience with our team. Your recommendation means a
                    lot to us, and we're here if you need anything in the future.
                    <br />
                    <br />
                    Best regards,
                    <br />
                    [Your Name]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Negative Review Response</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Review:</h4>
                  <p className="text-gray-300 mb-4">
                    "We had issues with poor communication during our buying process. Not what we expected."
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-4">Response:</h4>
                  <p className="text-gray-300">
                    Hi [Client's Name],
                    <br />
                    <br />
                    We're sorry to hear about your experience with our communication. This is not the standard we strive
                    for. We would like to address your concerns directly and ensure this doesn't happen again. Please
                    reach out to us at [Your Contact Info] so we can discuss this further.
                    <br />
                    <br />
                    Best regards,
                    <br />
                    [Your Name]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Neutral Review Response</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Review:</h4>
                  <p className="text-gray-300 mb-4">
                    "The service was okay, but there were some delays in the process."
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-4">Response:</h4>
                  <p className="text-gray-300">
                    Hi [Client's Name],
                    <br />
                    <br />
                    Thank you for your feedback. We apologize for the delays you experienced and appreciate your
                    patience. We're always looking to improve and will use your input to enhance our services. Please
                    feel free to reach out if you have further suggestions or concerns.
                    <br />
                    <br />
                    Best regards,
                    <br />
                    [Your Name]
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools to Help You Manage and Respond to Reviews</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Google My Business</h3>
                <p className="text-gray-300">
                  Manage and respond to reviews appearing on Google Search and Maps directly from your GMB account.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">ReviewTrackers</h3>
                <p className="text-gray-300">
                  Monitor and respond to reviews from across multiple platforms in one place.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BirdEye</h3>
                <p className="text-gray-300">
                  Comprehensive tool for gathering, monitoring, and responding to reviews. It also offers automation
                  features for review response management.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Hootsuite</h3>
                <p className="text-gray-300">
                  Manage your social media accounts and respond to reviews and comments from a single dashboard.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Yext</h3>
                <p className="text-gray-300">
                  Manage your online presence and respond to reviews from various platforms through the Yext dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Implement a systematic approach to monitor and respond to reviews using a tool like ReviewTrackers or
              BirdEye. Ensure you are responding to all reviews promptly, with personalized and professional replies.
              For Google reviews, manage them through Google My Business. Encourage satisfied clients to leave reviews,
              and always address negative feedback constructively, offering to resolve issues offline. Regular
              engagement with reviews will build trust and improve your business's online reputation.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/reviews/encouraging"
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
              Previous: Encouraging Positive Reviews
            </Link>
            <Link
              href="/courses/local-links"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Local Link Building Strategies
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

