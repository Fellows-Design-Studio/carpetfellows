import { Metadata } from "next";
import { getBlogPosts } from "@/lib/sanity/queries";
import { BlogPostCard } from "@/components/blog/blog-post-card";

export const metadata: Metadata = {
  title: "Blogi",
  description: "Sisustusvinkkejä, matto-oppaita ja inspiraatiota CarpetFellows-blogista.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blogi</h1>
          <p className="text-muted-foreground">
            Sisustusvinkkejä, matto-oppaita ja inspiraatiota
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Ei julkaisuja vielä.</p>
          </div>
        )}
      </div>
    </div>
  );
}
