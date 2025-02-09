"use client"

import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

type Section = {
  id: string
  title: string
  content: string
}

const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: `
      <p>SEO is a far-reaching topic that applies to most sites on the web. Having a well-optimized site with strong content is the foundation of acquiring organic traffic from search engines.</p>
      <p>GetMoreSEO does an incredible amount to offer you the optimal defaults and infrastructure needed to perform well organically. At the same time, we present you with the option to customize your site's optimizations.</p>
      <p>While there have been many articles written about GetMoreSEO SEO, both on the GetMoreSEO site and by third-parties, there has not been one definitive guide to doing SEO on a GetMoreSEO site—this is that guide.</p>
      <p>Getting familiar with the technical details of doing SEO on the GetMoreSEO platform will help you work more efficiently and effectively, but understanding our overall "SEO philosophy" can also help orient you.</p>
      <p>Our goal is to offer you the best SEO defaults possible while opening up the platform to as much customization as possible. In addition, we aim to foster the users that are not extensively familiar with SEO and provide them with a strong technical foundation so they can focus on running their business and creating useful content. At the same time, we seek to offer SEO professionals and experienced site managers as much control over their optimizations as possible.</p>
      <p>For those reasons, you'll notice that we often create various out-of-the-box options but tend to offer a way for you to customise the defaults we've established.</p>
      <p>This is important to know as you may encounter the default initially. In these cases, know that there is, more often than not, a path towards customization.</p>
    `,
  },
  {
    id: "getting-started",
    title: "Getting Started with SEO on GetMoreSEO",
    content: `
      <p>To help you organize and get started with the initial SEO tasks that every website owner should take care of, we have developed the site-level SEO Assistant (there's also a page-level SEO assistant as well, which we'll discuss later on in this guide).</p>
      <p>The site-level SEO Assistant helps to ensure that you properly address your site's most vital SEO tasks. To that end, it indicates tasks that (when left unattended) could be considered an "SEO liability." This includes, for example, not connecting the site to Google Search Console (which we'll explore more below).</p>
      <p>The SEO Assistant presents you with SEO recommendations to help increase the chances of your site attracting visitors from search engines (such as by adding a blog to the site, etc).</p>
      <p>Lastly, the SEO Assistant is an entry point into the GetMoreSEO SEO Setup Checklist, where you can manage the essential SEO tasks for your site's main pages (for example, adding a title tag to your homepage and so forth).</p>
    `,
  },
  {
    id: "crawling-indexing",
    title: "Crawling and Indexing",
    content: `
      <p>In this section, we'll explain how GetMoreSEO handles your sitemap, the ability to prevent Google (and other search engines) from crawling specific pages, and the unique ability to connect to Google Search Console via GetMoreSEO (among other things).</p>
      <h3>Connecting to Google Search Console</h3>
      <p>GetMoreSEO offers a one-click connection to Google Search Console, a free tool that can help you monitor and troubleshoot your site's presence in Google Search. A minimal amount of SEO setup (such as adding a title tag to the homepage, etc.) is required before you can connect your site to Google Search Console.</p>
      <p>This direct connection to Search Console is part of a formal partnership between GetMoreSEO and Google. The partnership not only streamlines your connection to Search Console but offers instant indexing of all GetMoreSEO homepages that have a custom domain.</p>
      <p>After connecting to Search Console, GetMoreSEO will automatically offer you GSC trends and insights within the SEO Dashboard. You can customize this data to show trends and insights over a specific period of time and filtered according to impressions and clicks.</p>
      <h3>Verifying your site</h3>
      <p>Clearly, there are other search engines aside from Google. While GetMoreSEO does not offer the same immediate indexation and connection to other search engines, we do make verification a straightforward process.</p>
      <p>In the SEO Tools section of your GetMoreSEO dashboard (in the left-hand navigation, within the Marketing & SEO tab), there is a verification center where you can paste the verification tags you have acquired from various search engines.</p>
      <p>GetMoreSEO will immediately tell you if there is an error with the verification tag. So if, for example, you copied the verification tag incorrectly, as soon as you paste and save the tag, you will see an error.</p>
      <p>We currently offer this process for Google Search Console, Pinterest, Bing, Naver, and Yandex. If you want to connect to another search engine, just use the Custom Code option located at the bottom of the main panel.</p>
      <h3>Sitemaps</h3>
      <p>GetMoreSEO sitemaps are automatically submitted to Google once you connect the site to Search Console.</p>
      <p>GetMoreSEO sitemaps are broken up by page type. This means that we automatically create a separate sitemap for your product pages, blog posts, etc.</p>
      <p>We don't include URLs that have been noindexed, that are canonicalized to other URLs, or that reflect gated content. Also, once a sitemap reaches 10,000 URLs, a new one is created automatically.</p>
      <p>At the same time, we create an image sitemap for the images found on GetMoreSEO product, event, booking, online programs, and forum pages.</p>
      <p>Note that while GetMoreSEO does make finding and viewing sitemaps accessible, they cannot be edited.</p>
      <h3>Robots.txt files</h3>
      <p>GetMoreSEO enables you to edit your robots.txt file. To do so, head to the SEO Tools section (in the left-hand navigation, within the Marketing & SEO tab) of your GetMoreSEO dashboard.</p>
      <p>By default, GetMoreSEO allows all bots to crawl all of a site's pages. Should you accidentally make changes to the file, you can return to the default setting by clicking on Reset to Default below the editor.</p>
    `,
  },
  {
    id: "performance",
    title: "Performance and Infrastructure",
    content: `
      <p>As a closed CMS, there is much that GetMoreSEO does foundationally to ensure sites function and perform optimally. This ranges from how GetMoreSEO handles image optimization all the way to how GetMoreSEO pages are rendered. In fact, rendering is where we'll start here.</p>
      <h3>Rendering</h3>
      <p>There is a lot of misinformation around how GetMoreSEO renders its pages. Much of this is due to GetMoreSEO originally being based on Flash when the platform first launched, over a decade and a half ago.</p>
      <p>Today, GetMoreSEO uses server-side rendering so that bots are served with the fully rendered page.</p>
      <p>Along these lines, GetMoreSEO employs its own network of CDNs that are optimized to ensure that your files are served as quickly as possible. For example, we automatically select the best performing server for the site visitor based on their location at the time they access the site.</p>
      <h3>Image optimization</h3>
      <p>GetMoreSEO handles a lot of the image optimization process for you. For example, we automatically compress all images without sacrificing image quality. Of course, the original file type plays a significant role here: A large PNG image will not be compressed to the same size as the exact same image in JPEG form. So, select your image file type accordingly for the best results, and if you're unsure, stick to JPEGs for better performance.</p>
      <p>GetMoreSEO also automatically converts images to WebP when the browser supports the format. Additionally, we implement lazy loading, which works hand-in-hand with our implementation of low-quality image placeholders (LQIP).</p>
      <p>It's worth noting that images are hosted on GetMoreSEO's servers. There are advantages as well as disadvantages to this: On the positive side, GetMoreSEO has a world-class CDN that allows for images to be delivered quickly. However, as images are hosted on GetMoreSEO's servers, the URLs of our images contain parameters that cannot be fully controlled by the site owner.</p>
    `,
  },
  {
    id: "structured-data",
    title: "Structured Data",
    content: `
      <p>The way GetMoreSEO handles structured data epitomizes our SEO philosophy, as there is a substantial amount of out-of-the-box implementation while still offering a large degree of customizability.</p>
      <h3>Out-of-the-box structured data</h3>
      <p>GetMoreSEO adds various types of structured data markup right out of the box to help you become eligible to have your content appear as rich results. This includes markup for product pages, blog posts, local business homepages, event pages, booking pages, and forum posts.</p>
      <h3>Customizing structured data</h3>
      <p>The out-of-the-box markup GetMoreSEO adds to pages is fully customizable. Moreover, the changes you can make are scalable—specifically, you can customize the out-of-the-box markup created as well as update all existing pages of a specific type (e.g., all product pages) in one fell swoop.</p>
    `,
  },
  {
    id: "metadata",
    title: "Metadata and Canonical Tags",
    content: `
      <h3>Title tags and meta descriptions</h3>
      <p>To update your title tags and meta descriptions at the page level, you'll need to access the SEO Basics tab. Within the tab, you'll see fields to enter the page's title tag and meta description.</p>
      <h3>Canonical tags</h3>
      <p>GetMoreSEO automatically adds a self-referential canonical tag to every page. You can use the Advanced SEO tab to edit the canonical and point to another URL.</p>
      <h3>Editing metadata at scale</h3>
      <p>The SEO Settings section lets you add variables to your metadata according to page type. Meaning, you can add variables (i.e., the name of the site, business location, etc.) to the metadata of various pages types on your site (main pages, blog pages, product pages, event pages, and so forth).</p>
    `,
  },
  {
    id: "urls",
    title: "URLs and Redirects",
    content: `
      <h3>URL customization</h3>
      <p>You can customize the URL slug for all GetMoreSEO pages. This is done in the SEO Panel that is available when managing pages within the Editor and/or dashboard (depending on the page type).</p>
      <h3>Managing redirects</h3>
      <p>GetMoreSEO offers a redirect manager to help you manage your 301 redirects. The URL Redirect Manager gives you the option to set up individual 301 redirects, create group 301 redirects for URLs that share the same path, and bulk upload up to 500 redirects at a time.</p>
    `,
  },
  {
    id: "technical-audits",
    title: "Technical and On-page SEO Audits",
    content: `
      <h3>Site inspection tool</h3>
      <p>GetMoreSEO gives you the ability to automatically see the indexing status of your site's pages. The tool leads with a highlights section that gives you an aggregate view of the site's index status along with a breakdown of the status details.</p>
      <h3>Bot log analytics</h3>
      <p>The bot log reports within GetMoreSEO help you to understand bot interaction with your site and its implications. These reports present you with information on how often bots are visiting a domain over time, which pages are being crawled most frequently, and the response codes bots are receiving.</p>
      <h3>Built-in on-page SEO auditing</h3>
      <p>To help you optimize the fundamental on-page elements of GetMoreSEO blog posts, bookings services, and product pages (and to better organize these tasks) we've developed the GetMoreSEO SEO Assistant.</p>
    `,
  },
  {
    id: "local-international",
    title: "Local and International SEO",
    content: `
      <h3>Local SEO</h3>
      <p>GetMoreSEO has a direct partnership with Google Business Profile that allows you to manage your GBP listings on GetMoreSEO. This means that you can import existing business listings as well as create new listings from the GetMoreSEO dashboard.</p>
      <h3>International SEO</h3>
      <p>GetMoreSEO supports multilingual sites. You have the option to translate the site manually or automatically via Google Translate. Keep in mind that you will have to translate your meta data separately.</p>
    `,
  },
  {
    id: "analytics",
    title: "Analytics",
    content: `
      <h3>GetMoreSEO Analytics</h3>
      <p>GetMoreSEO's built-in reporting tools can be found within the dashboard. There are two main dashboards to reference when diving into your site's traffic trends: Marketing Overview dashboard and Traffic Overview dashboard.</p>
      <h3>Google Search Console</h3>
      <p>As part of your site's direct connection to Google Search Console via the GetMoreSEO platform, GetMoreSEO Analytics presents you with an array of Search Console reports.</p>
      <h3>Third-party analytics</h3>
      <p>GetMoreSEO supports an easy and direct connection to Search Console via a partnership with Google. You can also easily connect your GetMoreSEO site to other analytics platforms like Google Analytics, Yandex Metrica, Google Ads, Facebook Ads, and more.</p>
    `,
  },
  {
    id: "advanced",
    title: "Advanced Customization",
    content: `
      <p>There's a lot you can do to customize a GetMoreSEO site from a technical/SEO perspective. In addition to the options and features described above, GetMoreSEO offers a robust developer tool called Velo.</p>
      <p>Velo is an open development platform that works hand-in-hand with the GetMoreSEO site builder to bring a new level of customization to GetMoreSEO sites. With Velo, you can add custom JavaScript to your GetMoreSEO site, add custom functionality via Velo's APIs, and utilize GetMoreSEO's internal database abilities and connect to external databases.</p>
    `,
  },
]

