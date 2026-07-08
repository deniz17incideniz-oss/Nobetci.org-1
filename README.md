# Nobetci.org

Nobetci.org; Türkiye’deki nöbetçi eczane, nöbetçi noter, hastane acil servisi, belediye destek hizmeti ve 7/24 acil kurumları harita ve liste üzerinde bulmayı kolaylaştıran mobil öncelikli bir bilgilendirme platformudur.

> Nobetci.org resmi kurum veya acil çağrı hizmeti değildir. Nöbet, adres, telefon ve çalışma bilgileri işlem yapmadan önce resmi kaynaktan doğrulanmalıdır. Acil durumlarda 112 aranmalıdır.

## Teknolojiler

- Next.js App Router, React ve TypeScript
- Tailwind CSS altyapısı ve responsive CSS
- React Leaflet ve OpenStreetMap
- Kaynak türüne göre ayrılmış veri adaptörleri
- GitHub Actions günlük veri güncellemesi
- Next.js metadata, canonical, Open Graph, Twitter Card, JSON-LD, sitemap ve robots

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
npm run start
npm run update-data
```

## Ortam değişkenleri

```env
NEXT_PUBLIC_SITE_URL=https://nobetci-org.vercel.app
NEXT_PUBLIC_SHOW_SAMPLE_DATA=false
CRON_SECRET=uzun-rastgele-bir-deger
NOMINATIM_USER_AGENT=Nobetci.org/0.1 (contact@example.com)
PHARMACY_SOURCE_URL=
NOTARY_SOURCE_URL=
HOSPITAL_SOURCE_URL=
```

- Demo kayıtlar yalnızca `NEXT_PUBLIC_SHOW_SAMPLE_DATA=true` olduğunda yüklenir. Değer tanımsız veya `false` ise production güvenliği için tamamen gizlenir.
- `CRON_SECRET`: opsiyonel `/api/cron/update` kontrol rotasını korur.
- `NOMINATIM_USER_AGENT`: geocoding etkinleştirilirse Nominatim’in istediği tanımlayıcı değerdir.

## Veri modeli ve gerçek/demo ayrımı

- Canlı/veri kaynağından gelen kayıtlar: `src/data/institutions.json`
- Geliştirme/demo kayıtları: `src/data/sample-institutions.json`
- 81 il ve büyüyebilir ilçe yapısı: `src/data/cities.ts`
- Ortak tip: `src/types/institution.ts`

Her kurum `confidence` alanı taşır:

- `official`: Resmi kaynak
- `verified`: Doğrulanmış
- `sample`: Demo veri
- `unknown`: Kaynak bekleniyor

Demo kayıtlar arayüzde zorunlu olarak “Demo veri” etiketi alır. Demo telefonlar aranabilir bağlantıya dönüştürülmez.

## Veri kaynak sistemi

Adaptörler şunlardır:

- `src/lib/sources/pharmacies.ts`
- `src/lib/sources/notaries.ts`
- `src/lib/sources/hospitals.ts`
- `src/lib/sources/municipal.ts`
- `src/lib/sources/emergency.ts`
- `src/lib/sources/index.ts`

Gerçek kaynak doğrulanana kadar adaptörler boş sonuç döndürür. Bu bilinçli bir güvenlik kararıdır; robots.txt veya kullanım koşullarına aykırı scraping yapılmaz.

İlk işlevsel adaptör sözleşmesi `PHARMACY_SOURCE_URL`, `NOTARY_SOURCE_URL` ve `HOSPITAL_SOURCE_URL` değişkenleriyle izinli HTTPS JSON kaynaklarını kabul eder. Kaynak yanıtı doğrudan bir dizi veya `{ "data": [...] }` yapısı olabilir. Her kayıtta en az `name`, `city`, `district` ve `address` alanları bulunmalıdır. Hatalı kayıtlar atlanır; timeout, HTTP veya JSON hatasında adaptör boş dizi döndürür ve site çalışmaya devam eder.

### Yeni kaynak adaptörü ekleme

1. Kaynağın resmi/halka açık olduğunu, kullanım şartlarını ve robots.txt kurallarını doğrulayın.
2. Mümkünse resmi API veya açık veri çıktısını tercih edin.
3. Kaydı `Institution[]` biçimine normalize edin.
4. `sourceName`, `sourceUrl`, `lastUpdated` ve `confidence` alanlarını doldurun.
5. Kararlı ve tekrar üretilebilir bir `id` oluşturun.
6. Rate limit, timeout ve güvenli hata yönetimi ekleyin.
7. `npm run update-data`, `npm run typecheck`, `npm run lint` ve `npm run build` çalıştırın.

## Günlük veri güncellemesi

`scripts/update-data.ts` tüm adaptörleri çalıştırır, hatalı kaynağı izole eder, kayıtları normalize eder, benzersizleştirir ve canlı sonucu `src/data/institutions.json` dosyasına yazar. Hiç gerçek kayıt gelmezse mevcut canlı dosya korunur; build kırılmaz.

`.github/workflows/update-data.yml` her gün 06:00 UTC’de, Türkiye saatiyle 09:00’da çalışır. Veri değişirse `Update daily duty institution data` mesajıyla otomatik commit oluşturur. GitHub Actions için `Read and write permissions` açık olmalıdır.

Opsiyonel `/api/cron/update` rotası `Authorization: Bearer <CRON_SECRET>` ister. Vercel’in geçici dosya sistemi kalıcı olmadığı için bu rota yalnızca adaptör sağlık kontrolü yapar; kalıcı güncelleme GitHub Actions üzerinden yürür.

## Geocoding

`src/lib/geocode.ts` Nominatim entegrasyonuna ve `src/data/geocode-cache.json` tabanlı cache yaklaşımına hazırdır. MVP doğrudan JSON koordinatlarını kullanır.

Nominatim etkinleştirilirken:

- kullanım politikası okunmalı;
- tanımlayıcı User-Agent gönderilmeli;
- toplu işlemlerde en fazla saniyede bir istek yapılmalı;
- aynı adres tekrar sorgulanmamalı, sonuç cache’lenmeli;
- yüksek trafik için kendi servisiniz veya ticari geocoder tercih edilmelidir.

## Sayfalar ve SEO

- `/` ana sayfa
- `/harita`
- `/nobetci-eczane`
- `/nobetci-noter`
- `/acil-servis`
- `/belediye-hizmetleri`
- `/about`, `/privacy`, `/contact`
- `/{city}/nobetci-eczane`
- `/{city}/nobetci-noter`
- `/{city}/acil-servis`
- `/{city}/{district}/nobetci-eczane`
- `/{city}/{district}/nobetci-noter`

Her dizin sayfası benzersiz title/description, canonical URL, Open Graph, Twitter Card, açıklayıcı metin ve JSON-LD içerir. Sitemap yalnızca gerçek veya açıkça etiketlenmiş demo içeriği bulunan şehir/ilçe rotalarını listeler.

## Vercel deployment

1. Vercel’de GitHub reposunu `nobetci-org` projesine bağlayın.
2. Framework preset olarak Next.js kullanın.
3. Production ortam değişkenlerini ekleyin.
4. `NEXT_PUBLIC_SITE_URL` değerini geçici production adresi olan `https://nobetci-org.vercel.app` olarak ayarlayın.
5. Ana dala push sonrasında production deployment sonucunu kontrol edin.

