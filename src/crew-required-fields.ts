/**
 * Built-in crew profile fields that platform admins can mark required/optional.
 * The selected values become the baseline for the freelancer onboarding wizard.
 *
 * Groups mirror the 7 privacy categories used in PrivacySection so admins
 * configure required fields with the same mental model as freelancers manage
 * visibility.
 */

export type CrewBuiltInFieldKey =
  // Identity
  | "display_name"
  | "headline"
  | "photo_url"
  | "bio"
  | "pronouns"
  | "date_of_birth"
  | "nationality"
  // Contact
  | "phone"
  | "location_country"
  | "location_city"
  // Work / Skills
  | "skills"
  | "languages"
  | "website_url"
  | "years_experience"
  | "engagement_types"
  | "showreel_url"
  | "social_handles"
  // Availability
  | "availability_status"
  | "availability_notes"
  // Emergency / Welfare
  | "emergency_contact_name"
  | "emergency_contact_phone"
  | "emergency_contact_relationship"
  | "dietary_requirements"
  | "allergies"
  | "accessibility_needs"
  | "apparel_size"
  | "ppe_size"
  // Compliance
  | "dbs_check"
  | "right_to_work"
  | "first_aid"
  | "insurance_documents"
  | "qualifications"
  // Travel / Driving
  | "driving_license_categories"
  | "vehicle_ownership"
  | "passport_held"
  | "international_travel"
  // Financial / Trading
  | "trading_name"
  | "tax_residency_country"
  | "vat_number"
  | "utr_number"
  | "company_number"
  | "day_rate"
  | "payment_method";

export type CrewFieldGroup =
  | "Identity"
  | "Contact"
  | "Work"
  | "Availability"
  | "Welfare"
  | "Compliance"
  | "Travel"
  | "Financial";

export interface CrewBuiltInFieldDef {
  key: CrewBuiltInFieldKey;
  label: string;
  group: CrewFieldGroup;
  /** Hard-required by data model — admin cannot turn off. */
  alwaysRequired?: boolean;
  /** Default required value when no platform setting exists yet. */
  defaultRequired: boolean;
}

export const CREW_BUILT_IN_FIELDS: CrewBuiltInFieldDef[] = [
  // Identity
  { key: "display_name", label: "Display name", group: "Identity", alwaysRequired: true, defaultRequired: true },
  { key: "headline", label: "Headline", group: "Identity", defaultRequired: true },
  { key: "photo_url", label: "Profile photo", group: "Identity", defaultRequired: false },
  { key: "bio", label: "Bio", group: "Identity", defaultRequired: false },
  { key: "pronouns", label: "Pronouns", group: "Identity", defaultRequired: false },
  { key: "date_of_birth", label: "Date of birth", group: "Identity", defaultRequired: false },
  { key: "nationality", label: "Nationality", group: "Identity", defaultRequired: false },

  // Contact
  { key: "phone", label: "Phone", group: "Contact", defaultRequired: false },
  { key: "location_country", label: "Country", group: "Contact", defaultRequired: false },
  { key: "location_city", label: "City", group: "Contact", defaultRequired: false },

  // Work / Skills
  { key: "skills", label: "Skills", group: "Work", defaultRequired: true },
  { key: "languages", label: "Languages", group: "Work", defaultRequired: false },
  { key: "website_url", label: "Website / portfolio", group: "Work", defaultRequired: false },
  { key: "years_experience", label: "Years of experience", group: "Work", defaultRequired: false },
  { key: "engagement_types", label: "Engagement types", group: "Work", defaultRequired: false },
  { key: "showreel_url", label: "Showreel URL", group: "Work", defaultRequired: false },
  { key: "social_handles", label: "Social handles", group: "Work", defaultRequired: false },

  // Availability
  { key: "availability_status", label: "Availability status", group: "Availability", defaultRequired: true },
  { key: "availability_notes", label: "Availability notes", group: "Availability", defaultRequired: false },

  // Welfare
  { key: "emergency_contact_name", label: "Emergency contact name", group: "Welfare", defaultRequired: false },
  { key: "emergency_contact_phone", label: "Emergency contact phone", group: "Welfare", defaultRequired: false },
  { key: "emergency_contact_relationship", label: "Emergency contact relationship", group: "Welfare", defaultRequired: false },
  { key: "dietary_requirements", label: "Dietary requirements", group: "Welfare", defaultRequired: false },
  { key: "allergies", label: "Allergies", group: "Welfare", defaultRequired: false },
  { key: "accessibility_needs", label: "Accessibility needs", group: "Welfare", defaultRequired: false },
  { key: "apparel_size", label: "Apparel size", group: "Welfare", defaultRequired: false },
  { key: "ppe_size", label: "PPE size", group: "Welfare", defaultRequired: false },

  // Compliance
  { key: "dbs_check", label: "DBS check", group: "Compliance", defaultRequired: false },
  { key: "right_to_work", label: "Right to work", group: "Compliance", defaultRequired: false },
  { key: "first_aid", label: "First aid certification", group: "Compliance", defaultRequired: false },
  { key: "insurance_documents", label: "Insurance documents", group: "Compliance", defaultRequired: false },
  { key: "qualifications", label: "Qualifications", group: "Compliance", defaultRequired: false },

  // Travel / Driving
  { key: "driving_license_categories", label: "Driving license categories", group: "Travel", defaultRequired: false },
  { key: "vehicle_ownership", label: "Vehicle ownership", group: "Travel", defaultRequired: false },
  { key: "passport_held", label: "Passport held", group: "Travel", defaultRequired: false },
  { key: "international_travel", label: "Willing to travel internationally", group: "Travel", defaultRequired: false },

  // Financial / Trading
  { key: "trading_name", label: "Trading name", group: "Financial", defaultRequired: false },
  { key: "tax_residency_country", label: "Tax residency country", group: "Financial", defaultRequired: false },
  { key: "vat_number", label: "VAT number", group: "Financial", defaultRequired: false },
  { key: "utr_number", label: "UTR number", group: "Financial", defaultRequired: false },
  { key: "company_number", label: "Company number", group: "Financial", defaultRequired: false },
  { key: "day_rate", label: "Day rate", group: "Financial", defaultRequired: false },
  { key: "payment_method", label: "Payment method", group: "Financial", defaultRequired: false },
];

export type CrewRequiredFieldsMap = Partial<Record<CrewBuiltInFieldKey, boolean>>;

export const CREW_REQUIRED_FIELDS_MODULE_KEY = "crew_book";
export const CREW_REQUIRED_FIELDS_SETTING_KEY = "required_profile_fields";

/** Merge stored values with defaults so missing keys still resolve. */
export function resolveRequiredFields(stored?: CrewRequiredFieldsMap): Record<CrewBuiltInFieldKey, boolean> {
  const out = {} as Record<CrewBuiltInFieldKey, boolean>;
  for (const f of CREW_BUILT_IN_FIELDS) {
    if (f.alwaysRequired) {
      out[f.key] = true;
      continue;
    }
    out[f.key] = stored?.[f.key] ?? f.defaultRequired;
  }
  return out;
}
