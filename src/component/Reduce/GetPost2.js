import React, { useEffect, useReducer } from "react";
import User from "./User";

const initialState = {
  loading: true,
  error: "",
  post: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCESS":
      return {
        loading: false,
        post: action.data,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: [],
        error: "there was a problem...!",
      };

    default:
      return state;
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCESS", data: data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
  }, []);
  return (
    <div>
      <h1>Data featch from json placeholder using useReducer</h1>
      {state.loading
        ? "Loading...."
        : state.post.map((user) => (
            <User
              id={user.id}
              key={user.id}
              title={user.title}
              body={user.body}
            />
          ))}
      {state.error ? state.error : null}
    </div>
  );
}
