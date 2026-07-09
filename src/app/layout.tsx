import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobetci-org.vercel.app"),
  title: {
    default: "Nobetci.org | Türkiye Nöbetçi Kurum Rehberi",
    template: "%s | Nobetci.org",
  },
  description: "Türkiye’de nöbetçi eczane, noter, acil servis ve belediye hizmetleri için resmî kaynaklara hızlıca ulaşın. Şehrinizi seçin, güncel bilgileri doğrulayın.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Nobetci.org",
    title: "Nobetci.org | Türkiye Nöbetçi Kurum Rehberi",
    description: "Türkiye’de nöbetçi kurum bilgileri için resmî kaynaklara hızlıca ulaşın.",
    images: [{ url: "/logo.svg", width: 260, height: 64, alt: "Nobetci.org" }],
    url: "/",
  },
  twitter: { card: "summary_large_image", title: "Nobetci.org", description: "Türkiye nöbetçi kurum rehberi", images: ["/logo.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1287455375559097"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
