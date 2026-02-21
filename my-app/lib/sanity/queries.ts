import { client } from "./client";
import { Product, Category, BlogPost } from "@/types/sanity";

// Check if Sanity is configured
const isConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// GROQ Queries

export const productsQuery = `*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  slug,
  price,
  salePrice,
  "images": images[] {
    "url": asset->url,
    alt
  },
  description,
  material,
  size,
  color,
  stock,
  "category": category-> {
    _id,
    name,
    slug
  },
  featured,
  _createdAt
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  price,
  salePrice,
  "images": images[] {
    "url": asset->url,
    alt
  },
  description,
  material,
  size,
  color,
  stock,
  "category": category-> {
    _id,
    name,
    slug
  },
  seoTitle,
  seoDescription,
  _createdAt
}`;

export const featuredProductsQuery = `*[_type == "product" && featured == true] | order(_createdAt desc)[0...8] {
  _id,
  name,
  slug,
  price,
  salePrice,
  "images": images[] {
    "url": asset->url,
    alt
  },
  material,
  size,
  color,
  stock,
  "category": category-> {
    _id,
    name,
    slug
  }
}`;

export const categoriesQuery = `*[_type == "category"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  "image": image {
    "url": asset->url,
    alt
  },
  "productCount": count(*[_type == "product" && references(^._id)])
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description,
  "image": image {
    "url": asset->url,
    alt
  }
}`;

export const productsByCategoryQuery = `*[_type == "product" && category->slug.current == $category] | order(_createdAt desc) {
  _id,
  name,
  slug,
  price,
  salePrice,
  "images": images[] {
    "url": asset->url,
    alt
  },
  material,
  size,
  color,
  stock,
  "category": category-> {
    _id,
    name,
    slug
  }
}`;

export const searchProductsQuery = `*[_type == "product" && [name, description, material, color] match $search] | order(_createdAt desc) [0...10] {
  _id,
  name,
  slug,
  price,
  salePrice,
  "images": images[] {
    "url": asset->url,
    alt
  },
  material,
  size,
  color,
  stock,
  "category": category-> {
    _id,
    name,
    slug
  }
}`;

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "featuredImage": featuredImage {
    "url": asset->url,
    alt
  },
  "author": author-> {
    name,
    "image": image.asset->url
  },
  publishedAt,
  tags,
  seoTitle,
  seoDescription
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  content,
  excerpt,
  "featuredImage": featuredImage {
    "url": asset->url,
    alt
  },
  "author": author-> {
    name,
    "image": image.asset->url,
    bio
  },
  publishedAt,
  tags,
  seoTitle,
  seoDescription
}`;

// Fetch functions

export async function getProducts(): Promise<Product[]> {
  if (!isConfigured) return [];
  return client.fetch(productsQuery);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!isConfigured) return null;
  return client.fetch(productBySlugQuery, { slug });
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!isConfigured) return [];
  return client.fetch(featuredProductsQuery);
}

export async function getCategories(): Promise<Category[]> {
  if (!isConfigured) return [];
  return client.fetch(categoriesQuery);
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  if (!isConfigured) return null;
  return client.fetch(categoryBySlugQuery, { slug });
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  if (!isConfigured) return [];
  return client.fetch(productsByCategoryQuery, { category });
}

export async function searchProducts(search: string): Promise<Product[]> {
  if (!isConfigured) return [];
  return client.fetch(searchProductsQuery, { search: `*${search}*` });
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isConfigured) return [];
  return client.fetch(blogPostsQuery);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isConfigured) return null;
  return client.fetch(blogPostBySlugQuery, { slug });
}
