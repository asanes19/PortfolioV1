/**
 * Normalize image source — handles both string URLs
 * and object shapes like { url: "..." }.
 */
export const getImageUrl = (image) =>
  typeof image === "string" ? image : image?.url ?? null;
