import React, { useState, useRef, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());
  const buttonRef = useRef();
  const tickClock = () => {
    setTime(new Date());
  };
  useEffect(() => {
    buttonRef.current = setInterval(tickClock, 1000);
    return () => {
      clearInterval(buttonRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Time : {time.toLocaleTimeString()}</h1>
      <br />

      <button type="button" onClick={() => clearInterval(buttonRef.current)}>
        Clean
      </button>
    </div>
  );
}
