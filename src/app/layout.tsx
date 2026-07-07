import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobetci.info"),
  title: {
    default: "Nobetci.org | Türkiye Nöbetçi Eczane, Noter ve Acil Kurum Haritası",
    template: "%s | Nobetci.org",
  },
  description: "Türkiye’deki nöbetçi eczane, noter, acil servis ve diğer nöbetçi kurumları haritada bulun. İl ve ilçe seçin, adres, telefon ve yol tarifi bilgilerine ulaşın.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Nobetci.org",
    title: "Nobetci.org | Türkiye Nöbetçi Eczane, Noter ve Acil Kurum Haritası",
    description: "Türkiye’deki nöbetçi eczane, noter, acil servis ve diğer nöbetçi kurumları haritada bulun.",
    images: [{ url: "/logo.svg", width: 260, height: 64, alt: "Nobetci.org" }],
    url: "/",
  },
  twitter: { card: "summary_large_image", title: "Nobetci.org", description: "Türkiye nöbetçi kurum haritası", images: ["/logo.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
