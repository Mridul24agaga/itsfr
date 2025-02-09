import Link from "next/link"

export default function KeywordTypesPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/courses/understanding-keywords" className="text-orange-400 hover:text-orange-300">
              MODULE 2: KEYWORD RESEARCH
            </Link>
            <span>›</span>
            <Link href="/courses/understanding-keywords" className="text-orange-400 hover:text-orange-300">
              UNDERSTANDING KEYWORDS
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Long-Tail vs. Short-Tail Keywords
          </h1>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">What Are Long-tail and Short-tail Keywords?</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Short-tail Keywords:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Short-tail keywords, also known as head terms, are brief and very broad search phrases, typically
                  consisting of one to three words. For example, "real estate" or "buy house" are short-tail keywords.
                  These keywords generate a high search volume but are highly competitive.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Long-tail Keywords:</h3>
                <p className="text-gray-300 leading-relaxed">
                  Long-tail keywords are longer and more specific phrases, usually containing four or more words. They
                  target a niche audience and reflect more detailed search intents. Examples include "buy a 3-bedroom
                  house in Austin" or "affordable homes with pools in Miami." These keywords have lower search volumes
                  but higher intent, making them less competitive.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Why Are Long-tail Keywords Important?</h2>
            <p className="text-gray-300 mb-6">Long-tail keywords are essential for several reasons:</p>
            <div className="space-y-4">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Lower Competition:</h3>
                  <p className="text-gray-300">
                    There's generally less competition for long-tail keywords, making it easier for your content to rank
                    higher in search engine results.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Higher Intent:</h3>
                  <p className="text-gray-300">
                    Users searching for long-tail keywords usually have a clear intent and are closer to taking action,
                    like making an inquiry or purchase.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Improved Conversion Rates:</h3>
                  <p className="text-gray-300">
                    As long-tail keywords target more specific queries, the leads they generate are often more qualified
                    and more likely to convert.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Better Relevance to Users:</h3>
                  <p className="text-gray-300">
                    These keywords allow you to address specific needs and questions, enhancing user experience and
                    engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Comparing Long-tail vs. Short-tail Keywords</h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Short-tail Keywords:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Pros:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Higher search volume</li>
                      <li>Broader audience reach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cons:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Extremely competitive</li>
                      <li>Lower conversion rates</li>
                      <li>Less specific, leading to broader and potentially less interested audience</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Long-tail Keywords:</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Pros:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Lower competition</li>
                      <li>Higher conversion rates</li>
                      <li>More specific, targeting users further down the sales funnel</li>
                      <li>Better for creating targeted and relevant content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Cons:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Lower search volume</li>
                      <li>Requires more specific content creation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/understanding-keywords"
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
              Back to Understanding Keywords
            </Link>
            <Link
              href="/courses/understanding-keywords/buyer-intent"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Buyer Intent Keywords
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

