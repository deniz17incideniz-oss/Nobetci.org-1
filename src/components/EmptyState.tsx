export function EmptyState({ liveDataUnavailable = false, title, message }: { liveDataUnavailable?: boolean; title?: string; message?: string }) {
  return (
    <div className="empty-state" role="status">
      <span aria-hidden="true">↗</span>
      <strong>{title ?? (liveDataUnavailable ? "Resmî kaynaklardan doğrulayın" : "Resmî kaynak rehberi")}</strong>
      <p>
        {message ?? (liveDataUnavailable
          ? "Güncel nöbet bilgilerine aşağıdaki resmî kaynaklardan ulaşabilirsiniz. İşlem yapmadan önce doğrulama yapmanız önerilir."
          : "Seçiminize uygun canlı liste henüz gösterilmiyor. Güncel bilgiler için resmî kaynak bağlantılarını kullanabilirsiniz.")}
      </p>
    </div>
  );
}
