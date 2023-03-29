import { Color } from "../types/Color";
import "../styles/colorStyles.scss";
import "../styles/inputStyles.scss";
type ColorListProps = {
  colors: Color[];
  onColorRemove: (color: Color) => void;
};

const ColorList = ({ colors, onColorRemove }: ColorListProps) => {
  const handleColorRemove = (color: Color) => {
    onColorRemove(color);
  };

  const colorItems = colors.map((color) => {
    const bgColor = { backgroundColor: color.hex };

    return (
      <div className="color-container" key={color.hex}>
        <div className="color-square" style={bgColor}></div>
        <div>{color.hex}</div>
        <div className="delete-item">
          {color.isPredefined ? (
            <span>{""}</span>
          ) : (
            <button
              className="del-button"
              type="button"
              onClick={() => handleColorRemove(color)}
            >
              x
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <section>
      <h2>Colors</h2>
      <div className="colors-box">{colorItems}</div>
    </section>
  );
};

export default ColorList;
