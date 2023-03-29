import { Color } from "../types/Color";
import { sortColors } from "../utils/sortColors";
type filterColorsTypes = {
  colors: Color[];
  setFilteredColors: React.Dispatch<React.SetStateAction<Color[]>>;

  red: boolean;
  green: boolean;
  blue: boolean;
  saturation: boolean;
};

const parseColors = (colors: Color[]) => {
  const parsedColors = colors.map((color) => {
    const hex =
      color.hex.length === 4
        ? color.hex.replace(/./g, (m) => m + m)
        : color.hex;
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    const min = Math.min(red / 255, green / 255, blue / 255);
    const max = Math.max(red / 255, green / 255, blue / 255);
    let saturation = 0;
    if (
      (red === 0 && green === 0 && blue === 0) ||
      (red === 255 && green === 255 && blue === 255)
    ) {
      saturation = 0;
    } else {
      saturation = ((max - min) / (1 - Math.abs(max + min - 1))) * 100;
    }

    return {
      isPredefined: color.isPredefined,
      hex: color.hex,
      r: red,
      g: green,
      b: blue,
      s: saturation,
    };
  });
  return parsedColors;
};

export const filterColors = ({
  colors,
  setFilteredColors,
  red,
  green,
  blue,
  saturation,
}: filterColorsTypes) => {
  const colorsWithValues = parseColors(colors);
  const filtered = colorsWithValues.filter((color) => {
    if (red && color.r <= 127) return false;
    if (green && color.g <= 127) return false;
    if (blue && color.b <= 127) return false;
    if (saturation && color.s <= 50) return false;
    return true;
  });
  setFilteredColors(
    sortColors(
      filtered.map((color) => ({
        hex: color.hex,
        isPredefined: color.isPredefined,
      }))
    )
  );
};
