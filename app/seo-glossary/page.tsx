import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/seperator"

type GlossaryTerm = {
  term: string
  definition: string
}

type GlossarySection = {
  letter: string
  terms: GlossaryTerm[]
}

const glossaryData: GlossarySection[] = [
  {
    letter: "A",
    terms: [
      {
        term: "A/B testing",
        definition: "A/B testing is a method used to compare two versions of a marketing campaign, webpage or app against each other to determine which one performs better. It involves showing two variants, A and B, to users at random and collecting data on their performance. This helps marketers make informed decisions based on data-driven insights."
      },
      {
        term: "Above the fold",
        definition: "The term \"above the fold\" refers to the portion of a webpage that is visible without scrolling. Originating from newspaper design, it now plays a crucial role in web design and SEO, as it affects initial user impressions and engagement."
      },
      {
        term: "Absolute link",
        definition: "Absolute link is a full URL containing all necessary information to locate a particular webpage, starting from the protocol (http or https), domain, and path. Unlike a relative link, it provides a complete path and is often used in SEO to avoid broken links when the webpage is moved or copied."
      },
      {
        term: "Access Log",
        definition: "Access log is a file that records all requests made to a server, including details such as timestamp, IP address, request method, and user agent. Analyzing access logs can provide valuable insights into website traffic, user behavior, and potential security threats."
      },
      {
        term: "Affiliate link",
        definition: "Affiliate link is a specific URL containing an identifier for a particular affiliate marketer used to track their performance and sales. When users click on these links and make purchases, the affiliate earns a commission."
      },
      {
        term: "Algorithm",
        definition: "Algorithm in the context of search engines refers to a set of rules and calculations that determine how web pages are ranked and displayed in search results. Search engines like Google use complex algorithms to analyze multiple factors, including keyword relevance, site authority, user engagement, and many more, to assess the quality and relevance of web pages for specific queries."
      },
      {
        term: "Alt text",
        definition: "Alt text is a textual description of images used in HTML code to improve accessibility for visually impaired users and enhance image SEO. It helps search engines understand the context of an image, contributing to the website's search ranking."
      },
      {
        term: "AMP",
        definition: "Accelerated Mobile Pages (AMP) is an open-source framework designed to improve the load time of web pages on mobile devices. It simplifies the HTML code and restricts the use of JavaScript, ensuring that pages load quickly and efficiently."
      },
      {
        term: "Anchor text",
        definition: "Anchor text is the clickable text in a hyperlink, often styled differently using underlining or coloring. It provides context about the linked page to both users and search engines and can influence SEO rankings when employed with relevant, keyword-focused text."
      },
      {
        term: "Artificial Intelligence (AI)",
        definition: "Artificial Intelligence (AI) refers to machines or software that mimic human intelligence to perform tasks such as problem-solving, decision-making, and language processing. In the realm of SEO, AI plays a role in search engine algorithms, content generation, and personalized user experiences."
      },
      {
        term: "Authoritativeness",
        definition: "Authoritativeness refers to the degree of trust and credibility assigned to a website or piece of content, often based on its expertise and the reliability of its information. It's a crucial element of the E-A-T (Expertise, Authoritativeness, Trustworthiness) framework in SEO."
      },
      {
        term: "Auto-generated content",
        definition: "Auto-generated content is content created by automated processes or algorithms with minimal to no human involvement. While it can be efficient for generating large volumes of content quickly, it often lacks depth, quality, and uniqueness, which can affect SEO negatively if not managed properly."
      }
    ]
  },
  {
    letter: "B",
    terms: [
      {
        term: "B2B",
        definition: "Business-to-Business (B2B) refers to businesses that sell products or services directly to other businesses rather than to consumers. In the context of SEO, B2B strategies often focus on targeted content, long sales cycles, and building authority within industry-specific niches."
      },
      {
        term: "B2C",
        definition: "Business-to-Consumer (B2C) describes businesses that sell products or services directly to consumers. SEO strategies for B2C often emphasize strong brand presence, broad audience engagement, and optimizing for user experience and conversions."
      },
      {
        term: "Backlink",
        definition: "Backlink (also known as inbound link or external link) is a link from one website to another. It serves as a measure of credibility and authority. High-quality backlinks from reputable websites can significantly impact a site's search engine rankings, making link-building a crucial SEO strategy."
      },
      {
        term: "Barnacle SEO",
        definition: "Barnacle SEO is a strategy where a business 'attaches' itself to larger, more authoritative platforms to improve its online visibility and rank higher in search results. By leveraging the authority of high-traffic sites, businesses can gain exposure and generate leads more effectively."
      },
      {
        term: "Bing Webmaster Tools",
        definition: "Bing Webmaster Tools is a free service by Microsoft that provides data, reports, and insights to help website owners optimize their sites for Bing search results. It includes features for tracking keyword performance, crawl errors, and submitting sitemaps, helping enhance a site's SEO."
      },
      {
        term: "Black hat SEO",
        definition: "Black hat SEO refers to unethical practices aimed at increasing a site's search engine ranking, often violating search engine guidelines. Techniques like keyword stuffing, cloaking, and link schemes can lead to penalties or bans by search engines like Google."
      },
      {
        term: "Bounce rate",
        definition: "Bounce rate is the percentage of visitors who enter a website and then leave without interacting with additional pages. A high bounce rate might indicate issues with content relevance, site usability, or load times, affecting both user experience and SEO performance."
      },
      {
        term: "Branded keyword",
        definition: "Branded keyword includes a brand's name and is used to attract users specifically searching for information about that brand. Optimizing for branded keywords can improve a website's visibility and help maintain brand presence in search results."
      },
      {
        term: "Breadcrumb",
        definition: "Breadcrumbs are a navigational aid that shows users their current location within a website's hierarchy, enhancing site usability. They also provide search engines with a better understanding of a site's structure, potentially improving SEO performance."
      },
      {
        term: "Broken Link",
        definition: "Broken link, or dead link, is a hyperlink that no longer leads to its intended destination, resulting in a 404 error. Regularly checking and fixing broken links is crucial for maintaining a site's credibility and ensuring a smooth user experience."
      },
      {
        term: "Browser",
        definition: "Browser is a software application used to access and navigate the internet. Popular browsers include Google Chrome, Mozilla Firefox, and Microsoft Edge. Website developers must ensure their sites are compatible across different browsers to provide consistent user experiences."
      },
      {
        term: "Business directory",
        definition: "Business directory is a website or printed listing that provides information on businesses within different categories. Ensuring a business is listed accurately in relevant directories can enhance local SEO and improve online visibility."
      }
    ]
  },
  {
    letter: "C",
    terms: [
      {
        term: "Cache",
        definition: "Cache is a storage layer that temporarily holds data to speed up future requests. When a webpage is cached, it allows browsers to load it more quickly without needing to fetch the same resources repeatedly from the server, improving user experience."
      },
      {
        term: "Canonical URL",
        definition: "Canonical URL is the preferred web address when multiple URLs have similar content. By specifying a canonical URL, webmasters help search engines understand which version of a page should be indexed, preventing duplicate content issues."
      },
      {
        term: "Carousel",
        definition: "Carousel is an interactive element on web pages where multiple pieces of content, such as images or articles, can be cycled through, usually by clicking arrows or dots. Carousels can make websites more dynamic and showcase multiple items in a small space."
      },
      {
        term: "Category page",
        definition: "Category page organizes content into specific groups to facilitate easier navigation. These pages are particularly important in e-commerce and blogging for grouping similar products or articles, thereby improving user experience and search visibility."
      },
      {
        term: "ccTLD",
        definition: "Country Code Top-Level Domain (ccTLD) is a top-level domain used or reserved for a country, sovereign state, or dependent territory. Examples include .uk for the United Kingdom and .de for Germany. Using ccTLDs can enhance local SEO by signaling to search engines which geographic region the site targets."
      },
      {
        term: "CDN",
        definition: "Content Delivery Network (CDN) is a network of servers distributed geographically to deliver web content more efficiently to users. By caching content closer to the user's location, CDNs reduce latency and load times, enhancing website performance and user experience."
      },
      {
        term: "Citation",
        definition: "In SEO, a citation refers to a mention of a business's name, address, and phone number (NAP) on other websites or local directories. Citations are crucial for local SEO as they help establish the presence and authority of a business online."
      },
      {
        term: "Click depth",
        definition: "Click depth refers to the number of clicks required to reach a particular page from the home page of a website. Lower click depth generally improves usability and can aid SEO by making it easier for both users and search engines to find content."
      },
      {
        term: "Click-through rate (CTR)",
        definition: "Click-Through Rate (CTR) is a metric that measures the ratio of users who click on a specific link to the total number of users who viewed the page or ad. It's a vital performance indicator in online advertising, influencing ad rankings and cost-efficiency."
      },
      {
        term: "Cloaking",
        definition: "Cloaking is a black hat SEO technique that involves presenting different content to search engines than what is visible to users. It's intended to deceive search engines but is against their guidelines and can lead to penalties if detected."
      },
      {
        term: "CMS",
        definition: "Content Management System (CMS) is software that enables users to create, manage, and modify content on a website without needing to have specialized technical knowledge. Popular CMS platforms include WordPress, Joomla, and Drupal, supporting dynamic content management and SEO optimization."
      },
      {
        term: "Content Marketing",
        definition: "Content marketing involves creating and distributing valuable, relevant content to attract and engage a target audience. It aims to establish authority, foster relationships, and drive profitable customer actions, forming a core component of modern SEO strategies."
      },
      {
        term: "Conversion",
        definition: "Conversion is a desired action performed by a user on a website, such as making a purchase or signing up for a newsletter. Tracking conversions is critical for measuring the success of digital marketing campaigns and optimizing strategies."
      },
      {
        term: "Core Web Vitals",
        definition: "Core Web Vitals are a set of metrics introduced by Google to evaluate the user experience of a page, focusing on loading performance, interactivity, and visual stability. Optimizing for Core Web Vitals is crucial for search rankings and user satisfaction."
      },
      {
        term: "Crawl budget",
        definition: "Crawl budget is the number of pages a search engine will crawl on a site within a given timeframe. Managing crawl budget ensures that important pages are indexed, particularly on large sites, enhancing overall SEO performance."
      },
      {
        term: "Crawler",
        definition: "Crawler (or bot) is an automated program used by search engines to discover and index web content. Crawlers systematically browse the internet to gather information, contributing to search engine indexes used for ranking."
      }
    ]
  },
  {
    letter: "D",
    terms: [
      {
        term: "De-indexed",
        definition: "De-indexing occurs when a page or site is removed from a search engine's index, meaning it won't appear in search results. This can happen due to violations of search engine guidelines, server errors, or a webmaster's request."
      },
      {
        term: "Disavow",
        definition: "To disavow links means to tell search engines to ignore certain inbound links to your website when assessing its SEO value. This is typically done to avoid penalties from low-quality or spammy backlinks that could harm your ranking."
      },
      {
        term: "DNS",
        definition: "Domain Name System (DNS) is a system that translates human-friendly domain names (e.g., www.example.com) into IP addresses recognizable by computers. It acts like a phonebook for the internet, allowing browsers to load internet resources."
      },
      {
        term: "Domain Authority",
        definition: "Domain Authority (DA) is a metric developed to predict how well a website will rank on search engines. It scores domains on a scale from 1 to 100, with higher scores indicating greater potential for high search engine rankings."
      },
      {
        term: "Doorway page",
        definition: "Doorway page is designed to rank well for specific search queries to lead users to a different, more relevant page. These pages are often considered manipulative and can lead to penalties from search engines if used improperly."
      },
      {
        term: "Duplicate content",
        definition: "Duplicate content consists of substantial blocks of content that are identical or similar across different pages or sites. It can confuse search engines and affect rankings if not handled properly, often requiring canonicalization or redirects."
      },
      {
        term: "Dynamic content",
        definition: "Dynamic content is content that changes based on user behavior, preferences, or other parameters. It personalizes user experiences by displaying relevant and targeted information, often enhancing engagement and conversion rates."
      }
    ]
  },
  {
    letter: "E",
    terms: [
      {
        term: "E-A-T",
        definition: "E-A-T (Expertise, Authoritativeness, Trustworthiness) is an acronym that represents three key factors Google considers in evaluating the quality and credibility of content. It's crucial for SEO, especially for YMYL (Your Money or Your Life) pages."
      },
      {
        term: "E-commerce SEO",
        definition: "E-commerce SEO is the practice of optimizing an online store to improve its visibility and rankings in search engine results pages. It involves strategies such as keyword optimization, product page enhancements, and technical SEO audits."
      },
      {
        term: "Engagement",
        definition: "Engagement refers to the interactions that users have with a website or content, such as comments, likes, shares, time spent on a page, and clicks. High levels of engagement generally indicate that the content is resonating with the audience."
      },
      {
        term: "Evergreen content",
        definition: "Evergreen content is content that remains relevant and valuable to readers over time, regardless of when it was published. It often includes guides, tutorials, and FAQs that consistently attract traffic and provide lasting value."
      }
    ]
  },
  {
    letter: "F",
    terms: [
      {
        term: "Faceted navigation",
        definition: "Faceted navigation is a system that allows users to filter and refine search results on a website through various attributes, such as size, color, or price. It enhances user experience but must be handled carefully to avoid SEO issues like duplicate content."
      },
      {
        term: "Favicon",
        definition: "Favicon is a small icon associated with a website that typically appears in the browser tab, bookmarks bar, and URL bar. It's a visual representation of the site, helping users quickly identify and navigate to it among multiple open tabs or saved bookmarks."
      },
      {
        term: "Featured snippet",
        definition: "Featured snippet is a summary answer to a user query displayed at the top of Google's search results, above the regular listings. It is extracted from a web page and is sometimes referred to as \"position zero\" because of its prominent placement."
      },
      {
        term: "First Input Delay",
        definition: "First Input Delay is a performance metric that measures the time from when a user first interacts with a page (e.g., clicking a link or button) to when the browser is able to respond to that interaction. It's crucial for assessing user experience, particularly for pages that rely heavily on interactivity."
      },
      {
        term: "Footer",
        definition: "Footer is the bottom section of a web page, often containing navigation links, contact information, copyright notices, and additional resources or policies. While not the primary focus for SEO, a well-optimized footer can enhance usability and site structure."
      }
    ]
  },
  {
    letter: "G",
    terms: [
      {
        term: "Google Algorithm",
        definition: "Google Algorithm is a complex system used to retrieve data from its search index and instantly deliver the best possible results for a query. The algorithm uses a combination of ranking factors to determine the relevance and importance of web pages."
      },
      {
        term: "Google Analytics",
        definition: "Google Analytics is a web analytics service that tracks and reports website traffic. It provides insights into user behavior, demographics, and engagement, allowing marketers to assess the effectiveness of their strategies."
      },
      {
        term: "Google My Business",
        definition: "Google My Business is a free tool that allows businesses to manage their online presence across Google, including Search and Maps. It helps promote local businesses and provides essential information such as location, services, and reviews."
      },
      {
        term: "Google Search Console",
        definition: "Google Search Console is a free service provided by Google that allows webmasters to monitor and maintain their site's presence in Google Search results. It offers insights into performance, indexing status, and user experience issues."
      }
    ]
  },
  {
    letter: "H",
    terms: [
      {
        term: "Header tag",
        definition: "Header tag refers to HTML markup used to define headings on a web page, with six levels ranging from h1 to h6. The h1 tag is typically used for the main title, while h2 to h6 are used for subheadings. Proper use of header tags helps search engines understand the structure of content."
      },
      {
        term: "HTTPS",
        definition: "HTTPS (HyperText Transfer Protocol Secure) is an extension of HTTP that adds a layer of security through encryption. It protects the integrity and confidentiality of data exchanged between the user's browser and the web server. Websites using HTTPS are considered more secure, which can positively impact user trust and SEO rankings."
      },
      {
        term: "Hreflang",
        definition: "Hreflang is an HTML attribute used to specify the language and geographic targeting of a webpage. It informs search engines about the linguistic and regional variations of the content, helping them deliver the most relevant version to users based on their language and location."
      }
    ]
  },
  {
    letter: "I",
    terms: [
      {
        term: "Image SEO",
        definition: "Image SEO refers to the practice of optimizing images on a website to improve visibility in search engine results. This involves using descriptive filenames, alt text, captions, and appropriate sizing. Proper image SEO enhances user experience and can drive additional traffic through image search results."
      },
      {
        term: "Indexing",
        definition: "Indexing is the process by which search engines crawl and store information from web pages in their databases. An indexed page is one that has been analyzed and added to the search engine's index, making it eligible to appear in search results."
      },
      {
        term: "Internal link",
        definition: "Internal link is a hyperlink that points to another page within the same website. Internal linking helps establish information hierarchy, enhances site navigation, and distributes page authority among pages. Proper use of internal links can improve user experience and contribute to better search engine optimization."
      }
    ]
  },
  {
    letter: "J",
    terms: [
      {
        term: "JavaScript",
        definition: "JavaScript is a high-level, dynamic programming language commonly used in web development to create interactive and dynamic content on websites. It allows developers to implement complex features such as animations, form validations, and asynchronous content loading. Understanding JavaScript is important for SEO, as search engines need to crawl and index dynamic content presented via JavaScript."
      },
      {
        term: "JSON-LD",
        definition: "JSON-LD (JavaScript Object Notation for Linked Data) is a format for encoding Linked Data using JSON. It is commonly used for adding structured data to a webpage, which helps search engines understand and interpret the content better. By using JSON-LD, website owners can improve their chances of earning rich snippets in search results, thereby enhancing visibility and click-through rates."
      }
    ]
  },
  {
    letter: "K",
    terms: [
      {
        term: "Keyword",
        definition: "Keyword is a specific word or phrase that users enter into search engines when looking for information. Keywords are essential for SEO as they help search engines understand the content of web pages and match it with user queries. Effective keyword targeting can increase visibility and drive traffic to a website."
      },
      {
        term: "Keyword density",
        definition: "Keyword density is the percentage of times a specific keyword appears in a piece of content compared to the total number of words. It is used to measure how well a keyword is incorporated into the text. However, excessively high keyword density can lead to keyword stuffing, which can negatively affect SEO and readability."
      },
      {
        term: "Keyword research",
        definition: "Keyword research is the practice of identifying and analyzing search terms that users enter into search engines. This process helps digital marketers discover relevant keywords and understand their potential traffic volume, competition, and search intent. Effective keyword research is the foundation of a successful SEO strategy."
      }
    ]
  },
  {
    letter: "L",
    terms: [
      {
        term: "Landing page",
        definition: "Landing page is a standalone web page specifically designed for a marketing or advertising campaign. It is where visitors \"land\" after clicking on a link from an email, ad, or other online sources. The primary goal of a landing page is to convert visitors into leads or customers by prompting them to take a specific action."
      },
      {
        term: "Link building",
        definition: "Link building is the process of acquiring hyperlinks from other websites to your own. It is a crucial SEO strategy, as links from authoritative sites enhance your site's credibility and visibility in search engine results. Successful link building involves creating valuable content that others want to link to and establishing relationships with other webmasters."
      },
      {
        term: "Local SEO",
        definition: "Local SEO is the practice of optimizing a website and its online presence to increase visibility in local search results. This includes optimizing for local queries, managing local business listings, and implementing local schema markup. Local SEO is crucial for businesses that serve a specific geographic area, as it helps them attract more local customers through search engines and online directories."
      }
    ]
  },
  {
    letter: "M",
    terms: [
      {
        term: "Meta description",
        definition: "Meta description is an HTML attribute that summarizes the content of a web page. It is displayed in search engine result pages (SERPs) beneath the page title and URL. While meta descriptions do not directly influence search rankings, a well-crafted meta description can improve click-through rates by enticing users to click on the link."
      },
      {
        term: "Mobile-first indexing",
        definition: "Mobile-First Indexing is a method used by search engines, particularly Google, to prioritize the mobile version of a website when indexing and ranking content. Instead of primarily indexing the desktop version, Google crawls and assesses the mobile version of a site, as more users now access the web through mobile devices."
      },
      {
        term: "Mobile SEO",
        definition: "Mobile SEO refers to the practice of optimizing a website for mobile devices to ensure that it provides a good user experience on smartphones and tablets. This includes responsive design, fast loading times, mobile-friendly navigation, and optimized content for smaller screens. With the increasing use of mobile devices for web browsing, search engines like Google prioritize mobile-friendly sites in their rankings."
      }
    ]
  },
  {
    letter: "N",
    terms: [
      {
        term: "NAP",
        definition: "NAP stands for Name, Address, Phone Number. It is a critical factor in local SEO, as consistent and accurate NAP information across your website and online directories helps search engines understand your business's location and contact details. Inconsistent NAP citations can lead to confusion for both users and search engines, negatively impacting local search visibility."
      },
      {
        term: "Natural link",
        definition: "Natural link (or editorial link) is a type of backlink that is acquired organically, without the website owner having to reach out or seek the link explicitly. These links are typically given by other reputable sites when they find your content valuable and relevant to their audience. Natural links are highly regarded in SEO as they indicate authority and can significantly enhance a website's credibility and search rankings."
      },
      {
        term: "NoFollow",
        definition: "NoFollow Attribute is a value that can be added to a hyperlink to instruct search engines not to follow that link or pass any link equity or authority to the linked page. This is commonly used for links in user-generated content, advertisements, or other scenarios where the linking party does not want to endorse the linked content."
      }
    ]
  },
  {
    letter: "O",
    terms: [
      {
        term: "Off-page optimization",
        definition: "Off-page optimization refers to SEO activities performed outside of a website to improve its ranking in search engine results. This includes activities such as link building, social media marketing, and online reputation management. Off-page optimization helps establish a website's authority and credibility, influencing its search engine ranking."
      },
      {
        term: "On-page optimization",
        definition: "On-page optimization refers to SEO activities performed directly on a website to improve its ranking in search engine results. This includes activities such as keyword optimization, content creation, and technical SEO. On-page optimization focuses on making a website more appealing and relevant to search engines."
      },
      {
        term: "Organic search",
        definition: "Organic search refers to unpaid search results displayed by search engines based on relevance and ranking algorithms. Unlike paid advertising, organic search results are earned through SEO efforts and are not directly purchased. Organic search traffic is a valuable source of website visitors, as it indicates genuine interest in the content."
      }
    ]
  },
  {
    letter: "P",
    terms: [
      {
        term: "PageRank",
        definition: "PageRank is an algorithm developed by Google to rank web pages in search results. It is based on the number and quality of backlinks pointing to a page, with more backlinks from authoritative sources resulting in a higher PageRank. While Google no longer publicly shares PageRank scores, the underlying principles remain a significant factor in search engine rankings."
      },
      {
        term: "PPC (Pay-Per-Click)",
        definition: "PPC (Pay-Per-Click) is an online advertising model where advertisers pay a fee each time their ad is clicked. PPC advertising is commonly used in search engines and social media platforms to drive traffic to websites. While PPC is a paid advertising method, understanding SEO principles can help optimize PPC campaigns for better results."
      },
      {
        term: "Primary keyword",
        definition: "Primary keyword is the main keyword phrase that a piece of content is optimized for. It is the most important keyword for the page and is often used in the title, headings, and body text. Choosing the right primary keyword is crucial for effective SEO."
      }
    ]
  },
  {
    letter: "Q",
    terms: [
      {
        term: "Query",
        definition: "Query is a search term or phrase entered by a user into a search engine. Understanding user queries is essential for SEO, as it helps marketers create content that addresses user needs and intent."
      },
      {
        term: "Query Destructuring",
        definition: "Query Destructuring is a technique used to break down complex search queries into smaller, more manageable parts. This helps search engines understand the nuances of a user's search intent and deliver more relevant results. It's a crucial aspect of advanced SEO strategies."
      }
    ]
  },
  {
    letter: "R",
    terms: [
      {
        term: "RankBrain",
        definition: "RankBrain is a Google AI system that helps process search queries and understand their meaning. It plays a significant role in Google's search algorithm, helping to deliver more relevant results to users, even for complex or unusual queries."
      },
      {
        term: "Ranking",
        definition: "Ranking refers to the position of a web page in search engine results pages (SERPs). Higher rankings mean greater visibility and more traffic. SEO aims to improve a website's ranking for relevant keywords."
      },
      {
        term: "Responsive design",
        definition: "Responsive design is a web design approach that ensures a website adapts to different screen sizes and devices. Responsive design is crucial for mobile SEO, as search engines prioritize mobile-friendly websites."
      }
    ]
  },
  {
    letter: "S",
    terms: [
      {
        term: "Schema markup",
        definition: "Schema markup is a type of structured data that helps search engines understand the content of a web page. It uses vocabulary from schema.org to provide additional context, improving the chances of earning rich snippets in search results."
      },
      {
        term: "Search engine optimization (SEO)",
        definition: "Search engine optimization (SEO) is the practice of improving a website's visibility in search engine results pages (SERPs). It involves various techniques to increase organic traffic and improve rankings."
      },
      {
        term: "Sitemap",
        definition: "Sitemap is an XML file that provides search engines with a list of a website's pages. Sitemaps help search engines discover and index content more effectively."
      }
    ]
  },
  {
    letter: "T",
    terms: [
      {
        term: "Technical SEO",
        definition: "Technical SEO refers to the technical aspects of a website that affect its search engine ranking. This includes factors such as website speed, mobile-friendliness, and site structure. Technical SEO is crucial for ensuring a website is easily crawlable and indexable by search engines."
      },
      {
        term: "Title tag",
        definition: "Title tag is an HTML element that specifies the title of a web page. The title tag is displayed in search engine results pages (SERPs) and is a crucial element for SEO. A well-crafted title tag can improve click-through rates and rankings."
      },
      {
        term: "Trust Flow",
        definition: "Trust Flow is a metric that measures the trustworthiness of a website based on its backlink profile. It assesses the quality and authority of the websites linking to a particular site. High Trust Flow suggests a trustworthy website, which can positively influence SEO rankings."
      }
    ]
  },
  {
    letter: "U",
    terms: [
      {
        term: "URL",
        definition: "URL (Uniform Resource Locator) is the address of a web page. URLs are important for SEO, as they can influence how search engines crawl and index content. Well-structured URLs can improve SEO performance."
      },
      {
        term: "User experience (UX)",
        definition: "User experience (UX) refers to the overall experience a user has when interacting with a website. Good UX is crucial for SEO, as search engines prioritize websites that provide a positive user experience."
      }
    ]
  },
  {
    letter: "V",
    terms: [
      {
        term: "Video SEO",
        definition: "Video SEO is the practice of optimizing videos for search engines. This includes using descriptive titles, tags, and descriptions, as well as embedding videos on websites. Video SEO can improve visibility and drive traffic to a website."
      },
      {
        term: "Visual SEO",
        definition: "Visual SEO is the practice of optimizing images and videos for search engines. This includes using descriptive alt text, captions, and titles, as well as optimizing image sizes and formats. Visual SEO can improve visibility in image search results and enhance overall user engagement with visual content."
      },
    ]
  },
  {
    letter: "W",
    terms: [
      {
        term: "Web analytics",
        definition: "Web analytics is the process of collecting and analyzing data about website traffic and user behavior. Web analytics is crucial for optimizing SEO strategies, as it provides valuable insights into website performance."
      },
      {
        term: "White hat SEO",
        definition: "White hat SEO refers to SEO techniques that comply with search engine guidelines. White hat SEO focuses on creating high-quality content and building natural backlinks. White hat SEO is the ethical and sustainable approach to SEO."
      },
      {
        term: "WordPress",
        definition: "WordPress is a popular content management system (CMS) used to create and manage websites. WordPress is widely used for its flexibility and ease of use, and it offers various plugins and themes to enhance SEO."
      }
    ]
  },
  {
    letter: "X",
    terms: [
      {
        term: "XML sitemap",
        definition: "XML sitemap is an XML file that provides search engines with a list of a website's pages. XML sitemaps help search engines discover and index content more effectively."
      },
      {
        term: "X-ray tools",
        definition: "X-ray tools are SEO tools that allow users to search for specific keywords within websites. X-ray tools can be used to identify link-building opportunities and discover relevant content."
      }
    ]
  },
  {
    letter: "Y",
    terms: [
      {
        term: "YMYL (Your Money or Your Life)",
        definition: "YMYL refers to web pages or topics that could potentially impact a person's future happiness, health, financial stability, or safety. Google holds these pages to a higher quality standard because of their potential to affect users' well-being."
      },
      {
        term: "YouTube SEO",
        definition: "YouTube SEO is the practice of optimizing video content on YouTube to rank higher in both YouTube's search results and Google's video search results. This includes optimizing video titles, descriptions, tags, and thumbnails."
      }
    ]
  },
  {
    letter: "Z",
    terms: [
      {
        term: "Zero-click search",
        definition: "Zero-click search refers to a Google search result that answers the user's query directly in the SERP, without requiring the user to click through to a website. While these can provide quick answers for users, they can potentially reduce traffic to websites."
      },
      {
        term: "Z-pattern",
        definition: "Z-pattern is a design concept based on the idea that users tend to scan web pages in a Z-shaped pattern. Understanding this pattern can help in placing important elements like CTAs strategically on a webpage, potentially improving user engagement and conversions."
      }
    ]
  }
]

export default function SEOGlossary() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] text-gray-200 font-sans">
      <ScrollArea className="h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">SEO Glossary</h1>
          {glossaryData.map((section) => (
            <div key={section.letter} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{section.letter}</h2>
              {section.terms.map((term) => (
                <div key={term.term} className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{term.term}</h3>
                  <p className="text-gray-300">{term.definition}</p>
                </div>
              ))}
              <Separator className="my-6 bg-gray-700" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

