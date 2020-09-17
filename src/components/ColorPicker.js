import React, { useState } from "react";
import { ChromePicker } from "react-color";

function ColorPicker() {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() => setColorPicker((showColorPicker) => !showColorPicker)}
      >
        {showColorPicker ? "Close color picker" : "Pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <h1>hi {color}</h1>
    </div>
  );
}

export default ColorPicker;
