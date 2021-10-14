import React, { useReducer } from "react";

//use object type
const initialState = {
  counter: 5,
  counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment5":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement5":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};
export default function Counter2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>Count {state.counter}</h1>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment by 1
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement",
              value: 1,
            })
          }
        >
          Decrement by 1
        </button>
      </div>

      <div>
        <h1>Count2 {state.counter2}</h1>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "increment5",
              value: 5,
            })
          }
        >
          Increment by 5
        </button>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "decrement5",
              value: 5,
            })
          }
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
}
