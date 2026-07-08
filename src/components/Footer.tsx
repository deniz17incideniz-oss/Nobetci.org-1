import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Nobetci.org resmî kurum değildir; bilgilendirme ve yönlendirme amacıyla hazırlanmış bir nöbetçi kurum rehberidir. Acil durumlarda 112 Acil Çağrı Merkezi’ni arayın. Nöbet bilgilerini işlem yapmadan önce resmî kaynaklardan doğrulayın.</p>
        <div>
          <Link href="/about">Hakkında</Link>
          <Link href="/privacy">Gizlilik ve kullanım</Link>
          <Link href="/contact">İletişim</Link>
        </div>
      </div>
    </footer>
  );
}
