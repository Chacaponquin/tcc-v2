import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Crystal Chapel",
  manifest: "/seo/site.webmanifest",
  description:
    "Crystal Chapel specializes in creating exquisite religious-themed illustrations that combine artistry, spirituality, and elegance. Our unique designs bring sacred stories and symbols to life, crafted with attention to detail and deep cultural meaning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/seo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/seo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/seo/favicon-16x16.png"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
