import React from "react";

function Title() {
  console.log("rendering Title...>!!<");
  return (
    <div>
      <h1>Use Callback and Memo hook</h1>
    </div>
  );
}
export default React.memo(Title);
