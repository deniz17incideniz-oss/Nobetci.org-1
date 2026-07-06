import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik ve Kullanım Şartları",
  description: "Nobetci.org gizlilik yaklaşımı, konum kullanımı ve kullanım koşulları.",
};

export default function PrivacyPage() {
  return (
    <article className="container content-page legal-page">
      <span className="eyebrow">Yasal bilgiler</span>
      <h1>Gizlilik ve Kullanım Şartları</h1>
      <p className="lead">Bu sayfa, konum izninin nasıl kullanıldığını ve platformdaki bilgilerin sınırlarını açıklar.</p>

      <section>
        <h2>Konum bilgisi</h2>
        <p>Konum izni yalnızca siz izin verdiğinizde, yakınınızdaki sonuçları haritada göstermek amacıyla tarayıcınız içinde kullanılır. MVP sürümü konum bilginizi sunucuda kaydetmez veya üçüncü taraflarla paylaşmaz. İzni tarayıcı ayarlarından dilediğiniz zaman kaldırabilirsiniz.</p>
      </section>
      <section>
        <h2>Veri doğruluğu</h2>
        <p>Platformdaki bilgiler bilgilendirme amaçlıdır; eksiksizliği, güncelliği veya hatasızlığı garanti edilmez. Kurum adı, nöbet zamanı, adres ve telefon bilgilerini işlem yapmadan veya yola çıkmadan önce resmi kaynaktan doğrulamak kullanıcının sorumluluğundadır.</p>
      </section>
      <section>
        <h2>Acil durumlar</h2>
        <p>Bu platform bir acil çağrı hizmeti değildir. Hayati tehlike, yangın, güvenlik veya afet durumunda doğrudan 112 Acil Çağrı Merkezi ile iletişime geçin.</p>
      </section>
      <section>
        <h2>Harita ve dış bağlantılar</h2>
        <p>Harita OpenStreetMap verilerini kullanır. Yol tarifi ve kaynak bağlantıları üçüncü taraf sitelere yönlendirebilir; bu sitelerin içerik ve gizlilik uygulamalarından Nobetci.org sorumlu değildir.</p>
      </section>
      <p className="updated">Son güncelleme: 6 Temmuz 2026</p>
    </article>
  );
}

