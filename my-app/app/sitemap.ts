import type { MetadataRoute } from "next";
import { getProducts, getBlogPosts, getCategories } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carpetfellows.com";

  // Static pages
  const staticPages = [
    "",
    "/products",
    "/blog",
    "/about",
    "/shipping",
    "/returns",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic product pages
  const products = await getProducts();
  const productPages = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug.current}`,
    lastModified: new Date(product._createdAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Dynamic blog pages
  const posts = await getBlogPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Dynamic category pages
  const categories = await getCategories();
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/products?category=${category.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages, ...categoryPages];
}
