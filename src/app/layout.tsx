import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://nobetci.org"),
  title: {
    default: "Nobetci.org | Türkiye Nöbetçi Kurum Haritası",
    template: "%s | Nobetci.org",
  },
  description: "Türkiye’deki nöbetçi eczane, noter, acil servis ve diğer nöbetçi kurumları harita üzerinde bulun.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Nobetci.org",
    title: "Nobetci.org | Türkiye Nöbetçi Kurum Haritası",
    description: "Türkiye’deki nöbetçi eczane, noter, acil servis ve diğer nöbetçi kurumları harita üzerinde bulun.",
    url: "/",
  },
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

