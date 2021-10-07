import React from "react";

function Button({ handelClick, children }) {
  console.log(`rendering Button ${children}...<==>`);
  return (
    <div>
      <button type="button" onClick={handelClick}>
        {children}
      </button>
    </div>
  );
}
export default React.memo(Button);
