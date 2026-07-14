import React, { useState } from 'react';
import ColorButton from './Components/colorbutton';
import ColorPreview from './Components/colorpreview';

function ColorPicker() {
  const colors = [
    { name: 'red', value: 'red' },
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
    { name: 'Yellow', value: 'yellow' },
    {name: 'pink',value: 'hotpink'},
    { name: 'Purple', value: 'purple' }
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div>
      <h1>Color Palette Picker</h1>
      <p>Choose a color:</p>
      
      {colors.map((color) => (
        <ColorButton 
          key={color.name} 
          name={color.name} 
          value={color.value} 
          onClick={() => setSelectedColor(color)} 
        />
      ))}

      <p>Preview:</p>
      <ColorPreview 
        color={selectedColor} 
        onReset={() => setSelectedColor(null)} 
      />
    </div>
  );
}

export default ColorPicker;