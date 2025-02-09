import Link from "next/link"

export default function SearchEnginePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 1: INTRODUCTION TO SEO
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]">
            Understanding How Search Engines Work
          </h1>
          <h2 className="text-2xl text-gray-200 mb-8 font-normal">
            Understanding How Search Engines Work (And Why It Matters for Real Estate)
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-[750px]">
            Think of a search engine like Google as a vast library, filled with billions of web pages. When someone
            searches for "modern condos downtown," Google doesn't actually search the entire internet in real-time.
            Instead, it refers to its meticulously organized index, built by tirelessly crawling the web and analyzing
            each page's content, structure, and authority.
          </p>
        </div>

        <div className="space-y-12">
          <p className="text-xl text-white mb-8">Here's a simplified breakdown:</p>

          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-semibold text-white">1.</span>
                <h3 className="text-xl font-semibold text-white">Crawling:</h3>
              </div>
              <p className="text-gray-300 ml-9">
                Google uses automated bots called "spiders" to explore the web, following links from page to page like a
                digital explorer. They discover new pages and revisit existing ones to see if they've changed.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-semibold text-white">2.</span>
                <h3 className="text-xl font-semibold text-white">Indexing:</h3>
              </div>
              <p className="text-gray-300 ml-9">
                As Google crawls, it analyzes the content of each page, categorizing and storing the information in its
                index. This index is like a giant library catalog, making it possible to quickly find relevant
                information later.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xl font-semibold text-white">3.</span>
                <h3 className="text-xl font-semibold text-white">Ranking:</h3>
              </div>
              <p className="text-gray-300 ml-9">
                Now, when someone searches "modern condos downtown," Google dives into its index to retrieve the most
                relevant and authoritative pages. This is where SEO comes in! The better optimized your website is, the
                higher it will rank, increasing visibility to potential clients.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Why This Matters for Real Estate Agents:</h2>
            <ul className="space-y-6 text-gray-300 list-none ml-0">
              <li className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-white">Visibility is Key:</h3>
                <p className="text-gray-300">
                  In the competitive real estate market, being found online is paramount. SEO helps ensure your website
                  appears at the top of search results when potential buyers or sellers are looking for properties like
                  yours.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-white">Attract Qualified Leads:</h3>
                <p className="text-gray-300">
                  By targeting the right keywords and optimizing your website content, you attract visitors who are
                  genuinely interested in your services, leading to more qualified leads and conversions.
                </p>
              </li>
              <li className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-white">Build Trust and Authority:</h3>
                <p className="text-gray-300">
                  Ranking high in search results establishes you as a trustworthy and authoritative source in your
                  market. It's like having a prime storefront location in the digital world.
                </p>
              </li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Example:</h3>
            <p className="text-gray-300">
              Let's say you specialize in luxury waterfront homes in Miami. By optimizing your website with relevant
              keywords like "luxury waterfront homes Miami," "Miami Beach mansions," and "oceanfront properties Miami,"
              you increase your chances of appearing at the top of search results when a potential buyer searches for
              those terms.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/introduction"
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
              Previous: What is SEO
            </Link>
            <Link
              href="/courses/importance"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Importance of SEO
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

