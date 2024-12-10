import React from 'react';

const InputComponent = ({ label, placeholder, value, onChange, type = "text" }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue); // Propaga el valor al componente principal
    }
  };

  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          value={value} // Controlado por el estado en App.jsx
          placeholder={placeholder}
          onChange={handleChange} // Llama al manejador que viene desde el componente principal
        />
      </label>
    </div>
  );
};

export default InputComponent;
