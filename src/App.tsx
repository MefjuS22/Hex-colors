import { useState, useEffect } from "react";
import ColorForm from "./components/ColorForm";
import ColorList from "./components/ColorList";
import FilterColorForm from "./components/FilterColorForm";
import { Color } from "./types/Color";
import { sortColors } from "./utils/sortColors";
import "./App.scss";

function App() {
  const initialColors = () => {
    const storedColors = localStorage.getItem("colors");
    if (storedColors) {
      return JSON.parse(storedColors);
    } else {
      return [
        {
          hex: "#FF0000",
          isPredefined: true,
        },
        {
          hex: "#00FF00",
          isPredefined: true,
        },
        {
          hex: "#0000FF",
          isPredefined: true,
        },
      ];
    }
  };
  const [colors, setColors] = useState<Color[]>(initialColors);
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  const handleColorAdd = (color: Color) => {
    if (colors.some((c) => c.hex === color.hex)) {
      return;
    } else {
      setColors(sortColors([...colors, color]));
    }
  };

  const handleColorRemove = (color: Color) => {
    setColors(sortColors(colors.filter((c) => c !== color)));
  };

  return (
    <div className="App">
      <ColorForm onColorAdd={handleColorAdd} />
      <div className="forms">
        <ColorList colors={colors} onColorRemove={handleColorRemove} />
        <FilterColorForm colors={colors} />
      </div>
    </div>
  );
}

export default App;
