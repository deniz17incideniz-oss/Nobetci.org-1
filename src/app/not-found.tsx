import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="eyebrow">404</span>
      <h1>Aradığınız sayfa bulunamadı</h1>
      <p>Haritaya dönerek nöbetçi kurumları aramaya devam edebilirsiniz.</p>
      <Link className="primary-link" href="/">Haritaya dön</Link>
    </div>
  );
}
