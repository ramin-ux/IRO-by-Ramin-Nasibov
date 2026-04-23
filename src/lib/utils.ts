import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates whether black or white text has better contrast against a hex background.
 * Uses the YIQ equation.
 */
export function getContrastYIQ(hexcolor: string) {
  // Remove # if present
  let hex = hexcolor.replace("#", "");
  
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  if (hex.length === 3) {
    hex = hex.split("").map((char) => char + char).join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // YIQ luminance value
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Threshold of 128 is typically used, but visually some prefer around 150 for stark modern UIs
  return yiq >= 150 ? "#111111" : "#FFFFFF";
}
