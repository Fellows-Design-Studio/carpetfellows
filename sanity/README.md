# Sanity CMS

This folder contains the Sanity CMS configuration and schemas for CarpetFellows.

## Setup

1. Navigate to the sanity folder:
```bash
cd sanity
```

2. Install dependencies:
```bash
npm install
```

3. Initialize Sanity (if not already done):
```bash
npx sanity@latest init
```

4. Start the Sanity Studio:
```bash
npm run dev
```

## Schema Types

### Product
- Name, slug, price, salePrice
- Images (gallery)
- Description (Portable Text)
- Material, size, color, stock
- Category
- SEO meta fields

### Category
- Name, slug
- Description
- Image

### Blog Post
- Title, slug
- Content (Portable Text)
- Featured image
- Author
- Published date
- SEO meta fields

### Site Settings
- Store name
- Logo
- Contact information
- Social links
- SEO defaults

## Deployment

Deploy the Sanity Studio:
```bash
npx sanity deploy
```

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
SANITY_WEBHOOK_SECRET=your_webhook_secret
```
