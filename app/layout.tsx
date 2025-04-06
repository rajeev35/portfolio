import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Shaurya Gupta",
  description:
    "A 13-year-old Swift developer, web developer, and middle school student. Winner of the 2024 Swift Student Challenge. Passionate about coding, learning, and building projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Shaurya Gupta, a 13-year-old Swift developer, web developer, and middle school student. Winner of the 2024 Swift Student Challenge. Passionate about coding, learning, and building impactful projects."
        />
        <meta
          name="keywords"
          content="Shaurya Gupta, Swift developer, web development, middle school student, Swift Student Challenge winner, buildspace, teenage programmer"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Shaurya Gupta" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Shaurya Gupta - Swift Developer | Web Developer | Student"
        />
        <meta
          property="og:description"
          content="13-year-old Swift and web developer. Winner of the 2024 Swift Student Challenge."
        />
        <meta property="og:url" content="https://shauryag.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://shauryag.com/screenshot.jpeg"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@madebyshaurya" />
        <meta
          name="twitter:title"
          content="Shaurya Gupta - Swift Developer | Web Developer | Student"
        />
        <meta
          name="twitter:description"
          content="13-year-old Swift and web developer. Winner of the 2024 Swift Student Challenge."
        />
        <meta
          name="twitter:image"
          content="https://shauryag.com/screenshot.jpeg"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
