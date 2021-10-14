import React from "react";

export default function User({ id, title, body }) {
  return (
    <div>
      <span>{id}</span>
      <br />
      <span>Title: {title}</span> <br />
      <span>Body: {body}</span>
      <hr />
    </div>
  );
}
