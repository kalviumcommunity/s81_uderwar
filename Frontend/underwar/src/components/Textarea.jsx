import React from "react";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="border p-2 rounded-md w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Textarea;
