import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Crystal Chapel",
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
      <body>{children}</body>
    </html>
  );
}
