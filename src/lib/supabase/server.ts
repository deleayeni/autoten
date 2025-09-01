import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function supabaseServer() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // e.g. https://xxxx.supabase.co
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // sb_publishable_...
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        /**
         * On the server, Next's cookies API is immutable in some contexts.
         * Try/catch prevents crashes if set/remove aren’t allowed (e.g. RSC render).
         */
        set(name, value, options) {
          try {
            cookieStore.set?.({ name, value, ...options });
          } catch {
            /* noop */
          }
        },
        remove(name, options) {
          try {
            cookieStore.set?.({
              name,
              value: "",
              ...options,
              expires: new Date(0),
            });
          } catch {
            /* noop */
          }
        },
      },
      auth: {
        // Sensible defaults; keeps sessions working if you add Supabase Auth later
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
      },
    }
  );
}
