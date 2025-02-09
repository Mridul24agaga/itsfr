"use client"

import { useState } from "react"
import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"

type Tool = {
  name: string
  category: string
  price: number
  features: string
  ai: boolean
}

type FoundingInfo = {
  name: string
  year: number
  country: string
}

type ToolReviews = {
  [key: string]: string
}

const inter = Inter({ subsets: ["latin"] })

const tools: Tool[] = [
  { name: "Google Search Console", category: "🎁 Free", price: 0, features: "🏆 🤖 🔗", ai: false },
  { name: "Ahrefs", category: "💵 Paid", price: 129, features: "🏆 🤖 ✍️ 🔍 🔗", ai: true },
  { name: "Morningscore", category: "💵 Paid", price: 49, features: "🏆 🤖 ✍️ 🔍 🔗", ai: true },
  { name: "SEMrush", category: "💵 Paid", price: 140, features: "🏆 🤖 ✍️ 🔍 🔗", ai: true },
  { name: "Surfer SEO", category: "💵 Paid", price: 99, features: "🏆 🤖 ✍️ 🔍", ai: true },
  { name: "Moz Pro", category: "💵 Paid", price: 99, features: "🏆 🤖 🔍 🔗", ai: true },
  { name: "Rich Results Test", category: "🎁 Free", price: 0, features: "🤖", ai: false },
  { name: "PageSpeed Insights", category: "🎁 Free", price: 0, features: "🤖", ai: false },
  { name: "Compress PNG", category: "🎁 Free", price: 0, features: "🤖", ai: false },
  { name: "Answer The Public", category: "🎁 Free", price: 0, features: "🔍", ai: false },
  { name: "ChatGPT", category: "🎁 Free", price: 0, features: "✍️", ai: true },
  { name: "SEO.ai", category: "💵 Paid", price: 49, features: "✍️", ai: true },
  { name: "Detailed (Chrome extension)", category: "🎁 Free", price: 0, features: "🤖", ai: false },
  { name: "Screaming Frog", category: "💵 Paid", price: 22, features: "🤖", ai: false },
  { name: "Seobility", category: "💵 Paid", price: 50, features: "🏆 🤖 🔍", ai: false },
  { name: "SE Ranking", category: "💵 Paid", price: 65, features: "🏆 🤖 🔍 🔗", ai: true },
  { name: "AccuRanker", category: "💵 Paid", price: 116, features: "🏆", ai: false },
  { name: "Yoast SEO (WordPress plugin)", category: "🎁 Free", price: 0, features: "🤖 ✍️", ai: false },
  { name: "Rank Math (WordPress plugin)", category: "💵 Paid", price: 5, features: "🤖 ✍️", ai: true },
  { name: "Schemantra", category: "🎁 Free", price: 0, features: "🤖", ai: false },
]

