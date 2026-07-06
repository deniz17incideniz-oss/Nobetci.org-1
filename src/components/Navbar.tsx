import Link from "next/link";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Nobetci.org ana sayfa">
          <Logo />
        </Link>
        <nav aria-label="Ana menü">
          <Link href="/harita">Harita</Link>
          <Link href="/nobetci-eczane">Eczane</Link>
          <Link href="/nobetci-noter">Noter</Link>
          <Link href="/about">Hakkında</Link>
          <Link href="/contact">İletişim</Link>
        </nav>
      </div>
    </header>
  );
}
