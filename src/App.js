import React, { useState } from "react";
import DateEffect from "./component/useEffect/DateEffect";

function App() {
  const [show, setshow] = useState(true);

  return (
    <div>
      {show && <DateEffect />}
      <button type="button" onClick={() => setshow((prevShow) => !prevShow)}>
        {show ? "hide clock" : "Show clock"}
      </button>
    </div>
  );
}

export default App;
