import { Color } from "../types/Color";
import { useEffect, useState } from "react";

import { filterColors } from "../utils/filterColors";
type FilterColorFormProps = {
  colors: Color[];
};

const FilterColorForm = ({ colors }: FilterColorFormProps) => {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [saturation, setSaturation] = useState(false);
  const [filteredColors, setFilteredColors] = useState<Color[]>(colors);

  useEffect(() => {
    filterColors({
      colors: colors,
      setFilteredColors: setFilteredColors,
      red: red,
      green: green,
      blue: blue,
      saturation: saturation,
    });
  }, [red, green, blue, saturation, colors]);

  return (
    <div>
      <h2>Filter Colors</h2>
      <form>
        <div className="filter-options">
          <label className="checkbox">
            Red
            <input
              type="checkbox"
              id="red"
              name="red"
              checked={red}
              onChange={() => setRed(!red)}
            />
          </label>
          <label className="checkbox">
            Green
            <input
              type="checkbox"
              id="green"
              name="green"
              checked={green}
              onChange={() => setGreen(!green)}
            />
          </label>
          <label className="checkbox">
            Blue
            <input
              type="checkbox"
              id="blue"
              name="blue"
              checked={blue}
              onChange={() => setBlue(!blue)}
            />
          </label>
          <label className="checkbox">
            Saturation
            <input
              type="checkbox"
              id="saturation"
              name="saturation"
              checked={saturation}
              onChange={() => setSaturation(!saturation)}
            />
          </label>
        </div>
      </form>
      <div className="colors-box">
        {filteredColors.map((color) => {
          const bgcolor = { backgroundColor: color.hex };
          return (
            <div key={color.hex} className="color-container">
              <div className="color-square" style={bgcolor}></div>
              {color.hex}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColorForm;
