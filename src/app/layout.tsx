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
  title: "Mustapha Muhsin -- Full Stack & AI Engineer",
  description:
    "Full-stack engineer building web applications, backend systems, cloud infrastructure, and AI-powered products.",
  keywords: [
    "Full Stack Engineer",
    "React",
    "Next.js",
    "AI Engineer",
    "Backend Engineer",
    "RAG Applications",
    "TypeScript",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Mustapha Muhsin" }],
  openGraph: {
    title: "Mustapha Muhsin -- Full Stack & AI Engineer",
    description:
      "I build complete web products across frontend, backend, and cloud infrastructure.",
    url: "https://mustapahmuhsin.vercel.app/",
    siteName: "Mustapha Muhsin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mustapha Muhsin -- Full Stack & AI Engineer",
    description:
      "I build complete web products across frontend, backend, and cloud infrastructure.",
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
