import React from "react";
import { useState, useEffect } from "react";

export default function DateEffect() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    document.title = `click ${count} time`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>time: {date.toLocaleTimeString()}</h1>

      <button type="button" onClick={addClick}>
        Click
      </button>
    </div>
  );
}
