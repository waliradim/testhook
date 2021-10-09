import React, { useCallback, useMemo, useState } from "react";
import Title from "./Title";
import ShowCount from "./ShowCount";
import Button from "./Button";

function Main() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  const incrementOne = useCallback(() => {
    setcount1((prevCount1) => prevCount1 + 1);
  }, []);

  const incrementFive = useCallback(() => {
    setcount2((prevCount2) => prevCount2 + 5);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <Title />
      <ShowCount title={"Counter-1"} count={count1} />
      <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
      <Button handelClick={incrementOne}>Increment by One</Button>
      <hr />
      <ShowCount title={"Counter-2"} count={count2} />
      <Button handelClick={incrementFive}>Increment by Five</Button>
    </div>
  );
}

export default Main;
