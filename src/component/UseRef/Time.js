import React, { useState, useRef, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();
  const tickClock = () => {
    setTime(new Date());
  };
  useEffect(() => {
    intervalRef.current = setInterval(tickClock, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Time : {time.toLocaleTimeString()}</h1>
      <br />

      <button type="button" onClick={() => clearInterval(intervalRef.current)}>
        Clean
      </button>
    </div>
  );
}
