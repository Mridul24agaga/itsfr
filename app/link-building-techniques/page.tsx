"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, X, Star, Search, Award, ArrowLeft, ArrowRight } from "lucide-react"
import confetti from "canvas-confetti"

type Technique = {
  id: number
  title: string
  description: string
  benefit: number
  timeEfficiency: number
  category: string
  steps?: string[]
  details?: string
  tasks?: string[]
  bestPractices?: string[]
}

const techniques: Technique[] = [
  {
    id: 1,
    title: "Skyscraper technique",
    category: "Content",
    description:
      "Skyscraper is almost a legendary link building technique. It's time-consuming, but if it's done properly, you'll get quality backlinks, targeted traffic and possible business connections.",
    benefit: 5,
    timeEfficiency: 1,
    steps: [
      "Find good content with quality backlinks",
      "Find the contact details of the people behind these websites",
      "Write better content",
      "Outreach the prospects",
    ],
    details: "It's a combination of perfect content, research, competitor backlink analysis and email outreach.",
  },
  {
    id: 2,
    title: "Content-based link building",
    category: "Content",
    description:
      "The hardest, yet the most efficient technique. Create content that will naturally attract readers, social shares, and referral traffic.",
    benefit: 4,
    timeEfficiency: 1,
    details:
      "When you write, pay attention to readability. Content has to be well-structured and without grammar errors.",
  },
  {
    id: 3,
    title: "Top lists",
    category: "Content",
    description: "There are many, but if you have unique and relevant data it should be a success.",
    benefit: 4,
    timeEfficiency: 3,
    tasks: [
      "Analyze search results for your main keywords",
      "Write something more comprehensive, unique",
      "If you have your own data, the job will be easier",
      "If your topic is time-sensitive, make sure you choose the right time",
    ],
  },
  {
    id: 4,
    title: "Produce educational content",
    category: "Content",
    description:
      "Google SERP is full of 'How to' articles. Publishers think it's easy to educate. Well, it can be, but the amount of recycled content out there won't attract readers just like that.",
    benefit: 5,
    timeEfficiency: 2,
    details: "You can always target a specific group of people with your own opinions and unique insights.",
  },
  {
    id: 5,
    title: "Case studies",
    category: "Content",
    description: "Case studies can be a backlinks gold mine! Case studies are always unique and bring new information.",
    benefit: 5,
    timeEfficiency: 3,
    tasks: ["Challenge", "Data background", "Selected time frame", "Results", "Key takeaways"],
    details: "Make sure to have proven data, do your research, try to experiment and test industry myths.",
  },
  {
    id: 6,
    title: "So-called 'Green content'",
    category: "Content",
    description:
      "Yes, it's content, but very specific and beneficial when it comes to gaining high-quality links. If it's good enough and deals with the most up-to-date issues, not only environmentally-friendly organizations will share it.",
    benefit: 4,
    timeEfficiency: 1,
    details:
      "Environmental threats such as climate change, water pollution or species extinction have been discussed widely for years.",
  },
  {
    id: 7,
    title: "Thought-provoking, irritating, annoying content",
    category: "Content",
    description:
      "This can be tricky. It can ruin your reputation when done wrong. Don't try to abuse people, their struggles, and opinions.",
    benefit: 4,
    timeEfficiency: 2,
    details: "Help them to solve their issues. Be careful on what you plan to profit.",
  },
  {
    id: 8,
    title: "White-papers",
    category: "Content",
    description:
      "They're widely used in the B2B world but you don't need to be a corporation to conduct deep research in the industry, add your thoughts, charts, and knowledge others can benefit from.",
    benefit: 4,
    timeEfficiency: 2,
    details: "White-papers are a great source of sharing opportunities and gaining valuable links.",
  },
  {
    id: 9,
    title: "Reviews and comparisons",
    category: "Content",
    description:
      "These two rank very high when done right. Your deep analysis, pros, cons and recommendations will solve decision paralysis of many readers.",
    benefit: 5,
    timeEfficiency: 2,
    details:
      "If you're good enough, businesses will be willing to pay for reviewing their products. And suddenly, you can be a thought leader.",
  },
  {
    id: 10,
    title: "Create a dedicated blog section",
    category: "Content",
    description:
      "There are many companies with useful content despite not having a blog. It's time to use that potential!",
    benefit: 5,
    timeEfficiency: 1,
    details: "A dedicated blog is an engagement magnet.",
  },
  {
    id: 11,
    title: "Make an interview",
    category: "Content",
    description: "Try to partner with well-known authorities in the industry. It doesn't need to be a superstar.",
    benefit: 4,
    timeEfficiency: 3,
    details: "The person will share the interview with their audience and might link to it on their website too.",
  },
  {
    id: 12,
    title: "Guest posts",
    category: "Content",
    description:
      "Guest posts represent a good way to earn backlinks. Do website research, write outstanding content and try to publish it on an authoritative website.",
    benefit: 4,
    timeEfficiency: 2,
    details:
      "They usually have strict guest blogging guidelines and it sometimes takes a lot of time to accept your submission.",
  },
  {
    id: 13,
    title: "Podcast guesting",
    category: "Content",
    description:
      "We all know that podcasts are popular. They are easy to consume so you can gain a lot of knowledge and get some cool industry news while cleaning your apartment or car.",
    benefit: 4,
    timeEfficiency: 2,
    details:
      "Doing podcast guesting means that you target podcasts relevant to your niche and outreach their creators to be part of them.",
  },
  {
    id: 14,
    title: "Social media outreach",
    category: "Social",
    description:
      "Share your content on social media, promote it on Facebook, Twitter, LinkedIn, comment on relevant posts and create connections.",
    benefit: 3,
    timeEfficiency: 3,
  },
  {
    id: 15,
    title: "On-site social sharing actions",
    category: "Social",
    description:
      "Sharing buttons and widgets. You can't skip them on your website. Besides sharing your content via social networks, people can place your widgets on their sites and link back to you.",
    benefit: 3,
    timeEfficiency: 4,
    details: "AddThis is a useful plugin in which you can track the results of social engagement of your website.",
  },
  {
    id: 16,
    title: "Share to download buttons",
    category: "Social",
    description:
      "Give your users an opportunity to access exclusive materials, bonuses or discounts by asking them to share your website.",
    benefit: 2,
    timeEfficiency: 4,
    details: "Motivate them to share your stuff. We use Social Locker.",
  },
  {
    id: 17,
    title: "Specialized discussion forums",
    category: "Social",
    description: "Join Quora, Reddit, StackExchange, and others to ask and answer related questions.",
    benefit: 3,
    timeEfficiency: 3,
    details:
      "Be careful, these forums usually have strict spam rules and are full of professionals, so you can suddenly get banned.",
    bestPractices: [
      "Prepare your submission, don't just copy the text from your blog post",
      "Personalize it according to readers' preferences",
      "Make sure the link is relevant so it's not obvious you're doing a self-promotion",
      "Reply to comments",
    ],
  },
  {
    id: 18,
    title: "Links from forums",
    category: "Social",
    description:
      "Forums, Q&A sites, content aggregators, etc. You can add the link there, but keep in mind that majority of them are low-quality links, usually no-follow, so their benefits are questionable.",
    benefit: 1,
    timeEfficiency: 3,
  },
  {
    id: 19,
    title: "Quizzes, surveys, tests",
    category: "Social",
    description: "Yet another interactive way to gain not only social exposure.",
    benefit: 3,
    timeEfficiency: 2,
    details:
      "We did it some time ago and the response was fantastic. We added a certificate of completion to motivate people to share their success via their social profiles.",
  },
  {
    id: 20,
    title: "Link to others",
    category: "Social",
    description:
      "... and tag them in your social posts. It might not work for the first couple of times, but sooner or later they will notice you.",
    benefit: 2,
    timeEfficiency: 5,
    details:
      "If your content is good enough and relevant, they may link back or at least give you a shoutout on their social profiles.",
  },
  {
    id: 21,
    title: "Contests and giveaways",
    category: "Marketing and branding",
    description: "Besides gaining a relevant link you have a promo for free.",
    benefit: 4,
    timeEfficiency: 4,
    details:
      "We were a part of a couple of giveaways and they generated subscriptions, as well. Research on-going contests and giveaways and contact the organizers.",
  },
  {
    id: 22,
    title: "Discounts and coupons",
    category: "Marketing and branding",
    description: "Everyone loves discounts and discount codes! And it's a great motivation to share your product, too!",
    benefit: 3,
    timeEfficiency: 5,
    details: "Moreover, discount coupons are great for additional affiliate program promotion.",
  },
  {
    id: 23,
    title: "Traditional (off-line) marketing activities",
    category: "Marketing and branding",
    description: "Leaflets, stickers or even guerilla marketing. Don't forget where it all began.",
    benefit: 2,
    timeEfficiency: 4,
    details: "Creative marketing attracts people. They will talk about you and might link to your site.",
  },
  {
    id: 24,
    title: "PR articles",
    category: "Marketing and branding",
    description:
      "PR articles written by professionals and published on sites with high authority will give you high-quality links too.",
    benefit: 5,
    timeEfficiency: 3,
    details: "But prepare some budget for this.",
  },
  {
    id: 25,
    title: "Testimonials sections",
    category: "Marketing and branding",
    description:
      "Think about products you use, get in touch with people behind them and write testimonials to be published on their websites in exchange for a link.",
    benefit: 3,
    timeEfficiency: 3,
    details: "You'll need to write a couple of emails and reminders but it can be very beneficial.",
  },
  {
    id: 26,
    title: "Set up Google Alerts",
    category: "Marketing and branding",
    description:
      "Google Alerts is one of those tools we all heard about. However, not many of us use it to find brand mentions.",
    benefit: 4,
    timeEfficiency: 5,
    details:
      "Setting up the alerts is super easy. Select the term(s), choose from the listed options and add a valid email address to receive the alerts.",
  },
  {
    id: 27,
    title: "Ask the ones you know",
    category: "Marketing and branding",
    description: "Yes, why not? Reach out your family, friends or people you know for a link.",
    benefit: 2,
    timeEfficiency: 4,
    details:
      "They might be willing to link to your site if it's relevant and fits the context. Don't try to link to a marketing blog from a clothes e-shop.",
  },
  {
    id: 28,
    title: "Buy backlinks via paid blog posts",
    category: "Marketing and branding",
    description: "It's similar to the previous technique, but this time you will have to pay for it.",
    benefit: 3,
    timeEfficiency: 4,
    details: "On the other hand, it won't cost you almost any time.",
  },
  {
    id: 30,
    title: "Launch an affiliate program",
    category: "Marketing and branding",
    description: "You'll gain both links and revenue.",
    benefit: 5,
    timeEfficiency: 3,
    details:
      "Our affiliate program is one of the strongest sources of revenue, exposure and high-quality backlinks. There are many affiliates searching for a new source of income. Don't forget to prepare an attractive commission system.",
  },
  {
    id: 31,
    title: "Join an affiliate program",
    category: "Marketing and branding",
    description:
      "We mentioned our affiliate program is beneficial for us, but that's because it's attractive for our partners.",
    benefit: 4,
    timeEfficiency: 2,
    details:
      "As an affiliate marketer, you can earn a lot of money on commissions and your product reviews or comparisons can generate many backlinks.",
  },
  {
    id: 32,
    title: "Research and find out what works for others",
    category: "Marketing and branding",
    description: "Spy on and analyze your competitors' backlinks.",
    benefit: 4,
    timeEfficiency: 2,
    details: "You can focus on those you can replicate easily to save some time.",
  },
  {
    id: 33,
    title: "Brand mentions",
    category: "Marketing and branding",
    description: 'Using search operator "brand name" -site:brandname.com will help you to find mentions of your brand.',
    benefit: 2,
    timeEfficiency: 4,
    details:
      "You need to check whether each mention is linked to your site. If not, contact these people to do so or to adjust the anchor correctly.",
  },
  {
    id: 34,
    title: "Name mentions",
    category: "Marketing and branding",
    description: "I noticed that many websites mentioned founders or CEOs without linking to the company.",
    benefit: 2,
    timeEfficiency: 4,
    details:
      "Use this as an opportunity to thank them for mentioning you and for acquiring another link from a relevant source.",
  },
  {
    id: 35,
    title: "Stolen images link reclamation",
    category: "Marketing and branding",
    description:
      "Technically, the link reclamation is when you try to locate broken backlinks, opportunities mentioned in #30 and #31, or if there is an improper backlink, misspelled domain or anchor text for any reason.",
    benefit: 3,
    timeEfficiency: 3,
    steps: [
      "Create a list of the URLS of your images",
      "Use Google image search by pasting the URL",
      "Check the websites from search results whether they gave you a credit by looking for your domain in the HTML code",
      "If there's no credit, reach out the authors",
    ],
    details: "When it comes to images, it may happen some websites use your images without providing a source. It usually applies to infographics, charts and quality images. Last but not least, this technique makes sense for authoritative websites or if your images are true inspiration for the others.,,,,,,,"
  },
  {
    id: 36,
    title: "Get interviewed",
    category: "Marketing and branding",
    description: "No, you don't need to be Britney Spears. Things happen really fast in the digital world.",
    benefit: 5,
    timeEfficiency: 2,
    details:
      "Take the advantage of it. You can become successful in a short time so getting interviewed with a link is definitely a good idea. However, nothing comes for free so don't wait to be interviewed. Research publishers and get in touch with them.",
  },
  {
    id: 37,
    title: "Gifts",
    category: "Marketing and branding",
    description: "How about sending gifts to your most valuable customers and partners?",
    benefit: 2,
    timeEfficiency: 4,
    details:
      "Use special occasions such as Christmas or birthdays and include a call-to-action to share it and link to you.",
  },
  {
    id: 38,
    title: "Exchange",
    category: "Marketing and branding",
    description: "Exchange your products for a review or other promo activities leading to a link.",
    benefit: 4,
    timeEfficiency: 5,
    details:
      "Bloggers writing a review will usually include a link so you don't need to ask them. When it comes to affiliate partners, they tend to provide no-follow links.",
  },
  {
    id: 39,
    title: "Build a campaign microsite",
    category: "Marketing and branding",
    description: "Do you have a special discount, an event or a product launch? Build a microsite!",
    benefit: 3,
    timeEfficiency: 3,
    details:
      "Keep in mind that content should be 100% non-duplicate and you should also build a good link profile for the microsite. Creating microsites from the SEO point of view isn't as profitable as it was in the past but you should consider it when you are planning to build a long term authority website.",
  },
  {
    id: 40,
    title: "Create a sitewide announcement link",
    category: "Marketing and branding",
    description:
      "Yeah, a sitewide link isn't that good when it comes to the link strength but it's perfect for a short term link placement to gain high traffic.",
    benefit: 2,
    timeEfficiency: 5,
    details:
      "i.e. you can do this with a short term special offer. Keep in mind that the linked sites should be related.",
  },
  {
    id: 41,
    title: "Comment blog posts",
    category: "Marketing and branding",
    description:
      "In general, I think that comments with links don't positively influence your SEO because they are deleted almost immediately.",
    benefit: 1,
    timeEfficiency: 3,
    details:
      "But if you select blog posts with high traffic, then you write a comment which is super relevant and boosts the discussion, it may end up with providing a link that will add a value to the discussion. In this case, the moderator shouldn't delete the comment. No one wants to stop a productive discussion under their blog post.",
  },
  {
    id: 42,
    title: "Cooperate with courses, schools and teachers",
    category: "Marketing and branding",
    description:
      "What's better than to be recommended to many students by well-known courses, universities or respected teachers?",
    benefit: 5,
    timeEfficiency: 3,
    details:
      "Not to mention that a backlink from '.edu' domain can be a great signal for Google. The quality of website users referred this way is unquestionable. What's more, you can prepare a special offer for the students. One last thing I would like to mention is that well-known teachers tend to speak on various events or conferences on which they can promote your website. The amount of time you will need to invest into this depends on whether you are the outreached person or you plan to outreach them.",
  },
  {
    id: 43,
    title: "Content syndication",
    category: "Submissions",
    description: "Content syndication is a great backlink source and you will get some additional traffic boost.",
    benefit: 4,
    timeEfficiency: 3,
    details:
      "The most popular platforms are: GrowthHackers, Medium, LinkedIn, Growthub, Business2community. You can submit an excerpt of your original article or create a unique description, it's up to you. In case of the duplicate content, make sure to check whether the platform has implemented a 'rel=canonical tag', which links back to your original content.",
  },
  {
    id: 44,
    title: "Beta lists and startup submissions",
    category: "Submissions",
    description: "Links from these sites are usually no-follow but their overall influence helps a lot.",
    benefit: 4,
    timeEfficiency: 2,
    details:
      "There are highly focused people willing to test or support new products. Check Betalist, ProductHunt, or Erlibird.",
  },
  {
    id: 45,
    title: "Business listings and catalogues",
    category: "Submissions",
    description: "They used to work in the past. It's really time-consuming and benefits are usually minimal.",
    benefit: 1,
    timeEfficiency: 2,
    details: "However, it's ok to be there, at least on the most relevant ones.",
  },
  {
    id: 46,
    title: "Submit creatives",
    category: "Submissions",
    description:
      "Infographics, ebooks or leaflets can be submitted on Slideshare, Issuu, Pinterest, Scribd and other alternatives.",
    benefit: 3,
    timeEfficiency: 3,
    details:
      "Reserve some time as you would need various digital formats, descriptions, and links. In fact, creative formats like infographics can be incredibly powerful for link building. As long as you're building an infographic that includes important information about your industry, you can generate more and more links and website traffic.",
  },
  {
    id: 47,
    title: "Submit videos",
    category: "Submissions",
    description:
      "Compared to the time needed for a video production, the submission is nearly nothing. And it's not only about YouTube.",
    benefit: 4,
    timeEfficiency: 4,
    details: "There are many sites where you can attract views such as Vimeo.",
    bestPractices: [
      "Create a custom thumbnail",
      "The title should be both appealing and well-optimized",
      "Add at least a short description, not only the link",
      "Consider adding an end screen and annotations",
    ],
  },
  {
    id: 48,
    title: "Develop and share",
    category: "Submissions",
    description:
      "Have you developed something that works and looks like a charm? Share it on highly-focused forums such as GitHub, Bitbucket, or CodePen.",
    benefit: 3,
    timeEfficiency: 4,
    details:
      "It doesn't directly make a link but it can improve the overall share of search for your brand and that means audience, clicks, and links.",
  },
  {
    id: 49,
    title: "Wikipedia link building",
    category: "Submissions",
    description: "Link building on Wikipedia isn't complicated but you should think tactical.",
    benefit: 4,
    timeEfficiency: 3,
    details:
      "The biggest con is that linking from Wikipedia will automatically generate new links because your site will be used as a reference.",
  },
  {
    id: 50,
    title: "Barnacle SEO",
    category: "Submissions",
    description: "Many of the mentioned techniques in this category and some others are part of barnacle SEO.",
    benefit: 4,
    timeEfficiency: 3,
    details:
      "However, the main point of barnacle SEO is that you optimize someone else's website and leverage its authority at the same time. That means you focus not only to get a backlink. You should help the website to rank high by improving it with quality content.",
  },
  {
    id: 51,
    title: "Email outreach",
    category: "Email",
    description:
      "Email outreach is a time-consuming task. You need to do it as a part of many link building techniques mentioned in this article.",
    benefit: 5,
    timeEfficiency: 1,
    details:
      "It's all about finding the right prospects, listing the potential link placement, researching email addresses and sending personalized emails. Get ready for sending reminders and don't forget to track the results. You'll find many guides on this. Last time, we reached a 16% response rate.",
  },
  {
    id: 52,
    title: "Resource pages",
    category: "Email",
    description: "There are thousands of pages listing guides or tools and linking to them.",
    benefit: 5,
    timeEfficiency: 1,
    details:
      "Use Google search operators such as exact match, allintitle, intitle, inurl with your keyword and you will find many pages on which you would like to have a backlink. Example: inurl:'seo resources'. Once you create a list of the pages, prepare personalized messages and outreach the authors.",
  },
  {
    id: 53,
    title: "Top lists, how-tos, guides",
    category: "Email",
    description: "Creating this kind of content attracts links so why not to have a backlink there?",
    benefit: 5,
    timeEfficiency: 1,
    details:
      "This technique is similar to #44 and it requires using the exact match, allintitle, intitle, inurl search operators. When creating the list of prospects, think about your website's authority too. You should provide a value for the outreached person. Besides using the search operators, you can try tools such as BuzzSumo.",
  },
  {
    id: 54,
    title: "Email signatures",
    category: "Email",
    description:
      "How many emails do you send per month? Imagine only a few of the recipients click on the link under your name.",
    benefit: 1,
    timeEfficiency: 5,
    details:
      "You get a couple of clicks and it costs you nothing. Keep in mind that email signatures don't positively affect SEO.",
  },
  {
    id: 55,
    title: "Internal linking",
    category: "Technical",
    description: "It's a must! Internal linking means you rule anchors and add links where you want to.",
    benefit: 4,
    timeEfficiency: 4,
    details:
      "If you do it regularly, it's a matter of seconds. In case your website is full of content without internal links, you'll spend a couple of days fixing it. My advice: Don't add more than 2-3 links per article. Avoid using a plugin which automatically links particular words. It's annoying and ruins UX. One more tip: Identify your most-viewed pages so you know where to put specific links.",
  },
  {
    id: 56,
    title: "Breadcrumbs",
    category: "Technical",
    description: "Another internal link building tip is to use breadcrumbs.",
    benefit: 3,
    timeEfficiency: 5,
    details:
      "The site navigation is transparent thanks to them and you can optimize the anchor text distribution as well.",
  },
  {
    id: 57,
    title: "RSS feed",
    category: "Technical",
    description: "You probably have it but in case you don't, create one.",
    benefit: 2,
    timeEfficiency: 5,
    details:
      "Sooner or later, somebody will scrape your content. But if you place internal links in the content, you'll earn a link.",
  },
  {
    id: 58,
    title: "Create a sitemap",
    category: "Technical",
    description: "This is one of the internal linking methods and it's extremely useful.",
    benefit: 3,
    timeEfficiency: 5,
    details:
      "Search engines like sitemaps. Moreover, it's a good navigation for visitors. You can use one of the many WordPress plugins.",
  },
  {
    id: 59,
    title: "Broken link building",
    category: "Technical",
    description:
      "Identifying links leading to non-existing sites and linking them to your content can be a time-consuming but effective method.",
    benefit: 3,
    timeEfficiency: 2,
    details: "You can use search operators or various tools for this.",
  },
  {
    id: 60,
    title: "404 errors",
    category: "Technical",
    description: "Check the Google Search Console if there are any. No one likes to land on 404 – Page not found.",
    benefit: 3,
    timeEfficiency: 4,
  },
  {
    id: 61,
    title: "Do you have robots.txt?",
    category: "Technical",
    description: "Review it whether there are any linked pages.",
    benefit: 3,
    timeEfficiency: 4,
    details:
      "Either contact webmasters of sites linking to them or consider allowing crawlers to index these pages. robots.txt syntax: User-agent: * (e.g. Googlebot), Disallow: / (e.g. /images/pizza.png)",
  },
  {
    id: 62,
    title: "PBNs (Private Blog Network)",
    category: "Technical",
    description:
      "PBNs are a way as well but you have to be very careful. These links should look as natural as possible.",
    benefit: 4,
    timeEfficiency: 1,
    details:
      "PBNs are websites to implement links to other websites (ones that generate money). It's an expensive technique. You need to pay for a domain, hosting and set of blog posts. It can be risky because Google bans PBNs from time to time. Think wisely. The costs of PBNs can be higher than the income.",
  },
  {
    id: 63,
    title: "Expired domains",
    category: "Technical",
    description: "Look for expired domains with working links.",
    benefit: 2,
    timeEfficiency: 3,
    details:
      "All you had to do in the past was to find them and redirect them via 301. Nowadays, it's more complicated. Watch out for relevancy.",
  },
  {
    id: 64,
    title: "Create a free tool",
    category: "Technical",
    description:
      "Everyone loves free tools: free = buzz. That means it's shared and likely to build a solid number of backlinks.",
    benefit: 4,
    timeEfficiency: 3,
    details:
      "So why not to create a free tool to use this potential of high website traffic and many backlinks for your own needs? You can link your other websites from it. We did the same thing with RockingPage where we included links to our SEO tools.",
  },
]

