"use client"

import React from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ChecklistItem {
  whatChecked: string
  howToCheck: string
  status: string
  comments: string
  priority: string
  lessonReference: string
  lessonUrl: string
}

interface ChecklistSection {
  title: string
  items: ChecklistItem[]
}

const checklist: ChecklistSection[] = [
  {
    title: "Prerequisites",
    items: [
      {
        whatChecked: "Google Search Console access",
        howToCheck: "Ask the website owner",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "",
        lessonUrl: "",
      },
      {
        whatChecked: "Google Analytics access",
        howToCheck: "Ask the website owner",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "",
        lessonUrl: "",
      },
      {
        whatChecked: "List of page templates with example URLs",
        howToCheck: 'See the "Page Templates" tab',
        status: "",
        comments: "",
        priority: "",
        lessonReference: "",
        lessonUrl: "",
      },
      {
        whatChecked: "Website's tech stack",
        howToCheck: "https://builtwith.com/, Wappalyzer Chrome extension. Talk to the website owner",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "",
        lessonUrl: "",
      },
      {
        whatChecked: "Were there any recent changes made on the website? (e.g. migration)",
        howToCheck: "Ask the website owner",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "",
        lessonUrl: "",
      },
    ],
  },
  {
    title: "Crawlability",
    items: [
      {
        whatChecked: "Is the robots.txt file found on the website?",
        howToCheck: "SEO Pro extension, manually at domain.com/robots.txt",
        status: "Pass",
        comments: "",
        priority: "Critical",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Is the robots.txt file found on the correct URL?",
        howToCheck: "SEO Pro extension, manually at domain.com/robots.txt",
        status: "Fail",
        comments: "Example: the robots.txt file is found on the wrong URL - domain.com/catalot/robots.txt",
        priority: "Critical",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Does the robots.txt return 200 HTTP status code?",
        howToCheck: "SEO Pro extension",
        status: "",
        comments: "",
        priority: "Critical",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Does the robots.txt link to your XML sitemap?",
        howToCheck: "Manually",
        status: "",
        comments: "",
        priority: "Low",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Is robots.txt blocking crawling of the pages that need to be ranking?",
        howToCheck: "Crawling tool",
        status: "Pass",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Are there pages that are disallowed in the robots.txt but are still indexed by Google?",
        howToCheck: "Google Search Console (GSC > Pages > Not Indexed)",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Are CSS files being blocked in the robots.txt file?",
        howToCheck: "Manually, Crawling tool",
        status: "Pass",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Are JavaScript files being blocked in the robots.txt file?",
        howToCheck: "Manually, Crawling tool",
        status: "Pass",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Are there any reported issues with crawling?",
        howToCheck: "Google Search Console (GSC > Settings > Crawl Stats)",
        status: "Attention",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Does the response codes breakdown make sense?",
        howToCheck: "Google Search Console (GSC > Settings > Crawl Stats > By request)",
        status: "Attention",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Is there a substantial amount of 404s Google requests?",
        howToCheck: "Google Search Console (GSC > Settings > Crawl Stats > By request)",
        status: "Fail",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Is there a substantial amount of redirects Google requests?",
        howToCheck: "Google Search Console (GSC > Settings > Crawl Stats > By request)",
        status: "Pass",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
    ],
  },
  {
    title: "Indexability",
    items: [
      {
        whatChecked: "Is the website indexed?",
        howToCheck: "Use site: search operator; Google Search Console",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to check if a page is indexed and how to get a page indexed quickly",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-check-if-a-page-is-indexed-and-how-to-get-a-page-indexed-quickly/",
      },
      {
        whatChecked: "Are any important pages that should be ranking noindexed?",
        howToCheck: "Google Search Console (GSC > Pages > Not Indexed > Excluded by 'noindex' tag), Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Are there any pages that are disallowed in the robots.txt and noindexed at the same time?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 3: How Google Works\nLesson: Crawling: robots.txt",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/crawling-robotstxt/",
      },
      {
        whatChecked: "Does the website pages have correct canonical tags?",
        howToCheck:
          "Crawling tool, Google Search Console (GSC > Pages > Not indexed > all canonical-related issues), SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: 3 Types of canonical tags and their purpose",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/3-types-of-canonical-tags-and-their-purpose/",
      },
      {
        whatChecked: "Are Google selected canonicals different from the user selected canonicals?",
        howToCheck:
          "Crawling tool, Google Search Console (GSC > Pages > Not indexed > Alternate page with proper canonical tag)",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Why did Google choose a different canonical tag?",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/why-did-google-choose-a-different-canonical-tag/",
      },
      {
        whatChecked: "Are there pages returning 4XX or 5XX errors?",
        howToCheck: "Google Search Console  (GSC > Pages > Not Indexed), Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Using HTTP status codes for the win",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/using-http-status-codes-for-the-win/",
      },
      {
        whatChecked: "Has Google flagged any website pages as soft 404s?",
        howToCheck: "Google Search Console (GSC > Pages > Not Indexed > Soft 404)",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Using HTTP status codes for the win",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/using-http-status-codes-for-the-win/",
      },
      {
        whatChecked: "Do 404 pages have a GA tracking code?",
        howToCheck: "Manually",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Using HTTP status codes for the win",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/using-http-status-codes-for-the-win/",
      },
      {
        whatChecked: "Are there redirect chains?",
        howToCheck: "Crawling tool, SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Redirects and redirect chains (how to use + bad examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/redirects-and-redirect-chains-how-to-use-bad-examples/",
      },
      {
        whatChecked: "Are there JavaScript redirects?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Redirects and redirect chains (how to use + bad examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/redirects-and-redirect-chains-how-to-use-bad-examples/",
      },
      {
        whatChecked: "Is the www subdomain redirecting correctly? (either to www or non-www)",
        howToCheck: "Crawling tool",
        status: "Attention",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked:
          "Are all website pages secure and have 301 redirects set up from the HTTP website version to HTTPS?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked: "Are there any issues with the trailing slash?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked: "Are there any staging or UAT sites indexed?",
        howToCheck: "Google index, Google Search Console (domain property)",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked: "Are internal search results indexed?",
        howToCheck: "Manually, Google Search Console",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: The ultimate guide to handling website pages",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/the-ultimate-guide-to-handling-website-pages/",
      },
      {
        whatChecked: "Does the XML sitemap or XML index sitemap exist?",
        howToCheck: "Manually, GSC > Sitemaps, SEO Pro Chrome extension",
        status: "Pass",
        comments: "",
        priority: "",
        lessonReference: "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Sitemap.xml",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/sitemapxml/",
      },
      {
        whatChecked: "Does the XML sitemap contain the required and recommended tags?",
        howToCheck: "Manually",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Sitemap.xml",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/sitemapxml/",
      },
      {
        whatChecked: "Is the XML sitemap submitted to Google Search Console?",
        howToCheck: "Google Search Console (GSC > Sitemaps)",
        status: "Pass",
        comments: "",
        priority: "",
        lessonReference: "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Sitemap.xml",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/sitemapxml/",
      },
      {
        whatChecked: "Does XML sitemap has any errors reported in Google Search Console?",
        howToCheck: "Google Search Console (GSC > Sitemaps)",
        status: "Pass",
        comments: "Example: the XML sitemap lists pages returning 404 HTTP status codes",
        priority: "",
        lessonReference: "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Sitemap.xml",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/sitemapxml/",
      },
      {
        whatChecked:
          "Does the XML sitemap list only valid canonical URLs returning 200 HTTP status codes and allowed for crawling and indexing?",
        howToCheck: "Google Search Console (GSC > Sitemaps)",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Sitemap.xml",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/sitemapxml/",
      },
      {
        whatChecked: "Is there a discrepancy between indexed pages in Google and the XML Sitemap?",
        howToCheck: "Google Search Console",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: Sitemap.xml",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/sitemapxml/",
      },
    ],
  },
  {
    title: "Internal Linking",
    items: [
      {
        whatChecked: "Does the website structure make sense?",
        howToCheck: "Manually, Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: What makes a perfect website structure",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/what-makes-a-perfect-website-structure/",
      },
      {
        whatChecked: "Is the URL structure consistent across the website?",
        howToCheck: "Manually, Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: URL structure: what works and what doesn't",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/url-structure-what-works-and-what-doesnt/",
      },
      {
        whatChecked: "Are there URLs with parameters?",
        howToCheck: "Manually, Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: How to approach URLs with parameters",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-approach-urls-with-parameters/",
      },
      {
        whatChecked: "Do the URLs with parameters have right canonicals and meta robots tag set up?",
        howToCheck: "Crawling tool, SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "Critical",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: How to approach URLs with parameters",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-approach-urls-with-parameters/",
      },
      {
        whatChecked: "Are there URLs found deeper than 1-3 clicks from the homepage?",
        howToCheck: "Crawling tool",
        status: "Attention",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Actionable ways to improve internal links",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/actionable-ways-to-improve-internal-links/",
      },
      {
        whatChecked: "Are there opportunities to improve the main website navigation?",
        howToCheck: "Manually",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: What makes a perfect website structure",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/what-makes-a-perfect-website-structure/",
      },
      {
        whatChecked: "Do internal links have descriptive anchor texts?",
        howToCheck: "Crawling tool, SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Everything you need to know about internal linking",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/everything-you-need-to-know-about-internal-linking/",
      },
      {
        whatChecked: "Are there internal links with UTM parameters?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Everything you need to know about internal linking",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/everything-you-need-to-know-about-internal-linking/",
      },
      {
        whatChecked: "Is there a sufficient amount of internal links pointing to non-canonical URLs?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Everything you need to know about internal linking",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/everything-you-need-to-know-about-internal-linking/",
      },
      {
        whatChecked: "Are there are orphan pages on the website?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Actionable ways to improve internal link",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/actionable-ways-to-improve-internal-links/",
      },
      {
        whatChecked: "Are there internal linking opportunities that can be added at scale?",
        howToCheck: "Manually",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Internal linking at scale",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/internal-linking-at-scale/",
      },
      {
        whatChecked: "Is there Pagination on the website?",
        howToCheck: "Manually, Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Pagination: how to handle it the right way",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/pagination-how-to-handle-it-the-right-way/",
      },
      {
        whatChecked: "Do paginated results have separate URLs?",
        howToCheck: "Manually, Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Pagination: how to handle it the right way",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/pagination-how-to-handle-it-the-right-way/",
      },
      {
        whatChecked: "Do paginated URLs have self-referencing canonicals?",
        howToCheck: "Crawling tool, SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 5: Internal Linking: the Devil is In the Detail\nLesson: Pagination: how to handle it the right way",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/pagination-how-to-handle-it-the-right-way/",
      },
    ],
  },
  {
    title: "Page Experience",
    items: [
      {
        whatChecked: "Are all website pages secure?",
        howToCheck: "Google Search Console, Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 6: Page Experience from a Technical Point of View\nLesson: SSL, HTTPS and security",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/ssl-https-and-security/",
      },
      {
        whatChecked: "Are there any mixed content issues on the website?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 6: Page Experience from a Technical Point of View\nLesson: SSL, HTTPS and security",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/ssl-https-and-security/",
      },
      {
        whatChecked: "Are all website pages mobile-friendly?",
        howToCheck: "Google Search Console",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 6: Page Experience from a Technical Point of View\nLesson: Mobile-friendliness",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/mobile-friendliness/",
      },
      {
        whatChecked: "Does the <head> element on the page contain any invalid tags?",
        howToCheck: "Crawling tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 6: Page Experience from a Technical Point of View\nLesson: Valid HTML Page Structure",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/valid-html-page-structure/",
      },
      {
        whatChecked: "Are H1-H6 headings misused on the pages?",
        howToCheck: "Crawling tool, SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 6: Page Experience from a Technical Point of View\nLesson: Valid HTML Page Structure",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/valid-html-page-structure/",
      },
      {
        whatChecked: "Is there structured data on the website?",
        howToCheck: "Google Search Console (GSC > Enhancements)",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 6: Page Experience from a Technical Point of View\nLesson: Structured data: important things you need to know",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/structured-data-important-things-you-need-to-know/",
      },
      {
        whatChecked: "Is structured data valid per website page template?",
        howToCheck: "Google Search Console (GSC > Enhancements)",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 6: Page Experience from a Technical Point of View\nLesson: Structured data: important things you need to know",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/structured-data-important-things-you-need-to-know/",
      },
      {
        whatChecked: "Are there any structured data opportunities that are currently not captured?",
        howToCheck: "Manually",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 6: Page Experience from a Technical Point of View\nLesson: The best ways to implement structured data manually and at scale",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/the-best-ways-to-implement-structured-data-manually-and-at-scale/",
      },
    ],
  },
  {
    title: "Page Speed",
    items: [
      {
        whatChecked: "Does the website pass Core Web Vitals according to Google's field data?",
        howToCheck: "Google Search Console (GSC > Core Web Vitals), SEO Pro Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 7: Advanced Page Speed Optimization\nLesson: Analyze Core Web Vitals like a pro",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/analyze-core-web-vitals-like-a-pro/",
      },
      {
        whatChecked: "Are there LCP issues?",
        howToCheck: "Google Search Console (GSC > Core Web Vitals), PageSpeed Insights, Chrome Dev Tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 7: Advanced Page Speed Optimization\nLesson: Analyze Core Web Vitals like a pro",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/analyze-core-web-vitals-like-a-pro/",
      },
      {
        whatChecked: "Are there FID issues?",
        howToCheck: "Google Search Console (GSC > Core Web Vitals), PageSpeed Insights",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 7: Advanced Page Speed Optimization\nLesson: Analyze Core Web Vitals like a pro",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/analyze-core-web-vitals-like-a-pro/",
      },
      {
        whatChecked: "Are there CLS issues?",
        howToCheck: "Google Search Console (GSC > Core Web Vitals), PageSpeed Insights, Chrome Dev Tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 7: Advanced Page Speed Optimization\nLesson: Analyze Core Web Vitals like a pro",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/analyze-core-web-vitals-like-a-pro/",
      },
      {
        whatChecked: "Are images optimized for speed?",
        howToCheck: "PageSpeed Insights, Chrome Dev Tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 7: Advanced Page Speed Optimization\nLesson: Advanced page speed optimization",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/advanced-page-speed-optimization/",
      },
      {
        whatChecked: "Are there parser-blocking resources that shouldn't load on every page?",
        howToCheck: "PageSpeed Insights, Chrome Dev Tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 7: Advanced Page Speed Optimization\nLesson: How browsers work. Critical rendering path optimization",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-browsers-work-critical-rendering-path-optimization/",
      },
      {
        whatChecked: "Are there render-blocking resources that shouldn't load on every page?",
        howToCheck: "PageSpeed Insights, Chrome Dev Tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 7: Advanced Page Speed Optimization\nLesson: How browsers work. Critical rendering path optimization",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-browsers-work-critical-rendering-path-optimization/",
      },
      {
        whatChecked: "Are there unnecessary 3rd party scripts that are no longer needed?",
        howToCheck: "PageSpeed Insights, Chrome Dev Tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 7: Advanced Page Speed Optimization\nLesson: How browsers work. Critical rendering path optimization",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-browsers-work-critical-rendering-path-optimization/",
      },
    ],
  },
  {
    title: "JavaScript-specific checks",
    items: [
      {
        whatChecked: "Does the website heavily rely on JavaScript?",
        howToCheck: "Tech stack, Crawling tools, Web Developer Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: Using Screaming Frog for JS debugging",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/using-screaming-frog-for-js-debugging/",
      },
      {
        whatChecked: "Does the main navigation load when JS is disabled in the browser?",
        howToCheck: "Web Developer Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: 3 steps to debug JavaScript issues and win",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/3-steps-to-debug-javascript-issues-and-win/",
      },
      {
        whatChecked: "Do the body content and images load when JS is disabled in the browser?",
        howToCheck: "Web Developer Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: 3 steps to debug JavaScript issues and win",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/3-steps-to-debug-javascript-issues-and-win/",
      },
      {
        whatChecked: "Can pagination load when JS is disabled in the browser?",
        howToCheck: "Web Developer Chrome extension",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: 3 steps to debug JavaScript issues and win",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/3-steps-to-debug-javascript-issues-and-win/",
      },
      {
        whatChecked: "Is JavaScript content found in the rendered HTML?",
        howToCheck: "Inspect URL in GSC, Google Mobile-friendly Test Tool, Rich Results test tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: SEO-friendly JavaScript: best practices",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/seo-friendly-javascript-best-practices/",
      },
      {
        whatChecked: "Are links wrapped in the <a> tag?",
        howToCheck: "Inspect URL in GSC, Google Mobile-friendly Test Tool, Rich Results test tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: SEO-friendly JavaScript: best practices",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/seo-friendly-javascript-best-practices/",
      },
      {
        whatChecked: "Are images added using the <img> tag?",
        howToCheck: "Inspect URL in GSC, Google Mobile-friendly Test Tool, Rich Results test tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: SEO-friendly JavaScript: best practices",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/seo-friendly-javascript-best-practices/",
      },
      {
        whatChecked: "Are there pop-ups that prevent Google from seeing the main content?",
        howToCheck: "Inspect URL in GSC, Google Mobile-friendly Test Tool, Rich Results test tool",
        status: "",
        comments: "",
        priority: "",
        lessonReference: "Module 8: Javascript SEO\nLesson: Debugging a pop-up and content in tabs",
        lessonUrl: "https://academy.marketingsyrup.com/courses/tech-seo-pro/debugging-a-pop-up-and-content-in-tabs/",
      },
    ],
  },
  {
    title: "eCommerce-specific Checks",
    items: [
      {
        whatChecked: "Do filtering and sorting pages have no canonicals or self-referencing canonicals?",
        howToCheck: "SEO Pro Chrome extension, Crawling tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked:
          "Are there identical or very similar category pages targeting the same intent but having different URLs?",
        howToCheck: "SEO Pro Chrome extension, Crawling tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked: "Do these category pages have no canonicals or self-referencing canonicals?",
        howToCheck: "SEO Pro Chrome extension, Crawling tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked:
          "Are there identical products or product variations targeting the same intent but having different URLs?",
        howToCheck: "SEO Pro Chrome extension, Crawling tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
      {
        whatChecked: "Do these product pages have no canonicals or self-referencing canonicals?",
        howToCheck: "SEO Pro Chrome extension, Crawling tools",
        status: "",
        comments: "",
        priority: "",
        lessonReference:
          "Module 4: Control Crawling and Indexing of a Website Like a Pro\nLesson: How to fix duplicate content issues (common + eCommerce examples)",
        lessonUrl:
          "https://academy.marketingsyrup.com/courses/tech-seo-pro/how-to-fix-duplicate-content-issues-common-ecommerce-examples/",
      },
    ],
  },
]

export default function ChecklistPage() {
  const [filter, setFilter] = React.useState("")

  const filteredChecklist = checklist
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.whatChecked.toLowerCase().includes(filter.toLowerCase()) ||
          item.howToCheck.toLowerCase().includes(filter.toLowerCase()) ||
          item.status.toLowerCase().includes(filter.toLowerCase()) ||
          item.comments.toLowerCase().includes(filter.toLowerCase()) ||
          item.priority.toLowerCase().includes(filter.toLowerCase()) ||
          item.lessonReference.toLowerCase().includes(filter.toLowerCase()),
      ),
    }))
    .filter((section) => section.items.length > 0)

  return (
    <div className="min-h-screen bg-[#1d1d1d] text-white">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-6">SEO Audit Checklist</h1>
        <Input
          type="text"
          placeholder="Filter checklist..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-8 bg-[#2d2d2d] text-white border-gray-700"
        />
        <ScrollArea className="h-[calc(100vh-200px)]">
          {filteredChecklist.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 sticky top-0 bg-[#1d1d1d] py-2">{section.title}</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">What's Checked</TableHead>
                    <TableHead className="text-white">How to Check</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Comments</TableHead>
                    <TableHead className="text-white">Priority</TableHead>
                    <TableHead className="text-white">Tech SEO Pro Lesson Reference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.items.map((item, itemIndex) => (
                    <TableRow key={itemIndex} className="border-b border-gray-700">
                      <TableCell className="font-medium">{item.whatChecked}</TableCell>
                      <TableCell>{item.howToCheck}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>{item.comments}</TableCell>
                      <TableCell>{item.priority}</TableCell>
                      <TableCell>
                        <Link
                          href={item.lessonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline"
                        >
                          {item.lessonReference}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}