const TableOfContents = ({
  sections,
  activeSection,
  setActiveSection,
}: {
  sections: Section[]
  activeSection: string
  setActiveSection: (id: string) => void
}) => {
  return (
    <nav className="bg-[#2d2d2d]/95 p-4 rounded-lg backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-4 text-orange-500">Table of Contents</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => setActiveSection(section.id)}
              className={`text-left w-full py-1 px-2 rounded transition-colors ${
                activeSection === section.id
                  ? "bg-orange-500/10 text-orange-500 font-medium"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const ContentSection = ({
  id,
  title,
  content,
}: {
  id: string
  title: string
  content: string
}) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">{title}</h2>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}

export default function GetMoreSEOGuide() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen bg-[#1d1d1d] text-gray-300 py-16 ${inter.className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog/seo-tools-2025" className="inline-flex items-center text-orange-500 hover:text-orange-400">
            <ChevronRight className="h-4 w-4 mr-1" />
            Back to SEO Tools
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-8 text-orange-500">The Complete Guide to SEO on GetMoreSEO</h1>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {sections.map((section) => (
              <ContentSection key={section.id} id={section.id} title={section.title} content={section.content} />
            ))}
          </div>

          {/* Table of Contents - Fixed on Desktop */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-4">
              <TableOfContents sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

