import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Rajeev Kumar",
  description:
    "Rajeev Kumar — Software Engineer, React Native Developer, and tech enthusiast. Passionate about building impactful mobile apps, exploring blockchain, and solving real-world problems with code.",
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
          content="Rajeev Kumar — Software Engineer, React Native Developer, and tech enthusiast. Passionate about building impactful mobile apps, exploring blockchain, and solving real-world problems with code."
        />
        <meta
          name="keywords"
          content="Rajeev Kumar — Software Engineer, React Native Developer, and tech enthusiast. Passionate about building impactful mobile apps, exploring blockchain, and solving real-world problems with code.

"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Rajeev Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Rajeev Kumar - Software Engineer | React Native Developer | tech enthusiast."
        />
        <meta
          property="og:description"
          content="Rajeev Kumar — Software Engineer, React Native Developer, and tech enthusiast."
        />
        <meta property="og:url" content="" />
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
          content="Rajeev Kumar — Software Engineer, React Native Developer, and tech enthusiast."
        />
        <meta
          name="twitter:description"
          content="Rajeev Kumar — Software Engineer, React Native Developer, and tech enthusiast."
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
