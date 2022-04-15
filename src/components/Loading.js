import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div>
      <ReactLoading type="balls" color="#03fc4e" height={100} width={100} />
    </div>
  );
}
