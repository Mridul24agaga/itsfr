import Link from "next/link"

export default function TerminologyPage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 1: INTRODUCTION TO SEO
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            Key SEO Terminology for Beginners
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Navigating the world of SEO can feel like learning a new language! Don't worry, we're here to break down
            some essential SEO terms you'll encounter throughout this course. Think of these as the building blocks of
            your SEO knowledge.
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-white">1.</span>
              <h3 className="text-xl font-semibold text-white">Keywords:</h3>
            </div>
            <div className="ml-9">
              <p className="text-gray-300 mb-4">
                These are the words and phrases people type into search engines to find information. For real estate,
                keywords might be "condos for sale in Seattle" or "best realtor in Miami."
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300">
                    A potential client in Austin might search for "modern homes for sale Austin TX"
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Tip:</span>
                  <p className="text-gray-300">
                    Focus on keywords that are <span className="italic">relevant</span> to your target audience and
                    their search intent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-white">2.</span>
              <h3 className="text-xl font-semibold text-white">Search Engine Results Pages (SERPs):</h3>
            </div>
            <div className="ml-9">
              <p className="text-gray-300 mb-4">
                The page displayed after you enter a search query. It includes organic results, paid ads, and sometimes
                featured snippets.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300">
                    When you search for "real estate agent near me", the list of websites and Google Maps results are
                    the SERPs.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Guide:</span>
                  <p className="text-gray-300">
                    Your goal is to rank as high as possible on the SERPs to increase visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-white">3.</span>
              <h3 className="text-xl font-semibold text-white">Organic Search:</h3>
            </div>
            <div className="ml-9">
              <p className="text-gray-300 mb-4">
                These are the unpaid, "natural" search results that are determined by Google's algorithm based on
                relevance and authority.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300">
                    Clicking on a website link on page one of Google that is <span className="italic">not</span> labeled
                    as an ad.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Instructions:</span>
                  <p className="text-gray-300">
                    SEO focuses on improving your website's ranking in organic search results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-white">4.</span>
              <h3 className="text-xl font-semibold text-white">Backlinks:</h3>
            </div>
            <div className="ml-9">
              <p className="text-gray-300 mb-4">
                Links from other websites to your website. They act as votes of confidence, signaling to search engines
                that your site is trustworthy and valuable.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300">
                    A local news website linking to your blog post about the Austin housing market.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Tip:</span>
                  <p className="text-gray-300">
                    High-quality backlinks from relevant and authoritative websites are incredibly valuable for SEO.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-white">5.</span>
              <h3 className="text-xl font-semibold text-white">On-Page SEO:</h3>
            </div>
            <div className="ml-9">
              <p className="text-gray-300 mb-4">
                Optimization techniques applied directly to your website's content and code to improve visibility.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300">
                    Using relevant keywords in your website content, optimizing image alt text, and improving page load
                    speed.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Guide:</span>
                  <p className="text-gray-300">
                    On-Page SEO makes it easier for search engines to understand and rank your website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-xl font-semibold text-white">6.</span>
              <h3 className="text-xl font-semibold text-white">Off-Page SEO:</h3>
            </div>
            <div className="ml-9">
              <p className="text-gray-300 mb-4">
                Activities performed <span className="italic">outside</span> of your website to build authority and
                improve search engine rankings.
              </p>
              <div className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Example:</span>
                  <p className="text-gray-300">
                    Building backlinks, creating social media profiles, and engaging in online forums.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Instructions:</span>
                  <p className="text-gray-300">
                    Off-Page SEO helps to build your website's reputation and trustworthiness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-300">
              By understanding these core SEO terms, you'll be well-equipped to grasp the concepts and strategies
              covered in this course. Remember, SEO is an ongoing process, and continuous learning is key to staying
              ahead of the curve.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/importance"
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
              Previous: Importance of SEO
            </Link>
            <Link
              href="/courses/understanding-keywords"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Understanding Keywords
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

