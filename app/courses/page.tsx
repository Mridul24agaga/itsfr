import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="max-w-[900px] mx-auto py-16 px-6 sm:px-8">
        <div className="mb-16">
          <h6 className="text-sm font-bold text-orange-400 mb-4 uppercase tracking-wider">
            MODULE 1: INTRODUCTION TO SEO
          </h6>
          <h1 className="text-4xl sm:text-[40px] font-bold text-white mb-8 leading-[1.2]">
            What is SEO and why it matters for real estate agents
          </h1>
          <p className="text-[17px] text-gray-300 leading-relaxed max-w-[750px]">
            Learn how SEO can transform your real estate business and attract more clients.
          </p>
        </div>

        <div className="space-y-10">
          <section className="space-y-6">
            <p className="text-[17px] text-gray-300 leading-[1.6]">
              Imagine this: a prospective homebuyer in your city types "modern condos downtown" into their search bar.
              Will your website, showcasing beautiful downtown listings, be the one they see? That's where SEO comes in.
            </p>

            <p className="text-[17px] text-gray-300 leading-[1.6]">
              SEO, or Search Engine Optimization, is the art and science of making your website more visible in search
              engine results pages (SERPs) like Google. It's about understanding what people search for online
              (keywords), and then optimizing your website and content to rank higher for those searches.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-[28px] font-bold text-white">Why should real estate agents care about SEO?</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-[17px] font-semibold text-white">Client Discovery</h3>
                  <p className="text-[17px] text-gray-300 leading-[1.6]">
                    Think about your own behavior - when you need a product or service, you probably start with a Google
                    search. Your potential clients are doing the same thing when looking for homes or real estate
                    agents.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-[17px] font-semibold text-white">Competitive Edge</h3>
                  <p className="text-[17px] text-gray-300 leading-[1.6]">
                    Big real estate portals have significant marketing budgets. SEO helps you compete, even with limited
                    resources, by attracting organic (non-paid) traffic to your website.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-[17px] font-semibold text-white">Targeted Traffic</h3>
                  <p className="text-[17px] text-gray-300 leading-[1.6]">
                    SEO isn't about getting any traffic - it's about attracting the right visitors. By targeting
                    specific keywords related to your market and expertise, you attract users who are genuinely
                    interested in your services.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#222222] flex items-center justify-center text-white font-semibold">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-[17px] font-semibold text-white">Credibility</h3>
                  <p className="text-[17px] text-gray-300 leading-[1.6]">
                    Websites that rank highly are often perceived as more trustworthy and authoritative. A strong SEO
                    strategy positions you as a knowledgeable expert in your market.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#222222] rounded-lg p-6 space-y-4">
            <h3 className="text-[20px] font-bold text-white">Example</h3>
            <p className="text-[17px] text-gray-300 leading-[1.6]">
              Let's say you specialize in eco-friendly homes in Austin, Texas. A well-executed SEO strategy would ensure
              that your website appears prominently when someone searches for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[17px] text-gray-300">
              <li>"eco-friendly homes Austin"</li>
              <li>"green real estate Austin Texas"</li>
              <li>"sustainable living Austin"</li>
            </ul>
          </section>

          <section>
            <p className="text-[20px] text-white font-semibold leading-[1.6]">
              In a nutshell, SEO is not optional in today's digital real estate landscape. It's the key to unlocking
              visibility, attracting qualified leads, and ultimately growing your real estate business.
            </p>
          </section>

          <div className="flex justify-end items-center pt-8 border-t border-gray-800">
            <Link
              href="/courses/search-engine"
              className="group text-gray-400 hover:text-white flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-[#222222] transition-colors duration-200"
            >
              Next: Understanding How Search Engines Work
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

