import React, { useState } from 'react';


const InputComponent = ({ label, placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label>
        {label}
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default InputComponent;