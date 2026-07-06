import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkında",
  description: "Nobetci.org'un amacı, veri yaklaşımı ve önemli doğrulama uyarıları.",
};

export default function AboutPage() {
  return (
    <article className="container content-page">
      <span className="eyebrow">Hakkımızda</span>
      <h1>Doğru kuruma daha hızlı ulaşın</h1>
      <p className="lead">Nobetci.org; nöbetçi eczane, noter, hastane acil servisi, belediye hizmeti ve 7/24 çalışan acil kurumları tek haritada bulmayı kolaylaştıran bir bilgilendirme platformudur.</p>

      <section>
        <h2>Veriler nasıl hazırlanır?</h2>
        <p>Veriler, yalnızca halka açık ve kullanım koşulları veri derlemeye izin veren kaynaklardan alınacak biçimde tasarlanmıştır. Her kurum türü ayrı bir kaynak adaptörüne sahiptir. İlk MVP sürümündeki bazı kayıtlar, arayüzün ve veri mimarisinin çalışmasını göstermek amacıyla oluşturulmuş örnek verilerdir.</p>
      </section>
      <section className="warning-box">
        <h2>Resmi kaynaktan doğrulayın</h2>
        <p>Nöbet bilgileri, adresler ve çalışma saatleri değişebilir. Yola çıkmadan önce ilgili resmi kurumdan doğrulama yapın. Sağlık ve acil durumlarda bu siteye güvenerek gecikmeyin; 112 Acil Çağrı Merkezi’ni arayın. Hukuki işlemlerde Türkiye Noterler Birliği ve ilgili resmi kurumların güncel duyuruları esastır.</p>
      </section>
      <section>
        <h2>Açık harita yaklaşımı</h2>
        <p>Harita altyapısında OpenStreetMap kullanılır. Amacımız sade, hızlı, erişilebilir ve Türkiye’nin tüm illerine ölçeklenebilen bir hizmet sunmaktır.</p>
      </section>
    </article>
  );
}

