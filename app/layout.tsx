import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

import { SiteChrome } from "@/components/site-chrome";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beautyphile-nails-cork.ie"),
  title: {
    default: "Beautyphile Nails Cork | Luxury Nail Salon on Oliver Plunkett Street",
    template: "%s | Beautyphile Nails Cork",
  },
  description:
    "Beautyphile Nails Cork is a premium nail boutique at 9 Oliver Plunkett Street offering BIAB, manicure, pedicure, Shellac, gel, French, acrylic, extensions and nail art.",
  keywords: [
    "Beautyphile Nails Cork",
    "nail salon Cork",
    "BIAB Cork",
    "manicure Cork",
    "pedicure Cork",
    "Oliver Plunkett Street nails",
    "Shellac Cork",
    "gel nails Cork",
    "French nails Cork",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beautyphile Nails Cork",
    description:
      "Premium BIAB, gel, French, manicure, pedicure and nail art in Cork City Centre.",
    url: "/",
    siteName: "Beautyphile Nails Cork",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/images/placeholders/nail3.png",
        width: 1286,
        height: 1223,
        alt: "Pearl chrome extension nails by Beautyphile Nails Cork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beautyphile Nails Cork",
    description:
      "A soft, modern nail boutique for BIAB, gel, French and nail art in Cork City.",
    images: ["/images/placeholders/nail3.png"],
  },
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fffdf8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
