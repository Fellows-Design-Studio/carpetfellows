import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CarpetFellows | Matot ja sisustus - ystävällisesti",
    template: "%s | CarpetFellows",
  },
  description: "Laadukkaat skandinaaviset matot ja sisustustuotteet. Tutustu valikoimaamme ja löydä täydellinen matto kotiisi.",
  keywords: ["matot", "sisustus", "skandinaavinen", "villamatot", "ryijyt", "Suomi"],
  authors: [{ name: "CarpetFellows" }],
  creator: "CarpetFellows",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://carpetfellows.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "/",
    siteName: "CarpetFellows",
    title: "CarpetFellows | Matot ja sisustus - ystävällisesti",
    description: "Laadukkaat skandinaaviset matot ja sisustustuotteet. Tutustu valikoimaamme ja löydä täydellinen matto kotiisi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarpetFellows | Matot ja sisustus - ystävällisesti",
    description: "Laadukkaat skandinaaviset matot ja sisustustuotteet.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
