import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { category, topic } = useParams();
  return (
    <div>
      <h1>
        Post component -- {category} -- {topic} page
      </h1>
    </div>
  );
}