CLI ile:

```bash
npx vercel@latest whoami
npx vercel@latest --prod
```

Geçici production adresi `https://nobetci-org.vercel.app` olarak kullanılır. `https://nobetci.info` alan adı Türkiye'de erişim engelli göründüğü için production adresi olarak kullanılmamalıdır.

## AdSense hazırlığı

Hakkında, gizlilik ve iletişim sayfaları; kaynak doğrulama uyarıları; özgün kategori/şehir açıklamaları; mobil navigasyon; özel 404 sayfası ve demo veri etiketleri hazırdır. Reklam/analitik etkinleştirilirse gizlilik metni, çerez izni ve ilgili sağlayıcı açıklamaları yayın öncesinde güncellenmelidir. AdSense onayı hiçbir teknik düzenlemeyle garanti edilemez.

İletişim adresi `iletisim@nobetci.org` kullanıcı arayüzünde yayımlanır. Posta kutusunun alan adı sağlayıcısında etkin ve düzenli izleniyor olduğu production öncesinde ayrıca doğrulanmalıdır.

## Eksik kalan işler

- Her kategori için kullanım izni doğrulanmış gerçek kaynak/API bağlamak
- Tüm ilçelerin resmi listesini `cities.ts` içine eklemek
- Gerçek e-posta kutusunu etkinleştirmek
- `nobetci.info` erişim engeli veya alternatif özel alan adı kararını netleştirmek
- Nominatim yerine production trafiğine uygun cache’li geocoding servisi seçmek
- Gerçek veri geldikten sonra içerik doğrulama ve gözlemleme alarmları eklemek
