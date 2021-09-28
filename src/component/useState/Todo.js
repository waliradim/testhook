import React, { useState } from "react";

export default function Todo() {
  const [todo, settodo] = useState("");
  const [warning, setWarning] = useState(null);

  const handelInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes(".js")
      ? "You need javaScript Skill"
      : null;

    settodo(inputValue);
    setWarning(warning);
  };
  return (
    <div>
      <p>{todo}</p>
      <hr />
      <p>
        <textarea name="todo" value={todo} onChange={handelInput}></textarea>
      </p>
      <hr />
      <hr />
      <h2>{warning || "Good Choice"}</h2>
    </div>
  );
}
