import Link from "next/link"

export default function EncouragingReviewsPage() {
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
            Encouraging Clients to Leave Positive Reviews
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Positive reviews are pivotal in building your online reputation and attracting more clients. Encouraging
            satisfied clients to share their experiences can amplify your credibility and enhance your local SEO. This
            section provides effective strategies to encourage clients to leave positive reviews.
          </p>
        </div>

        <div className="space-y-12">
          {/* Why Positive Reviews Matter Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Why Positive Reviews Matter</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Build Trust and Credibility:</h3>
                <p className="text-gray-300">
                  Positive reviews serve as testimonials that build trust and credibility with potential clients.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Boost Local SEO:</h3>
                <p className="text-gray-300">
                  Search engines consider the quantity and quality of reviews as a ranking factor for local search
                  results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Influence Client Decisions:</h3>
                <p className="text-gray-300">
                  Prospective clients often rely on reviews to make informed decisions. Positive reviews can sway their
                  choice in your favor.
                </p>
              </div>
            </div>
          </section>

          {/* Strategies Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Strategies to Encourage Positive Reviews</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Ask Directly and Personally:</h3>
                <p className="text-gray-300 mb-4">
                  A direct, personal request is often the most effective way to get a review. Ask your satisfied clients
                  personally, either face-to-face, via email, or over the phone.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Script:</h4>
                  <pre className="text-gray-300 whitespace-pre-wrap">
                    {`Hi [Client's Name],

I'm glad we could help you find your dream home! If you had a good experience with us, we would greatly appreciate it if you could leave a positive review on [platform]. Your feedback helps us improve and helps others make informed decisions.

[Review Link]

Thank you!
[Your Name]`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Automate Review Requests:</h3>
                <p className="text-gray-300 mb-4">
                  Use CRM tools to automate the review request process. These systems can send follow-up emails or SMS
                  messages requesting reviews after a successful transaction.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Tools:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>HubSpot CRM: Automate email sequences to request reviews.</li>
                    <li>Salesforce: Set triggers to send SMS review requests.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Provide Direct Links:</h3>
                <p className="text-gray-300 mb-4">
                  Make it as easy as possible for clients to leave a review by providing direct links to your review
                  pages.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Leave a review on Google | Yelp | Facebook."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Create a Review Page on Your Website:</h3>
                <p className="text-gray-300 mb-4">
                  Dedicate a page on your website to guide clients on how to leave reviews. Include step-by-step
                  instructions and direct links to review sites.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example:</h4>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Page Title: </span>
                    "Share Your Feedback"
                  </p>
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Content: </span>
                    Instructions for leaving reviews on Google, Yelp, and Facebook, with direct links.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Incentivize Reviews:</h3>
                <p className="text-gray-300 mb-4">
                  Offer small incentives to encourage clients to leave a review. Ensure that incentives are for leaving
                  a review, not specifically for positive feedback.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "Leave a review and receive a $10 Amazon gift card."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Up with Clients:</h3>
                <p className="text-gray-300 mb-4">
                  Send a follow-up email or call clients after services are rendered to check their satisfaction and
                  gently remind them to leave a review.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Follow-Up Email:</h4>
                  <pre className="text-gray-300 whitespace-pre-wrap">
                    {`Hi [Client's Name],

Just following up to see how you're settling into your new home. We're thrilled to have been part of your journey. If you have a moment, could you share your experience by leaving a review?

[Review Link]

Thank you!
[Your Name]`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Leverage Social Media:</h3>
                <p className="text-gray-300 mb-4">
                  Use your social media platforms to encourage reviews. Share posts reminding your followers to leave
                  feedback.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Post:</h4>
                  <p className="text-gray-300">
                    We love hearing from you! If you've had a positive experience with [Your Business Name], please
                    consider leaving us a review on [Google/Yelp/Facebook]. Your feedback helps us serve you better.
                    [Review Link]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Display Testimonials:</h3>
                <p className="text-gray-300 mb-4">
                  Showcase existing positive reviews on your website and social media. Seeing others' experiences can
                  motivate clients to share their own.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300">
                    <span className="text-white font-medium">Example: </span>
                    "See what our clients are saying about us! [Link to Testimonials Page]"
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Create Review Invitations:</h3>
                <p className="text-gray-300 mb-4">
                  Design and print review invitation cards to hand out to clients at the end of your service. Include
                  URLs or QR codes leading to your review pages.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Card Text:</h4>
                  <p className="text-gray-300">
                    Thank you for choosing [Your Business Name]! We value your feedback. Please leave us a review at:
                    <br />
                    [QR Code]
                    <br />
                    [Review Links]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Address and Monitor Reviews:</h3>
                <p className="text-gray-300 mb-4">
                  Respond to all reviews to show that you value feedback. Thank clients for positive reviews and address
                  any concerns in negative reviews.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Example Response:</h4>
                  <p className="text-gray-300">
                    Thank you, [Client's Name], for your kind words! We're thrilled to hear about your positive
                    experience and look forward to assisting you again in the future.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Examples of Requesting Positive Reviews</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 1: Email Request</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Subject: "We'd Love Your Feedback!"</h4>
                  <p className="text-gray-300 mb-4">Body:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Thank the client for their business.</li>
                    <li>Politely ask for a review and provide direct links to review platforms.</li>
                    <li>Offer an incentive, such as a small discount or entry into a giveaway.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 2: SMS Request</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">Timing: 1-2 days after a positive transaction.</p>
                  <h4 className="text-lg font-semibold text-white mb-4">Text:</h4>
                  <p className="text-gray-300">
                    Hi [Client's Name], thank you for choosing [Your Business Name]. If you had a great experience,
                    please leave us a review: [Review Link]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Example 3: In-Person Request</h3>
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">Timing: At the end of a successful transaction or service.</p>
                  <h4 className="text-lg font-semibold text-white mb-4">Script:</h4>
                  <p className="text-gray-300">
                    We're so glad we could help you with [Service]. If you have a moment, we'd really appreciate it if
                    you could leave us a review on Google or Yelp. Here's a card with the links!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-8">Tools for Requesting and Managing Reviews</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">HubSpot CRM</h3>
                <p className="text-gray-300">
                  Automate email sequences and follow-ups to request reviews from clients.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Salesforce</h3>
                <p className="text-gray-300">Set triggers and workflows to send SMS or email review requests.</p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">ReviewTrackers</h3>
                <p className="text-gray-300">
                  Monitor and manage reviews across multiple platforms to respond promptly.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">BirdEye</h3>
                <p className="text-gray-300">
                  Gather, monitor, and respond to reviews from across the web in one platform.
                </p>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Google My Business</h3>
                <p className="text-gray-300">
                  A free tool from Google to manage how your business appears on Google Search and Maps.
                </p>
              </div>
            </div>
          </section>

          {/* Actionable Insight */}
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Actionable Insight</h2>
            <p className="text-gray-300">
              Develop a robust system for requesting reviews by integrating automated tools like HubSpot CRM or
              Salesforce. Create clear, direct links to your review pages and provide these in emails, SMS messages, and
              on your website. Regularly remind and encourage satisfied clients to leave reviews through personalized
              follow-ups and social media posts. Monitor and respond to reviews promptly using tools like
              ReviewTrackers. For a seamless experience, consider using BirdEye to gather and manage your reviews across
              multiple platforms.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/reviews"
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
              Previous: Gathering and Managing Online Reviews
            </Link>
            <Link
              href="/courses/reviews/responding"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Responding to Reviews Effectively
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

