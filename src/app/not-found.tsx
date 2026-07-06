import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="eyebrow">404</span>
      <h1>Bu sayfa bulunamadı</h1>
      <p>Aradığınız bağlantı taşınmış veya kaldırılmış olabilir.</p>
      <Link className="primary-link" href="/">Haritaya dön</Link>
    </div>
  );
}
