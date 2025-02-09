import Link from "next/link"

export default function ImportancePage() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 1: INTRODUCTION TO SEO
          </h6>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1]">
            The Importance of SEO in the Competitive Real Estate Industry
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-400 leading-relaxed">
              The real estate industry thrives on visibility. Think of it like this: a beautifully staged home tucked
              away on a quiet side street might be amazing, but if no one knows it's for sale, it's going to be tough to
              find a buyer.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              That's where SEO comes in for real estate agents. In a crowded online marketplace, SEO acts as your
              megaphone and your roadmap, guiding potential clients directly to your digital doorstep.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-white mb-8">
            Here's why SEO is non-negotiable for real estate agents:
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Dominate Local Search:</h3>
              <p className="text-gray-300">
                When someone searches "realtor near me" or "homes for sale in [your city]," you want to be front and
                center. Local SEO ensures your website and listings rank highly in these geographically targeted
                searches.
              </p>
              <div className="ml-6 mt-4">
                <h4 className="text-lg font-semibold text-white mb-2">Example:</h4>
                <p className="text-gray-300">
                  You're an agent in Austin, Texas. By optimizing your website and Google Business Profile (more on this
                  later!) for keywords like "Austin real estate agent" and "downtown Austin condos," you increase your
                  chances of appearing in the local pack and organic results for those searches.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Outshine the Competition:</h3>
              <p className="text-gray-300">
                In a competitive market, every lead counts. SEO gives you a significant edge, attracting more qualified
                leads than agents who neglect this crucial aspect of digital marketing.
              </p>
              <div className="ml-6 mt-4">
                <h4 className="text-lg font-semibold text-white mb-2">Tip:</h4>
                <p className="text-gray-300">
                  Research your competitors' online presence. What keywords are they ranking for? What are they doing
                  well? Use this information to inform your own SEO strategy and find areas where you can outperform
                  them.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Build Trust and Credibility:</h3>
              <p className="text-gray-300">
                High search engine rankings act as digital trust signals. When your website consistently appears at the
                top of search results, potential clients view you as a reputable and trustworthy expert in your field.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Generate High-Quality Leads:</h3>
              <p className="text-gray-300">
                SEO targets users actively searching for real estate services, leading to higher-quality leads compared
                to more general marketing approaches. These are individuals who are already interested in buying,
                selling, or renting, making them more likely to convert into clients.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Maximize Your ROI:</h3>
              <p className="text-gray-300">
                SEO is a long-term investment that delivers sustainable results. Unlike paid advertising, where
                visibility ends when the budget runs out, a strong SEO foundation continues to drive organic traffic and
                leads over time, providing a cost-effective way to grow your business.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4">In a nutshell:</h3>
            <p className="text-gray-300">
              In the digital age of real estate, SEO isn't optional, it's essential. By embracing SEO best practices,
              you empower yourself to attract more clients, close more deals, and build a thriving real estate business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <Link
              href="/courses/search-engine"
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
              Previous: Understanding Search Engines
            </Link>
            <Link
              href="/courses/terminology"
              className="w-full sm:w-auto group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-200"
            >
              Next: Key SEO Terminology
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

