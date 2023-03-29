import { Color } from "../types/Color";
export const sortColors = (colors: Color[]) => {
  const rgbColors = colors.map((color) => {
    const r = parseInt(color.hex.slice(1, 3), 16);
    const g = parseInt(color.hex.slice(3, 5), 16);
    const b = parseInt(color.hex.slice(5, 7), 16);
    return { r, g, b, hex: color };
  });

  rgbColors.sort((a, b) => {
    if (a.r !== b.r) {
      return b.r - a.r;
    }
    if (a.g !== b.g) {
      return b.g - a.g;
    }
    if (a.b !== b.b) {
      return b.b - a.b;
    }
    return 0;
  });

  const sortedColors = rgbColors.map((color) => color.hex);
  return sortedColors;
};
