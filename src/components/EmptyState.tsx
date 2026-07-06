export function EmptyState() {
  return (
    <div className="empty-state" role="status">
      <span aria-hidden="true">⌕</span>
      <strong>Bu filtrelere uygun kurum bulunamadı</strong>
      <p>İlçe veya kategori seçimini değiştirmeyi deneyin. Bu bölge için canlı veri kaynağı henüz bağlanmamış olabilir.</p>
    </div>
  );
}
