import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="bar">
      <ReactLoading className="icon-loading" type="balls" color="black"
      height={150}
      width={150} />
    </div>
  );
}
