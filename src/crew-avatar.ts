/**
 * Resolve which image should be used as a crew member's default icon
 * across the system. Honours the per-profile `default_avatar_source`
 * preference, falling back to the other source if the preferred one
 * isn't available.
 */
export type CrewAvatarSource = "photo" | "ai_avatar";

export interface CrewAvatarFields {
  photo_url?: string | null;
  ai_avatar_url?: string | null;
  avatar_url?: string | null;
  default_avatar_source?: string | null;
}

export function resolveCrewAvatarUrl(
  p: CrewAvatarFields | null | undefined,
): string | null {
  if (!p) return null;
  const pref = p.default_avatar_source ?? "photo";
  if (pref === "ai_avatar") {
    return p.ai_avatar_url || p.photo_url || p.avatar_url || null;
  }
  return p.photo_url || p.ai_avatar_url || p.avatar_url || null;
}
