import React, { useEffect, useState } from "react";
import User from "./User";
export default function GetPost() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setloading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setloading(false);
        setPost("");
        setError("There was a problem...!");
      });
  }, []);
  return (
    <div>
      {loading
        ? "Loading...."
        : post.map((user) => (
            <User
              id={user.id}
              key={user.id}
              title={user.title}
              body={user.body}
            />
          ))}
      {error ? error : null}
    </div>
  );
}
