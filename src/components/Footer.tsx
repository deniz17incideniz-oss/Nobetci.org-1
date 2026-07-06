import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Nobetci.org açık kaynaklardan derlenen bilgilendirme amaçlı bir platformdur.</p>
        <div>
          <Link href="/about">Hakkında</Link>
          <Link href="/privacy">Gizlilik ve kullanım</Link>
        </div>
      </div>
    </footer>
  );
}

