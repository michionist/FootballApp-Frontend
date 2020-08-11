import React from "react";

const Input = ({ ariaLabel, name, type, placeholder, field }) => (
  <input
    {...field}
    aria-label={ariaLabel}
    name={name}
    type={type}
    className=""
    placeholder={placeholder}
  />
);

export default Input;
