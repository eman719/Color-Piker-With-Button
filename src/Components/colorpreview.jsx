import React from 'react';

function ColorPreview({ color, onReset }) {
  if (!color) {
    return (
      <div>
        <div style={{ width: '100px', height: '100px', border: 'double' }}></div>
        <p>No color </p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ width: '100px', height: '100px', backgroundColor: color.value }}></div>
      <p>Selected Color: {color.name}</p>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default ColorPreview;