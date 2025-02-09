import Link from "next/link"

export default function UnderstandingKeywordsPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 2: KEYWORD RESEARCH
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">Understanding Keywords</h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-400 leading-relaxed">
              Keywords are the foundation of SEO. They are the words and phrases that potential clients type into search
              engines like Google when looking for properties or real estate services. By understanding how keywords
              work and how to choose the right ones, you can make sure your website appears in front of the right people
              at the right time.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Think of keywords as bridges connecting your expertise to those who need it. If you choose the right
              keywords, you build a strong, safe bridge. Choose poorly, and your potential clients might never find you.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Let's break down two key keyword types:</h2>
            <h3 className="text-xl font-semibold text-white mb-4">Long-tail vs. Short-tail Keywords:</h3>

            <div className="space-y-6 ml-6">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Short-tail keywords:</h4>
                <p className="text-gray-300">
                  These are broad, general terms with high search volume but also high competition.
                </p>
                <div className="ml-4">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300 italic">"real estate", "homes for sale"</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Long-tail keywords:</h4>
                <p className="text-gray-300">
                  These are longer, more specific phrases with lower search volume but less competition and higher
                  conversion rates. They target a niche audience with a specific intent.
                </p>
                <div className="ml-4">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300 italic">
                    "modern condos for sale downtown Chicago", "best realtor for first-time home buyers in Austin"
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-6">
                <p className="text-gray-300">
                  <span className="text-white font-medium">Which one should you focus on? </span>
                  While it might seem tempting to go for those short-tail keywords with high search volume, remember,
                  long-tail keywords are your secret weapon. They attract more qualified leads who are closer to making
                  a decision.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-4">Buyer Intent Keywords:</h3>
            <p className="text-gray-300 mb-6">
              Understanding what someone is truly looking for when they type a search query is crucial. That's where
              buyer intent comes in. Here are the main types:
            </p>

            <div className="space-y-6 ml-6">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Informational:</h4>
                <p className="text-gray-300">The searcher is looking for information.</p>
                <div className="ml-4">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300 italic">"average home price in Miami", "how to stage a house for sale"</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Navigational:</h4>
                <p className="text-gray-300">The searcher is looking for a specific website or business.</p>
                <div className="ml-4">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300 italic">"[Your Name] realtor", "[Your Agency] website"</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Commercial investigation:</h4>
                <p className="text-gray-300">The searcher is comparing different options.</p>
                <div className="ml-4">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300 italic">
                    "best real estate agencies in Denver", "Zillow vs. Realtor.com"
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">Transactional:</h4>
                <p className="text-gray-300">
                  The searcher is ready to take action, like contacting an agent or scheduling a showing.
                </p>
                <div className="ml-4">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300 italic">
                    "schedule a showing for [property address]", "contact realtor in [city]"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-900 rounded-lg p-6">
              <p className="text-gray-300">
                <span className="text-white font-medium">
                  Focus on Transactional and Commercial/Investigation Keywords:{" "}
                </span>
                While all types of keywords have their place, prioritize those with transactional and commercial
                investigation intent to attract clients ready to buy or sell.
              </p>
            </div>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">In a nutshell:</h3>
            <ul className="space-y-2 text-gray-300 list-disc ml-6">
              <li>
                Use a blend of both <span className="italic">long-tail and short-tail keywords</span>.
              </li>
              <li>
                Prioritize <span className="italic">transactional and commercial investigation</span> keywords.
              </li>
              <li>
                Keep the <span className="italic">searcher's intent</span> at the forefront of your keyword strategy.
              </li>
            </ul>
            <p className="mt-6 text-gray-300">
              By understanding the different types of keywords and how they relate to buyer intent, you can start
              building a targeted list that helps you attract more leads and grow your real estate business.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/terminology"
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
              Previous: Key SEO Terminology
            </Link>
            <Link
              href="/courses/understanding-keywords/keyword-types"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Long-tail vs. Short-tail Keywords
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

