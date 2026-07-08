export function EmptyState({ liveDataUnavailable = false, title, message }: { liveDataUnavailable?: boolean; title?: string; message?: string }) {
  return (
    <div className="empty-state" role="status">
      <span aria-hidden="true">⌕</span>
      <strong>{title ?? (liveDataUnavailable ? "Canlı nöbet verisi bekleniyor" : "Bu filtrelere uygun kurum bulunamadı")}</strong>
      <p>
        {message ?? (liveDataUnavailable
          ? "Bu bölge için canlı nöbet verisi henüz bağlanmadı. Lütfen resmi kaynaklardan kontrol edin."
          : "İl, ilçe veya kategori seçimini değiştirmeyi deneyin.")}
      </p>
    </div>
  );
}
