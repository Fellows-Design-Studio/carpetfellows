export interface SanityImage {
  url: string;
  alt?: string;
}

export interface Slug {
  current: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: Slug;
  description?: string;
  image?: SanityImage;
  productCount?: number;
}

export interface Product {
  _id: string;
  name: string;
  slug: Slug;
  price: number;
  salePrice?: number;
  images?: SanityImage[];
  description?: string;
  material?: string;
  size?: string;
  color?: string;
  stock: number;
  category?: Category;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  _createdAt: string;
}

export interface Author {
  name: string;
  image?: string;
  bio?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: Slug;
  content?: any; // Portable Text
  excerpt?: string;
  featuredImage?: SanityImage;
  author?: Author;
  publishedAt: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CheckoutSession {
  id: string;
  url: string;
}
