/**
 * International dial codes for phone number input.
 * Used by the crew onboarding "Contact" step to compose E.164 numbers.
 */

export interface DialCode {
  country: string;
  iso: string; // ISO 3166-1 alpha-2
  dial: string; // e.g. "+44"
  flag: string; // emoji flag
}

export const DIAL_CODES: DialCode[] = [
  { country: "United Kingdom", iso: "GB", dial: "+44", flag: "🇬🇧" },
  { country: "United States", iso: "US", dial: "+1", flag: "🇺🇸" },
  { country: "Canada", iso: "CA", dial: "+1", flag: "🇨🇦" },
  { country: "Ireland", iso: "IE", dial: "+353", flag: "🇮🇪" },
  { country: "Australia", iso: "AU", dial: "+61", flag: "🇦🇺" },
  { country: "New Zealand", iso: "NZ", dial: "+64", flag: "🇳🇿" },
  { country: "Austria", iso: "AT", dial: "+43", flag: "🇦🇹" },
  { country: "Belgium", iso: "BE", dial: "+32", flag: "🇧🇪" },
  { country: "Brazil", iso: "BR", dial: "+55", flag: "🇧🇷" },
  { country: "China", iso: "CN", dial: "+86", flag: "🇨🇳" },
  { country: "Croatia", iso: "HR", dial: "+385", flag: "🇭🇷" },
  { country: "Czech Republic", iso: "CZ", dial: "+420", flag: "🇨🇿" },
  { country: "Denmark", iso: "DK", dial: "+45", flag: "🇩🇰" },
  { country: "Egypt", iso: "EG", dial: "+20", flag: "🇪🇬" },
  { country: "Finland", iso: "FI", dial: "+358", flag: "🇫🇮" },
  { country: "France", iso: "FR", dial: "+33", flag: "🇫🇷" },
  { country: "Germany", iso: "DE", dial: "+49", flag: "🇩🇪" },
  { country: "Greece", iso: "GR", dial: "+30", flag: "🇬🇷" },
  { country: "Hong Kong", iso: "HK", dial: "+852", flag: "🇭🇰" },
  { country: "Hungary", iso: "HU", dial: "+36", flag: "🇭🇺" },
  { country: "Iceland", iso: "IS", dial: "+354", flag: "🇮🇸" },
  { country: "India", iso: "IN", dial: "+91", flag: "🇮🇳" },
  { country: "Indonesia", iso: "ID", dial: "+62", flag: "🇮🇩" },
  { country: "Israel", iso: "IL", dial: "+972", flag: "🇮🇱" },
  { country: "Italy", iso: "IT", dial: "+39", flag: "🇮🇹" },
  { country: "Japan", iso: "JP", dial: "+81", flag: "🇯🇵" },
  { country: "Kenya", iso: "KE", dial: "+254", flag: "🇰🇪" },
  { country: "Luxembourg", iso: "LU", dial: "+352", flag: "🇱🇺" },
  { country: "Malaysia", iso: "MY", dial: "+60", flag: "🇲🇾" },
  { country: "Mexico", iso: "MX", dial: "+52", flag: "🇲🇽" },
  { country: "Monaco", iso: "MC", dial: "+377", flag: "🇲🇨" },
  { country: "Morocco", iso: "MA", dial: "+212", flag: "🇲🇦" },
  { country: "Netherlands", iso: "NL", dial: "+31", flag: "🇳🇱" },
  { country: "Nigeria", iso: "NG", dial: "+234", flag: "🇳🇬" },
  { country: "Norway", iso: "NO", dial: "+47", flag: "🇳🇴" },
  { country: "Philippines", iso: "PH", dial: "+63", flag: "🇵🇭" },
  { country: "Poland", iso: "PL", dial: "+48", flag: "🇵🇱" },
  { country: "Portugal", iso: "PT", dial: "+351", flag: "🇵🇹" },
  { country: "Qatar", iso: "QA", dial: "+974", flag: "🇶🇦" },
  { country: "Romania", iso: "RO", dial: "+40", flag: "🇷🇴" },
  { country: "Saudi Arabia", iso: "SA", dial: "+966", flag: "🇸🇦" },
  { country: "Singapore", iso: "SG", dial: "+65", flag: "🇸🇬" },
  { country: "South Africa", iso: "ZA", dial: "+27", flag: "🇿🇦" },
  { country: "South Korea", iso: "KR", dial: "+82", flag: "🇰🇷" },
  { country: "Spain", iso: "ES", dial: "+34", flag: "🇪🇸" },
  { country: "Sweden", iso: "SE", dial: "+46", flag: "🇸🇪" },
  { country: "Switzerland", iso: "CH", dial: "+41", flag: "🇨🇭" },
  { country: "Thailand", iso: "TH", dial: "+66", flag: "🇹🇭" },
  { country: "Turkey", iso: "TR", dial: "+90", flag: "🇹🇷" },
  { country: "United Arab Emirates", iso: "AE", dial: "+971", flag: "🇦🇪" },
  { country: "Vietnam", iso: "VN", dial: "+84", flag: "🇻🇳" },
];

/**
 * Find the best-matching dial code for a stored phone number.
 * Returns the longest matching prefix (so +1, +44, +972 etc. all resolve correctly).
 */
export function detectDialCode(phone: string | null | undefined): DialCode | undefined {
  if (!phone) return undefined;
  const trimmed = phone.trim();
  if (!trimmed.startsWith("+")) return undefined;
  const sorted = [...DIAL_CODES].sort((a, b) => b.dial.length - a.dial.length);
  return sorted.find((c) => trimmed.startsWith(c.dial));
}

/**
 * Strip a known dial code from the start of a number.
 */
export function stripDialCode(phone: string, dial: string): string {
  return phone.replace(new RegExp(`^\\${dial}\\s*`), "").trim();
}

export const DEFAULT_DIAL_ISO = "GB";
