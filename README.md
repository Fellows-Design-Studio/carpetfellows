# CarpetFellows E-commerce

A modern, production-ready e-commerce website for Scandinavian rugs and interior design.

## Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Payments**: Stripe
- **Hosting**: Vercel

## Brand Colors

- Warm Beige: `#F5F0E8`
- Terracotta: `#C65D3B`
- Dark Green: `#2D4739`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Sanity account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd carpetfellows/my-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your credentials
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Sanity CMS Setup

1. Create a Sanity project:
```bash
npx sanity@latest init
```

2. Copy the project ID and dataset to your `.env.local` file

3. Deploy the Sanity Studio:
```bash
cd sanity
npx sanity deploy
```

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Dashboard
3. Add them to `.env.local`
4. Set up webhook endpoint for production

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Project Structure

```
my-app/
├── app/                    # Next.js App Router
│   ├── (shop)/            # Shop route group
│   │   ├── page.tsx       # Homepage
│   │   ├── products/      # Product listing
│   │   ├── product/       # Product detail
│   │   └── blog/          # Blog section
│   ├── api/               # API routes
│   │   ├── checkout/      # Stripe checkout
│   │   └── revalidate/    # Cache revalidation
│   ├── about/             # About page
│   ├── shipping/          # Shipping info
│   ├── returns/           # Returns policy
│   ├── privacy/           # Privacy policy
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── product/          # Product components
│   ├── cart/             # Cart components
│   └── home/             # Homepage sections
├── lib/                   # Utilities
│   ├── sanity/           # Sanity client & queries
│   ├── stripe/           # Stripe configuration
│   └── utils.ts          # Helper functions
├── sanity/               # Sanity CMS schemas
│   ├── schemas/          # Document schemas
│   └── config.ts         # Sanity configuration
├── types/                # TypeScript types
├── store/                # Zustand stores
└── public/               # Static assets
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Shopping cart with localStorage persistence
- ✅ Product search
- ✅ Newsletter signup
- ✅ Blog section
- ✅ Cookie banner (GDPR compliant)
- ✅ Sitemap.xml generation
- ✅ Schema.org Product markup
- ✅ Google Analytics 4 ready
- ✅ Open Graph tags
- ✅ SEO optimized

## License

MIT
