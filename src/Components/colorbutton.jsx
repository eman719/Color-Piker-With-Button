import React from 'react';

function ColorButton({ name, value, onClick }) {
  return (
    <button 
      onClick ={onClick} 
      style={{ backgroundColor: value, color: 'white', margin: '5px' }}
    >
      {name}
    </button>
  );
}

export default ColorButton;