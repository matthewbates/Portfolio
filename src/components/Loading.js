import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div>
      <div>
        <div className="icon-loading-header">
          <h2>loading...</h2>
        </div>
        <ReactLoading
          className="icon-loading"
          type="bars"
          color="black"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
}
