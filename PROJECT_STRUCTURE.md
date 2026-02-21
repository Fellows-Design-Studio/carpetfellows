# CarpetFellows E-commerce Project Structure

## Overview
Complete Next.js 14 e-commerce website for Scandinavian rugs and interior design store.

## Project Structure

```
carpetfellows/
├── README.md                          # Main project documentation
├── my-app/                            # Next.js application
│   ├── README.md                      # App-specific documentation
│   ├── package.json                   # Dependencies
│   ├── tsconfig.json                  # TypeScript config
│   ├── next.config.js                 # Next.js config
│   ├── tailwind.config.ts             # Tailwind CSS config
│   ├── components.json                # shadcn/ui config
│   ├── .env.local.example             # Environment variables template
│   │
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                 # Root layout with providers
│   │   ├── page.tsx                   # Homepage
│   │   ├── globals.css                # Global styles + brand colors
│   │   ├── sitemap.ts                 # Dynamic sitemap
│   │   ├── robots.ts                  # Robots.txt
│   │   │
│   │   ├── products/                  # Product listing page
│   │   │   └── page.tsx
│   │   │
│   │   ├── product/                   # Product detail page
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── blog/                      # Blog pages
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── checkout/                  # Checkout flow
│   │   │   ├── page.tsx
│   │   │   ├── success/
│   │   │   │   └── page.tsx
│   │   │   └── cancel/
│   │   │       └── page.tsx
│   │   │
│   │   ├── about/                     # Info pages
│   │   │   └── page.tsx
│   │   ├── shipping/
│   │   │   └── page.tsx
│   │   ├── returns/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   │   └── api/                       # API routes
│   │       ├── checkout/
│   │       │   └── route.ts           # Stripe checkout session
│   │       ├── webhooks/
│   │       │   └── stripe/
│   │       │       └── route.ts       # Stripe webhook handler
│   │       └── revalidate/
│   │           └── route.ts           # Sanity cache revalidation
│   │
│   ├── components/                    # React components
│   │   ├── providers.tsx              # App providers wrapper
│   │   │
│   │   ├── ui/                        # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── sonner.tsx
│   │   │   └── label.tsx
│   │   │
│   │   ├── layout/                    # Layout components
│   │   │   ├── header.tsx             # Site header with navigation
│   │   │   ├── footer.tsx             # Site footer
│   │   │   ├── cookie-banner.tsx      # GDPR cookie consent
│   │   │   └── search-dialog.tsx      # Product search modal
│   │   │
│   │   ├── home/                      # Homepage sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── categories-grid.tsx
│   │   │   ├── featured-products.tsx
│   │   │   └── newsletter-section.tsx
│   │   │
│   │   ├── product/                   # Product components
│   │   │   ├── product-card.tsx
│   │   │   ├── product-details.tsx
│   │   │   ├── product-grid.tsx
│   │   │   └── product-filters.tsx
│   │   │
│   │   ├── cart/                      # Cart components
│   │   │   ├── cart-provider.tsx
│   │   │   └── cart-sheet.tsx
│   │   │
│   │   └── blog/                      # Blog components
│   │       └── blog-post-card.tsx
│   │
│   ├── lib/                           # Utilities
│   │   ├── utils.ts                   # Helper functions (cn)
│   │   ├── sanity/                    # Sanity integration
│   │   │   ├── client.ts              # Sanity client setup
│   │   │   └── queries.ts             # GROQ queries
│   │   └── stripe/                    # Stripe integration
│   │       └── stripe.ts              # Stripe client setup
│   │
│   ├── store/                         # Zustand stores
│   │   └── cart.ts                    # Shopping cart store
│   │
│   └── types/                         # TypeScript types
│       └── sanity.ts                  # Sanity document types
│
└── sanity/                            # Sanity CMS Studio
    ├── README.md
    ├── package.json
    ├── tsconfig.json
    ├── .eslintrc
    ├── sanity.config.ts               # Sanity configuration
    └── schemas/                       # Document schemas
        ├── index.ts
        ├── product.ts                 # Product schema
        ├── category.ts                # Category schema
        ├── blogPost.ts                # Blog post schema
        ├── author.ts                  # Author schema
        └── siteSettings.ts            # Site settings schema
```

## Brand Colors
- Warm Beige: `#F5F0E8` (CSS: `hsl(40, 33%, 94%)`)
- Terracotta: `#C65D3B` (CSS: `hsl(14, 55%, 50%)`)
- Dark Green: `#2D4739` (CSS: `hsl(150, 23%, 23%)`)

## Features
- ✅ Next.js 14 App Router with TypeScript
- ✅ Tailwind CSS with custom brand colors
- ✅ Sanity CMS for content management
- ✅ Stripe Checkout for payments
- ✅ Responsive mobile-first design
- ✅ Shopping cart with localStorage persistence
- ✅ Product search
- ✅ Newsletter signup
- ✅ Blog section
- ✅ Cookie banner (GDPR compliant)
- ✅ Dynamic sitemap.xml
- ✅ robots.txt
- ✅ Schema.org Product markup
- ✅ Google Analytics 4 ready
- ✅ Open Graph tags
- ✅ SEO optimized

## Setup Instructions

1. **Install dependencies:**
   ```bash
   cd my-app
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your credentials
   ```

3. **Set up Sanity CMS:**
   ```bash
   cd ../sanity
   npm install
   npx sanity init
   npx sanity deploy
   ```

4. **Run development server:**
   ```bash
   cd ../my-app
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Environment Variables

### Next.js App (.env.local)
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
SANITY_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://carpetfellows.com
```

### Sanity Studio
```
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```
