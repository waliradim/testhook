import React from "react";
import { useState } from "react";
import Todo from "./Todo";

export default function Count() {
  const [count, setCount] = useState(0);
  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount((prevState) => prevState + 1);
      i += 1;
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button type="button" onClick={addFive}>
        +5
      </button>
    </div>
  );
}