const categories = ["All", "Content", "Social", "Marketing and branding", "Submissions", "Email", "Technical"]

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"}`} />
      ))}
    </div>
  )
}

function TechniqueCard({
  technique,
  onComplete,
  isCompleted,
}: { technique: Technique; onComplete: () => void; isCompleted: boolean }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[#0a0a0a] rounded-lg p-4 border-2 border-orange-500/20 hover:border-orange-500 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-orange-500 flex-grow">{technique.title}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          {isOpen ? <X size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-300 my-2">{technique.description}</p>

            {technique.details && <p className="text-gray-400 my-2 text-sm">{technique.details}</p>}

            {technique.steps && (
              <div className="my-2 bg-[#1d1d1d] p-3 rounded">
                <p className="font-semibold mb-1">Main steps:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {technique.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-sm text-gray-400">Benefit</p>
                <RatingStars rating={technique.benefit} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Time Efficiency</p>
                <RatingStars rating={technique.timeEfficiency} />
              </div>
            </div>

            <button
              onClick={onComplete}
              className={`mt-4 w-full py-2 rounded transition-colors duration-200 ${
                isCompleted ? "bg-green-600 text-white" : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              {isCompleted ? "Completed" : "Mark as Complete"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const percentage = (completed / total) * 100

  return (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
      <div
        className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  )
}

export default function LinkBuildingTechniques() {
  const [completedTechniques, setCompletedTechniques] = useState<number[]>([])
  const [currentTechniqueIndex, setCurrentTechniqueIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [streak, setStreak] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const savedCompletedTechniques = localStorage.getItem("completedTechniques")
    const savedStreak = localStorage.getItem("streak")
    const lastCompletionDate = localStorage.getItem("lastCompletionDate")

    if (savedCompletedTechniques) {
      setCompletedTechniques(JSON.parse(savedCompletedTechniques))
    }

    if (savedStreak) {
      const streakCount = Number.parseInt(savedStreak, 10)
      const today = new Date().toDateString()

      if (lastCompletionDate === today) {
        setStreak(streakCount)
      } else if (lastCompletionDate === new Date(Date.now() - 86400000).toDateString()) {
        setStreak(streakCount + 1)
        localStorage.setItem("streak", (streakCount + 1).toString())
        localStorage.setItem("lastCompletionDate", today)
      } else {
        setStreak(1)
        localStorage.setItem("streak", "1")
        localStorage.setItem("lastCompletionDate", today)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("completedTechniques", JSON.stringify(completedTechniques))
  }, [completedTechniques])

  const handleComplete = (id: number) => {
    if (!completedTechniques.includes(id)) {
      const newCompleted = [...completedTechniques, id]
      setCompletedTechniques(newCompleted)

      if (newCompleted.length === techniques.length) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }

      const today = new Date().toDateString()
      const lastCompletionDate = localStorage.getItem("lastCompletionDate")

      if (lastCompletionDate !== today) {
        const newStreak = streak + 1
        setStreak(newStreak)
        localStorage.setItem("streak", newStreak.toString())
        localStorage.setItem("lastCompletionDate", today)
      }
    }
  }

  const handleNext = () => {
    if (currentTechniqueIndex < techniques.length - 1) {
      setCurrentTechniqueIndex(currentTechniqueIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentTechniqueIndex > 0) {
      setCurrentTechniqueIndex(currentTechniqueIndex - 1)
    }
  }

  const filteredTechniques = techniques.filter(
    (technique) =>
      (selectedCategory === "All" || technique.category === selectedCategory) &&
      (technique.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        technique.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-orange-500">Link Building Techniques Mastery</h1>
        <p className="text-xl mb-8 text-center">
          Elevate your SEO game with {techniques.length} powerful link building strategies!
        </p>

        <div className="flex justify-between items-center mb-8">
          <div className="w-2/3">
            <p className="text-lg mb-2">
              Mastered: {completedTechniques.length} / {techniques.length}
            </p>
            <ProgressBar completed={completedTechniques.length} total={techniques.length} />
          </div>
          <div className="text-center">
            <p className="text-lg mb-2">Current Streak</p>
            <div className="flex items-center justify-center bg-orange-500 rounded-full w-16 h-16">
              <Award className="w-8 h-8" />
              <span className="ml-1 font-bold">{streak}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search techniques..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-[#0a0a0a] border-2 border-orange-500/20 rounded-lg focus:outline-none focus:border-orange-500 text-white"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <TechniqueCard
            technique={techniques[currentTechniqueIndex]}
            onComplete={() => handleComplete(techniques[currentTechniqueIndex].id)}
            isCompleted={completedTechniques.includes(techniques[currentTechniqueIndex].id)}
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentTechniqueIndex === 0}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <ArrowLeft className="mr-2" /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentTechniqueIndex === techniques.length - 1}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              Next <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTechniques.map((technique) => (
            <div key={technique.id} className="flex items-center bg-[#0a0a0a] p-3 rounded-lg">
              <Check
                size={20}
                className={`mr-2 ${completedTechniques.includes(technique.id) ? "text-green-500" : "text-gray-500"}`}
              />
              <span className={completedTechniques.includes(technique.id) ? "line-through text-gray-500" : ""}>
                {technique.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

