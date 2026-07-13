import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const siteUrl = "https://harsh-photo-state-p6cx.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Harsh Photo State | Printing Shop in Moradabad",
    template: "%s | Harsh Photo State",
  },

  description:
    "Harsh Photo State offers fast printing, photocopy, colour printing, A4 photo printing, project and thesis printing, spiral binding, lamination and PVC card services in Budh Bazar, Moradabad.",

  keywords: [
    "Harsh Photo State",
    "Printing Shop in Moradabad",
    "Printing Shop Budh Bazar",
    "Photocopy Shop Moradabad",
    "Colour Printing Moradabad",
    "A4 Photo Printing Moradabad",
    "Project Printing Moradabad",
    "Thesis Printing Moradabad",
    "Spiral Binding Moradabad",
    "Lamination Moradabad",
    "PVC Card Printing Moradabad",
  ],

  authors: [
    {
      name: "Harsh Photo State",
    },
  ],

  creator: "Harsh Photo State",
  publisher: "Harsh Photo State",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Harsh Photo State | Printing Shop in Moradabad",
    description:
      "Printing, photocopy, colour printing, A4 photo printing, project printing, binding, lamination and PVC card services in Budh Bazar, Moradabad.",
    url: siteUrl,
    siteName: "Harsh Photo State",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Harsh Photo State | Printing Shop in Moradabad",
    description:
      "Fast and affordable printing services in Budh Bazar, Moradabad.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Printing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={outfit.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}