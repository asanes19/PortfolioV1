/**
 * Normalize a tech array to plain strings.
 * Supports both string entries and { tech: string } objects.
 */
export const normalizeTech = (tech) =>
  Array.isArray(tech)
    ? tech.map((t) => (typeof t === "string" ? t : t.tech))
    : [];
