/**
 * Безопасное чтение переменных окружения для будущего API.
 * Пустое/невалидное значение не бросает ошибок.
 */
export function getPublicApiBaseUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!raw) return undefined;
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") return undefined;
    return u.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
}

export function isApiConfigured(): boolean {
  return Boolean(getPublicApiBaseUrl());
}
