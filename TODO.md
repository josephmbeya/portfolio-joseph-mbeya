## TODO for Portfolio Website

### Overview

**Tech Stack:**
- **Framework**: Next.js (canary version) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (alpha)
- **Content**: MDX for blog posts
- **Font**: Geist Sans and Mono
- **Analytics**: Vercel Analytics and Speed Insights
- **Package Manager**: pnpm

### Project Structure
```
portfolio-Joseph-mbeya/
├── app/
│   ├── blog/
│   │   ├── posts/           # MDX blog posts
│   │   │   ├── spaces-vs-tabs.mdx
│   │   │   ├── static-typing.mdx
│   │   │   └── vim.mdx
│   │   ├── [slug]/          # Dynamic blog post pages
│   │   └── utils.ts         # Blog utilities
│   ├── components/
│   │   ├── nav.tsx          # Navigation component
│   │   ├── posts.tsx        # Blog posts listing
│   │   ├── footer.tsx       # Footer component
│   │   └── mdx.tsx          # MDX components
│   ├── og/                  # Open Graph images
│   ├── rss/                 # RSS feed
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── global.css           # Global styles
└── Configuration files...
```

### Key Features
- ✅ Responsive design with dark/light mode support
- ✅ SEO optimized (sitemap, robots.txt, JSON-LD schema)
- ✅ RSS feed for blog posts
- ✅ Dynamic Open Graph images
- ✅ Syntax highlighting for code
- ✅ Blog with MDX support
- ✅ Performance analytics

### Current Content
- Homepage with a brief intro about being a "Vim enthusiast and tab advocate"
- Three blog posts covering:
  - Spaces vs Tabs
  - Static Typing
  - Vim

### Navigation
- Home
- Blog
- Deploy (links to Vercel template)

---

### Next Steps
- ✅ Update personal information on the homepage
- ✅ Update metadata and SEO information
- 🔄 Add new blog posts
- 🔄 Modify styling or layout
- 🔄 Add new sections (projects, about, contact, etc.)
- 🔄 Deploy the site

### Completed Tasks
- Updated homepage title to "Joseph Mbeya"
- Updated personal description with professional intro
- Updated metadata titles and descriptions for SEO
- Updated OpenGraph information for social media sharing

### In Progress
- Personal information updates

