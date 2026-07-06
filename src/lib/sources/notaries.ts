import type { Institution } from "@/types/institution";

export async function fetchNotaries(): Promise<Institution[]> {
  // Türkiye Noterler Birliği için resmi ve yeniden kullanıma uygun erişim yöntemi
  // doğrulandıktan sonra bu adaptör uygulanmalıdır.
  return [];
}

