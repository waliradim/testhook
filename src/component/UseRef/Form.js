import React, { useEffect, useRef } from "react";
import Input from "./Input";

export default function Form() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input type="text" placeholder="Input Some Text" />
      <br />
      <Input ref={inputRef} type="text" placeholder="Input Name" />
      <br />
      <Input type="number" placeholder="Inpute Number" />
      <br />
    </div>
  );
}
