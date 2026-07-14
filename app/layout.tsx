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

  authors: [{ name: "Harsh Photo State" }],
  creator: "Harsh Photo State",
  publisher: "Harsh Photo State",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },

  openGraph: {
    title: "Harsh Photo State | Printing Shop in Moradabad",
    description:
      "Printing, photocopy, colour printing, A4 photo printing, project printing, binding, lamination and PVC card services in Budh Bazar, Moradabad.",
    url: siteUrl,
    siteName: "Harsh Photo State",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Harsh Photo State Printing Shop in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Harsh Photo State | Printing Shop in Moradabad",
    description:
      "Fast and affordable printing services in Budh Bazar, Moradabad.",
    images: ["/opengraph-image"],
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

  verification: {
    google: "IsgKOKCRBWF8TL0BHzN2Ca6lgfPrzUA9wj_DyAoinro",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Harsh Photo State",
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/logo.png`,
  url: siteUrl,
  telephone: ["+91 9012957441", "+91 8171746421"],
  email: "harshphotostate@gmail.com",
  priceRange: "₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Manpur Gali No. 1, Budh Bazar",
    addressLocality: "Moradabad",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.83492897534458,
    longitude: 78.77386179240708,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: ["https://maps.app.goo.gl/aKHfM7h4jc7DQZvaA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={outfit.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}