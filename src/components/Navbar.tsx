import Link from "next/link";

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Nobetci.org ana sayfa">
          <span className="brand-mark" aria-hidden="true">N</span>
          Nobetci.org
        </Link>
        <nav aria-label="Ana menü">
          <Link href="/#harita">Harita</Link>
          <Link href="/about">Hakkında</Link>
          <Link href="/privacy">Gizlilik</Link>
        </nav>
      </div>
    </header>
  );
}

