import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("fi-FI", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
        <div className="grid md:grid-cols-[300px_1fr] gap-0">
          <div className="relative aspect-[16/10] md:aspect-auto">
            {post.featuredImage ? (
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <span className="text-4xl">✏️</span>
              </div>
            )}
          </div>

          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>

              {post.author && (
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
