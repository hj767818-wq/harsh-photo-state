import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Harsh Photo State | Printing Shop in Moradabad",
  description:
    "Harsh Photo State provides Printing, Photocopy, Colour Print, Spiral Binding, Lamination, PVC Card, Project & Thesis Printing in Budh Bazar, Moradabad.",
  keywords: [
    "Printing Shop Moradabad",
    "Photocopy",
    "Colour Printing",
    "PVC Card",
    "Spiral Binding",
    "Project Printing",
    "Harsh Photo State",
  ],
  authors: [{ name: "Harsh Photo State" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}