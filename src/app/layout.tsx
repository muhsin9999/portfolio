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
  title: "Mustapha Muhsin -- AI & Backend Engineer",
  description:
    "I build the backend systems behind AI products -- generation engines, billing infrastructure, and cloud architectures that ship to real users.",
  keywords: [
    "AI Engineer",
    "Backend Engineer",
    "TypeScript",
    "Python",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Mustapha Muhsin" }],
  openGraph: {
    title: "Mustapha Muhsin -- AI & Backend Engineer",
    description:
      "I build the backend systems behind AI products -- generation engines, billing infrastructure, and cloud architectures.",
    type: "website",
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
