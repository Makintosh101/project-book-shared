/**
 * Build a default display name from legal name + nickname.
 *
 * Format:
 *   - "First Last" if no nickname
 *   - "First Last (Nick)" if nickname differs from first
 *   - "First Last" if nickname matches first (no need to repeat)
 *
 * Returns null if first or last is missing — callers should fall back to the
 * existing display_name.
 */
export function buildDefaultDisplayName(
  firstName: string | null | undefined,
  lastName: string | null | undefined,
  nickname: string | null | undefined,
): string | null {
  const first = (firstName ?? "").trim();
  const last = (lastName ?? "").trim();
  const nick = (nickname ?? "").trim();
  if (!first || !last) return null;
  if (nick && nick.toLowerCase() !== first.toLowerCase()) {
    return `${first} ${last} (${nick})`;
  }
  return `${first} ${last}`;
}
