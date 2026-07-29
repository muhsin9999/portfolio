import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mustapahmuhsin.vercel.app"),
  title: "Mustapha Muhsin -- AI & Backend Engineer",
  description:
    "I build production AI backend systems, agentic loop architectures, and cloud infrastructure.",
  keywords: [
    "AI Engineer",
    "Backend Engineer",
    "Agentic Loops",
    "TypeScript",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Mustapha Muhsin" }],
  openGraph: {
    title: "Mustapha Muhsin -- AI & Backend Engineer",
    description:
      "I build production AI backend systems, agentic loop architectures, and cloud infrastructure.",
    url: "https://mustapahmuhsin.vercel.app/",
    siteName: "Mustapha Muhsin Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mustapha Muhsin -- AI & Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustapha Muhsin -- AI & Backend Engineer",
    description:
      "I build production AI backend systems, agentic loop architectures, and cloud infrastructure.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[var(--bg)] text-[var(--text)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
