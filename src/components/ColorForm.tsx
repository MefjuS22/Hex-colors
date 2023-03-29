import React from "react";
import { Color } from "../types/Color";

type ColorFormProps = {
  onColorAdd: (color: Color) => void;
};

type ColorFormState = {
  colorValue: string;
};

class ColorForm extends React.Component<ColorFormProps, ColorFormState> {
  constructor(props: ColorFormProps) {
    super(props);
    this.state = {
      colorValue: "",
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { colorValue } = this.state;
    const newColor: Color = {
      hex: colorValue,
      isPredefined: false,
    };
    this.props.onColorAdd(newColor);
    this.setState({ colorValue: "" });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const isValid = /^(#[A-Fa-f0-9]{0,6}|)$/.test(newValue);
    if (isValid) {
      this.setState({ colorValue: newValue.toUpperCase() });
    }
  };

  render() {
    const { colorValue } = this.state;
    return (
      <div className="color-form">
        <h1>Add new color</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              id="colorInput"
              value={colorValue}
              onChange={this.handleChange}
              maxLength={7}
            />
            <button
              type="submit"
              className="add-button"
              disabled={colorValue.length !== (4 || 7)}
            >
              +
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ColorForm;
