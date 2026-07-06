# Nobetci.org

Türkiye’deki nöbetçi eczane, noter, hastane acil servisi, belediye hizmeti ve 7/24 acil kurumları harita ve liste üzerinde bulmayı kolaylaştıran Next.js MVP’si.

> Bu ilk sürüm örnek veriler içerir. Nöbet, adres ve iletişim bilgileri resmi kurumdan doğrulanmadan kullanılmamalıdır. Acil durumda 112 aranmalıdır.

## Teknoloji

- Next.js App Router ve TypeScript
- Tailwind CSS altyapısı ve responsive CSS
- React Leaflet ve OpenStreetMap
- Kaynak türüne göre ayrılmış veri adaptörleri
- Günlük GitHub Actions veri güncelleme iş akışı

## Kurulum

Node.js 22 önerilir.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır.

## Komutlar

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm run update-data
```

## Veri yapısı

Örnek kayıtlar `src/data/sample-institutions.json` dosyasındadır. Ortak veri tipi `src/types/institution.ts` içinde tanımlanır. Her kayıtta benzersiz kimlik, kurum adı, kategori, il/ilçe, açık adres, koordinatlar, kaynak ve güncelleme zamanı bulunur.

Kaynak adaptörleri:

- `src/lib/sources/pharmacies.ts`
- `src/lib/sources/notaries.ts`
- `src/lib/sources/hospitals.ts`
- `src/lib/sources/municipal.ts`
- `src/lib/sources/emergency.ts`

Adaptörler gerçek kaynak doğrulanana kadar boş sonuç döndürür. `npm run update-data` tüm adaptörleri güvenli biçimde çalıştırır; veri gelmezse örnek dosyayı korur, tek bir kaynak hata verirse diğerleriyle devam eder.

## Yeni veri kaynağı ekleme

1. Kaynağın herkese açık olduğunu, kullanım şartlarını ve `robots.txt` kurallarını doğrulayın.
2. İlgili adaptörde yanıtı `Institution[]` biçimine dönüştürün.
3. Kaynak adı, kaynak URL’si ve `lastUpdated` alanlarını mutlaka doldurun.
4. Aynı kurumu tekrar üretmeyen kararlı bir `id` oluşturun.
5. Rate limit uygulayın; sonucu önbelleğe alın ve servis üzerinde yoğun istek oluşturmayın.
6. `npm run update-data`, `npm run typecheck` ve `npm run build` komutlarını çalıştırın.

HTML scraping yalnızca açık izin ve kullanım koşulları uygunsa eklenmelidir. Resmi API veya açık veri çıktısı her zaman tercih edilmelidir.

## Günlük güncelleme

`.github/workflows/update-data.yml`, her gün 06:00 UTC’de (Türkiye saatiyle 09:00) çalışır. Veri değişirse yalnızca veri dosyasını commit eder. GitHub deposunda Actions için `Read and write permissions` yetkisi açık olmalıdır.

Vercel serverless çalışma alanında dosya sistemi kalıcı olmadığı için veri güncellemesinin GitHub Actions üzerinden repoya yazılması tercih edilmiştir. Bir Vercel Cron route’u eklenirse veriyi kalıcı bir veritabanına veya object storage’a yazmalıdır.

## Geocoding

`src/lib/geocode.ts`, Nominatim entegrasyonu için hazır bir katman sağlar. Üretimde Nominatim kullanım politikasına uyulmalı, tanımlayıcı User-Agent kullanılmalı, toplu sorgular en fazla saniyede bir istekle yapılmalı ve sonuçlar önbelleğe alınmalıdır. MVP doğrudan JSON içindeki koordinatları kullanır.

## Vercel deployment

1. Vercel’de **Add New → Project** ile GitHub reposunu içe aktarın.
2. Framework otomatik olarak Next.js seçilir; Build Command `npm run build` olarak kalabilir.
3. `NEXT_PUBLIC_SITE_URL` değerini production alan adınıza ayarlayın.
4. Deploy işlemini başlatın ve alan adını projeye bağlayın.

Vercel CLI ile manuel yayın gerekiyorsa:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Bu repoda Vercel erişim tokenı saklanmaz. GitHub-Vercel bağlantısı kurulduktan sonra ana dala gönderilen commitler otomatik yayınlanır.

## Yasal ve açık kaynak uyarısı

Nobetci.org bir resmi kurum değildir. Verilerin doğruluğu ve güncelliği garanti edilmez. Sağlık, güvenlik, afet ve hukuki işlemlerde 112 veya ilgili resmi kurum esas alınmalıdır. Kaynak bağlarken kişisel veri içermeyen, yeniden kullanıma izin veren, halka açık bilgiler kullanılmalıdır.