const toolReviews: ToolReviews = {
  "Google Search Console":
    "Google Search Console has become one of the best SEO tools. Much has improved in the last couple of years. It is Google's own and it gives them some advantages. Among others, no tool can match the size of their list of keywords and the accuracy of traffic and visibility coming to them. However, there is one limitation that affects all features: you can only get info on a website you own (or are invited to) which makes this tool useless for competitor analysis and e.g. finding new keywords or links. There are many cool features inside Google Search Console that are only found here. 2025 update: Google added a bunch of new tools during 2024. Security features, integrations with other Google products, but the biggest is their Recommendations: Search Console can now suggest changes to your SEO that could improve visibility. Pretty cool stuff, but still quite limited since Google has to be careful here. Also we are still waiting to see if Google will add AI Overview tracking. Didn't happen yet, but I expect it in 2025.",
  Ahrefs:
    "Ahrefs data quality is among the best on the market and the tool is especially popular in tracking backlinks and researching keywords. Ahrefs also allows you to check how your competitors are approaching SEO. Ahrefs is a great database if you know what you're looking for. However, it is not a tool that guides you in the right direction. You need to be an expert to get the full value. If you are, Ahrefs is one of the best SEO tools. 2025 update: Last year I wrote about uproar about Ahrefs raising and changing pricing. They did it again 😉 The full package lowest plan is now $129/month up from $99/month in my review last year. But they also introduced a 'Starter plan' from $29/month. On the features side, AI features were added during 2024, and they recently released their own AI writer too. Not very valuable for me personally, but I think they did a good job.",
  Morningscore:
    "Morningscore is an all-in-one SEO tool that lets you measure the value of organic traffic to your website in Dollars. The tool uses game elements to make working with SEO fun and simple. Therefore, you don't need to be an expert to get results. This translates into small SEO missions that help you generate results and give you XP when completed, which helps you level up while growing traffic from Google. You get access to keywords, links, health (technical SEO), and competitor monitoring. The data quality is close to the biggest SEO tools. Disclaimer: This is our own tool. You can test it free here (no credit card). 2025 update: Contrary to other premium SEO tools, Morningscore lowered prices during 2024 and now starting at $49. 3 major releases also happened that gave users internal links data, 5 new health checks, AI features in missions and a lot more gamification.",
  SEMrush:
    "SEMrush is a very comprehensive SEO tool that provides an overview and detailed insight into all your keywords and links. Personally, I never considered Semrush among the best SEO tools. The user experience is fragmented, with almost 50 different sub-sections (see left side on the image below). However, their data is strong and they are arguably the biggest SEO tool on the market, so I can't make this list without also mentioning Semrush. 2025 update: Similar to Ahrefs, Semrush has changed their pricing quite a lot and many users got unhappy. This story kept reappearing during 2024. On the data side the tool is still strong, giving you tons of fresh data and the biggest feature list of any SEO tool I tested. Including AI features now. The downside is still the same though: User experience is as confusing as ever. I never became a fan of the workflow.",
  "Surfer SEO":
    "I have only played a little with Surfer SEO but can say it is intuitive and many hype it on the web. It compares your content to those that rank highest on Google and shows you where your content lags versus theirs. It's a simple idea but not easy in practice, so the Polish guys behind the tool have executed it well. For example, if you work with content on a daily basis, this tool is definitely worth checking out. 2025 update: As I wrote this review 2 years ago, the tool cost $29 / month. Now the starting price tripled to $99 / month. It's still a fair price if you are hardcore around your SEO content strategy. Solid new features were added during 2024. For example their AI writer. But for small business owners with a simple need I no longer recommend SEO Surfer.",
  "Moz Pro":
    "With Moz, you get an all-in-one tool for backlink analysis, keyword, and onsite optimization. They've been in the game since 2002 and have a great reputation. I don't find their tools intuitive, but the data is solid. So if it's important to you, give them a test. I can also only praise their culture and openness in an industry that is often a bit dirty and closed. Moz is strong on links data, often better than Ahrefs, which is why we also use their data in our own SEO tool, Morningscore. 2025 update: Not exactly the tool itself, but Moz has now released a new v3 API. Playing around with the API I realized how good Moz English keyword data is. In other markets it's the opposite story, but if your need is primarily English, Moz has solid data for sure.",
  "Rich Results Test":
    "If you're new to SEO, don't start here. One of the hard parts of SEO: This tool helps with Schema, also called structured data. It is an extra 'invisible layer' on your website that can feed Google with more info that allows you to achieve better rankings on Google. Rich Results Test can tell you if your website can achieve these extended positions on Google. 2025 update: More and more experts claim you get improved visibility in both AI bots and Search with great Schema and that this is an increasing trend. So this oldie but goldie tool is as relevant as ever in 2025!",
  "PageSpeed Insights":
    "The speed of your website has become important in SEO. And Google's requirements for speed have become greater. With this tool, you can test your website speed and get a score from 0-100. Note that you get a score for both mobile and desktop speed. Both are important. This is still important in 2025. 2025 update: This tool is still the king of speed optimization. The scoring and baseline keeps getting updated so don't treat it as a one-time thing to check and improve. I suggest you check your scores every quarter.",
  "Compress PNG":
    "Super small tool to compress images so they take up less space and your website gets faster = Google is happy. Not only the PNG file format but also JPG, GIF, and even PDF. You can often compress file sizes by over 50%!!",
  "Answer The Public":
    "Answer The Public is a super free tool to find more 'question keywords'. For example, if you have the keyword 'real estate agent' you can type it in and the tool will give you a bunch of suggestions for questions related to the keyword the tool thinks people are searching for. Unfortunately, you don't get searches/month on the suggested keywords, but you can put them into another tool, such as Morningscore, and then the search volume showed there.",
  ChatGPT:
    "This is the leading AI chat tool. Among other things, you can get help brainstorming content and for example, asking the bot to help you generate 5 headlines from a keyword you want to rank for. See the example in the image. It's that easy. Just ask the bot SEO questions and you'll get help right away. Requires a user which you can create for free. Be careful not to copy 1:1. Try to customize the content and make it personal. Then there's no danger of Google having a problem with your content coming from an AI. 2025 update: Last year in my review I said I mainly used ChatGPT for translations, content ideas and cleaning up HTML code. I wrote that 'hallucination' was often a problem. And now where am I in 2025? Hallucination is still bad, but it has gotten like 30% better I would say. Also I found a few more use cases. I mainly use ChatGPT as my researcher and data cruncher now. So for example I use it to gather data on various topics (still have to double check everything though, since it makes mistakes!!) like 'list the biggest companies in Europe the last 100 years in a table with their founding year'. Then let's say I wanted to make a chart of this data, I would ask it to help me with that. So my use cases are now more heavy, but I still don't use ChatGPT for content. But to be fair, I wrote less content in 2024 than I normally do. You can be sure this article is 100% written by me though 😉",
  "SEO.ai":
    "A Danish-developed tool. I know parts of the team behind it and think they stand for good software. They have a 7-day free trial which requires a credit card. I haven't had time to test it myself yet, but have heard from several that it works well. That's why it makes the list here. 2025 update: They kept the $49/month price tag while releasing more great features. Which makes me recommend this tool for 2025. There are a ton of competitors in this space though, so I would google 'best AI writers' and see how they all compare 😊",
  "Detailed (Chrome extension)":
    "This tool has been hyped during the last year. So I had to try it out. It's honestly nothing special, but I still add it here because I think the user interface is good. What does it do? It gives you some quick data on any page you are currently visiting. So as you can see in the photo it can give me quick info on meta, headings, internal links, images, schema and social media. The most useful part is the Overview tab. The rest is a bit cluttered and I would rather use a proper SEO tool for those.",
  "Screaming Frog":
    "This is an expert tool. Screaming Frog is a piece of software that you download to your computer and use to check the 'onsite' health of your website. The tool allows you to crawl your website in the same way as Google's web crawlers do, and based on the analysis of your onsite SEO – i.e. the quality of your website in the eyes of search engines – you can identify common errors and problems, analyze metadata and generate XML sitemaps. Free version is available where you can scan 500 landing pages. Use Screaming Frog if you really want to geek out about onpage SEO. There are many alternatives that make the job easier. For example SEObility, Ahrefs, and Morningscore from this list. 2025 update: I have used it quite a bit during the last year. This tool is by far not perfect, many 'false positives' but that is because the internet is so complex, so don't hold against these cool Brits 😊. It's a super nerdy tool, and I don't find myself enjoying using it. But one thing I enjoy: It's freaking fast!! (to the point where Screaming Frog actually ignore the robots.txt on people's websites telling crawlers to slow down… Hmm Screaming Frog, from the biggest health crawler I expected a little more 😑)",
  Seobility:
    "SEObility started as a health (technical SEO) tool to scan your website and find improvements. I think they do that well, I've been a customer in the past. Today they cover the whole palette and can be called an 'all-in-one' SEO tool. Their user experience is not my cup of tea, it's a bit too grey. A German team is behind 😉. I personally does not feel inspired to action. This is of course a personal preference. The data is solid though and the price is sharp. And they have a free version. Which is why they made it onto this prestigious list after all 😎",
  "SE Ranking":
    "SE Ranking provides a complete toolbox of SEO tools. All-in-one tool. I was a customer for 2 years. However, personally, I found only their rank tracker so really good. Their link tools were confusing and the data was not super. Technical SEO was so-so. It may have changed since I was a customer. Price/quality is sharp. Probably partly why SE Ranking has grown a lot in the last few years. 2025 update: Prices increased for the 2nd year in a row. Now starting at $65. They also added AI features which work quite OK. I especially like their AI Overviews rank tracking, which is currently in beta. The tool still feels quite bulky and slow and the UX is not my cup of tea. But I would say SE Ranking is one of the tools that keep improving and growing year after year.",
  AccuRanker:
    "AccuRanker is a Danish-developed rank-tracking tool. That is, they focus on tracking keywords and their ranking on Google. They are really good at this and help big companies and agencies to track thousands of keywords. I was a customer for 1 year. So if you have a big rank tracking need and want to be able to filter deep into that data, AccuRanker is worth checking out. Several new clients of ours have mentioned Morningscore as a good alternative to Accuranker. Of course, this depends on the need. Accuranker are kings when it comes to large and complex keyword tracking needs. And their filtering and tagging of keywords is quite deep. 2025 update: Their new search volume engine is interesting. They combine data sources to give you are more precise search volume on keywords.",
  "Yoast SEO (WordPress plugin)":
    "Yoast is one of the most popular SEO plugins for WordPress. You can use it to optimize the technical aspects of your SEO, and the tool also helps you in the right direction in terms of keyword optimizing your written content. If you have a WordPress website, Yoast is a super extension that will automatically make your website more SEO-friendly.",
  "Rank Math (WordPress plugin)":
    "At Morningsore, we switched from Yoast to Rank Math in 2023 as many hyper Rank Math these days. The tool helps with migration. It wasn't completely painless though and the hype doesn't quite hold up in my opinion. The free version is not worth much, so we upgraded. Cheap though. Rank Math Pro has a lot of neat little features that save time. Examples: automatic alt tags on images. Automatically find videos on the page and tell Google about them (Schema). Schema templates. Show the number of internal and external links on pages (very basic though). All in all, I'm satisfied. But if you have Yoast and are happy, stay there. 2025 update: I haven't used it a ton, but I haven't seen any new features that makes this plugin better. Their AI tools are still bad. Their Search Console integration is also still spitting out totally wrong numbers. The basics still work as they should though (like automatically generating alt tags for images) – and they are good!",
  Schemantra:
    "If you are an SEO geek and need to make your own Schema data, but obviously can't remember all details in your head, then I would recommend this tool. I have used it myself to generate Schemas for Morningcore. There are many generators, but all the others I've tested have a very small selection. Here you get the complete list. It's loooong.",
}

