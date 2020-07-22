import React from "react";

export function InputField({ name, value, inputChange, placeholder }) {
  return (
    <input
      name={name}
      type="text"
      value={value}
      onChange={inputChange}
      placeholder={placeholder}
    />
  );
}
