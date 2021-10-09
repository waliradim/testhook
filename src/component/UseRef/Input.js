import react from "react";
import React from "react";

function Input({ type, placeholder }, ref) {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
}

const forwardeInput = react.forwardRef(Input);
export default forwardeInput;