const foundingInfo: FoundingInfo[] = [
  { name: "Google Search Console", year: 2015, country: "United States 🇺🇸" },
  { name: "Ahrefs", year: 2010, country: "Singapore 🇸🇬" },
  { name: "Morningscore", year: 2018, country: "Denmark 🇩🇰" },
  { name: "SEMrush", year: 2008, country: "United States 🇺🇸" },
  { name: "Surfer SEO", year: 2017, country: "Poland 🇵🇱" },
  { name: "Moz Pro", year: 2004, country: "United States 🇺🇸" },
  { name: "Rich Results Test", year: 2017, country: "United States 🇺🇸" },
  { name: "PageSpeed Insights", year: 2010, country: "United States 🇺🇸" },
  { name: "Compress PNG", year: 2021, country: "Latvia 🇱🇻" },
  { name: "Answer The Public", year: 2014, country: "United Kingdom 🇬🇧" },
  { name: "ChatGPT", year: 2022, country: "United States 🇺🇸" },
  { name: "SEO.ai", year: 2022, country: "Denmark 🇩🇰" },
  { name: "Detailed (Chrome extension)", year: 2020, country: "Hong Kong 🇭🇰" },
  { name: "Screaming Frog", year: 2010, country: "United Kingdom 🇬🇧" },
  { name: "Seobility", year: 2013, country: "Germany 🇩🇪" },
  { name: "SE Ranking", year: 2013, country: "United Kingdom 🇬🇧" },
  { name: "AccuRanker", year: 2013, country: "Denmark 🇩🇰" },
  { name: "Yoast SEO (WordPress plugin)", year: 2010, country: "Netherlands 🇳🇱" },
  { name: "Rank Math (WordPress plugin)", year: 2018, country: "India 🇮🇳" },
  { name: "Schemantra", year: 2022, country: "Canada 🇨🇦" },
]

