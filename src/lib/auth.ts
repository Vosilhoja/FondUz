import { cookies } from "next/headers";

const SESSION_AGE = 60 * 60 * 24 * 7; // 7 days

export async function login(email: string) {
  const expiresAt = new Date(Date.now() + SESSION_AGE * 1000);
  
  // In a real app, we'd sign this. For now, we'll store a simple session.
  // We'll use a basic encoding to pretend it's more than just plain text.
  const session = btoa(JSON.stringify({ email, expiresAt }));
  
  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;

  try {
    const payload = JSON.parse(atob(session));
    if (new Date(payload.expiresAt) < new Date()) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}