const removedTools: string[] = [
  "Keyword Tool",
  "Rankwatch",
  "Authority Labs",
  "Pitchbox",
  "LinkMiner",
  "SEOptimer",
  "Xenu's Link Sleuth",
  "KWfinder",
  "Keywords Everywhere",
  "DareBoost",
  "Check My Links",
  "BuzzSumo",
  "Whitespark",
  "Twinword Graph",
  "Frase",
  "AIPRM (ChatGPT Chrome extension)",
]

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "top-20-seo-tools", title: "Top 20 SEO Tools for 2025" },
  { id: "tool-reviews", title: "Tool Reviews" },
  { id: "founding-information", title: "Founding Information" },
  { id: "feature-explanations", title: "Feature Explanations" },
  { id: "morningscore-comparison", title: "Morningscore Comparison" },
  { id: "removed-tools", title: "Removed Tools" },
  { id: "conclusion", title: "Conclusion" },
]

const TableOfContents = ({
  activeSection,
  setActiveSection,
}: { activeSection: string; setActiveSection: (section: string) => void }) => {
  //This component is no longer used.
  return null
}

const ToolTable = () => (
  <div className="overflow-x-auto rounded-lg shadow-lg">
    <table className="min-w-full bg-[#2d2d2d] border border-gray-700 text-xs md:text-sm">
      <thead>
        <tr className="bg-[#3d3d3d]">
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">Name</th>
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">Category</th>
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">USD/month</th>
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">Features</th>
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">AI Tools ✨</th>
        </tr>
      </thead>
      <tbody>
        {tools.map((tool, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-[#2d2d2d]" : "bg-[#333333]"}>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{tool.name}</td>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{tool.category}</td>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{tool.price}</td>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{tool.features}</td>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{tool.ai ? "Yes" : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const FeatureExplanation = () => (
  <div className="bg-[#2d2d2d] p-4 md:p-6 rounded-lg mb-8 shadow-lg">
    <h3 className="text-lg md:text-xl font-bold mb-4 text-orange-500">Feature Explanations</h3>
    <ul className="list-disc pl-4 md:pl-6 text-gray-300 space-y-2">
      <li>
        <span className="font-bold text-orange-500">🏆</span> - Rank tracker tool
      </li>
      <li>
        <span className="font-bold text-orange-500">🤖</span> - Technical SEO (onpage)
      </li>
      <li>
        <span className="font-bold text-orange-500">🔍</span> - Keyword research
      </li>
      <li>
        <span className="font-bold text-orange-500">✍️</span> - Help to write content
      </li>
      <li>
        <span className="font-bold text-orange-500">🔗</span> - Backlink tool
      </li>
    </ul>
  </div>
)

const ToolReview = ({ name, review }: { name: string; review: string }) => {
  return (
    <div className="border border-gray-700 rounded-lg mb-6 bg-[#2d2d2d] p-4 md:p-6 shadow-lg">
      <h3 className="text-lg md:text-xl font-bold mb-3 text-orange-500">{name}</h3>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">{review}</p>
    </div>
  )
}

const FoundingInfoTable = () => (
  <div className="overflow-x-auto mb-8 rounded-lg shadow-lg">
    <table className="min-w-full bg-[#2d2d2d] border border-gray-700 text-xs md:text-sm">
      <thead>
        <tr className="bg-[#3d3d3d]">
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">Name</th>
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">Year Founded</th>
          <th className="py-2 px-2 md:px-4 border-b border-gray-600 text-left text-orange-500">Country</th>
        </tr>
      </thead>
      <tbody>
        {foundingInfo.map((info, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-[#2d2d2d]" : "bg-[#333333]"}>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{info.name}</td>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{info.year}</td>
            <td className="py-2 px-2 md:px-4 border-b border-gray-600 text-gray-300">{info.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default function SEOToolsBlogPost() {
  const [currentSection, setCurrentSection] = useState("introduction")

  return (
    <div className={`min-h-screen bg-[#1d1d1d] text-gray-300 ${inter.className}`}>
      <div className="flex flex-col md:flex-row">
        <Sidebar sections={sections} currentSection={currentSection} onSectionChange={setCurrentSection} />
        <div className="flex-1 w-full">
          <ScrollArea className="h-screen">
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-12 space-y-8 md:space-y-16">
              <header className="mb-8 md:mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold text-orange-500 leading-tight">
                  Top 20 SEO Tools for 2025: A Comprehensive Review
                </h1>
              </header>

              <section id="introduction" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">Introduction</h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  There are well over 300 SEO tools in the world. How do you know which SEO tools are worth checking
                  out? I've tested over 150 tools, and keep an eye out for new ones coming. So maybe I saved you about
                  200 hours of research 😉
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Below I review the top 20 tools. Big 2025 update where I include new tools and give my update on
                  current ones.
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  By the way: If you are looking for the most simple tools we have made a list of the easiest SEO tools
                  for beginners too.
                </p>
              </section>

              <section id="top-20-seo-tools" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">
                  Top 20 SEO Tools for 2025
                </h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  In 2025, there are over 300 free and paid SEO tools on the market. Here are the 20 SEO tools that
                  stood out the most to me in 2025:
                </p>
                <ToolTable />
                <FeatureExplanation />
              </section>

              <section id="tool-reviews" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">Tool Reviews</h2>
                {Object.entries(toolReviews).map(([name, review]) => (
                  <ToolReview key={name} name={name} review={review} />
                ))}
              </section>

              <section id="founding-information" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">Founding Information</h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Out of curiosity I decided to research the founding year and country of each SEO tool I reviewed here
                  🙂
                </p>
                <FoundingInfoTable />
              </section>

              <section id="feature-explanations" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">Feature Explanations</h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  In the list of SEO tools above, I used icons to categorize the tools. Here is an explanation:
                </p>
                <ul className="list-disc pl-4 md:pl-6 text-gray-300 space-y-3 text-base md:text-lg">
                  <li>
                    <span className="font-bold text-orange-500">🔗</span> SEO tools for links: Link tools help you check
                    the number of links from other websites and examine the quality of the links etc. "Link building"
                    and "Backlinks" are among the phrases you will encounter here.
                  </li>
                  <li>
                    <span className="font-bold text-orange-500">✍️</span> SEO tools to help you with content: These tools
                    help you create content for your website. For example, writing texts and headlines for you. Many of
                    them are boosted by AI.
                  </li>
                  <li>
                    <span className="font-bold text-orange-500">🔍</span> SEO tools for keyword research: The tools in
                    this category help you find the best keywords and typically tell you how many searches per month a
                    keyword has, plus a bunch more.
                  </li>
                  <li>
                    <span className="font-bold text-orange-500">🏆</span> SEO tools for keyword rank tracking: These
                    tools can measure the position of the keywords on which your website ranks in search engines.
                  </li>
                  <li>
                    <span className="font-bold text-orange-500">🤖</span> Technical SEO tools: Technical SEO is, in
                    short, about everything other than your written content. The term refers to the work of optimizing
                    your website so that search engines can access, crawl and index it.
                  </li>
                </ul>
              </section>

              <section id="morningscore-comparison" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">
                  Morningscore vs. the otherSEO tools
                </h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Right now, you're on Morningscore.io – and our own SEO tool is in the list of recommended tools.
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Of course I am biased towards my own tool, but I hope you can see from my writing above, that I try to
                  be 100% honest and use clear writing. AI is NOT used for the writing of this post!
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  If you're curious about Morningscore I can provide some more info here:
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Morningscore is designed in a fun and simple way that motivates you to get your SEO tasks done.
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Because in the end, that's what it's all about: getting SEO done. There are a ton of tools out there.
                  Tools don't alone determine whether you'll be successful. Your effort does.
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  We see in case after case that our clients get more traffic because they were motivated to get their
                  SEO fixed.
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  So maybe you should give Morningscore a free 14-day trial?
                </p>
              </section>

              <section id="removed-tools" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">
                  Tools Removed from Recommendations for 2025
                </h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  These tools have been removed from the list of recommendations for 2025:
                </p>
                <ul className="list-disc pl-4 md:pl-6 mb-4 text-gray-300 space-y-3 text-base md:text-lg">
                  {removedTools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  Reason: I haven't had time to test these tools in the last few years and they weren't essential to my
                  own SEO work. This does not make them bad!
                </p>
              </section>

              <section id="conclusion" className="mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-orange-500">Conclusion</h2>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  I hope this guide gave you some good and original insights and that you could see this was my personal
                  opinion and not some garbage AI generated text 😉
                </p>
                <p className="mb-4 md:mb-6 leading-relaxed text-base md:text-lg">
                  I wish you a ton of luck with SEO in 2025 🎉
                </p>
              </section>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

