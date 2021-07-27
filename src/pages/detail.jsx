import React from "react";
import { useParams } from "react-router-dom";

export function Detail () {
  let { id } = useParams();
  return (
    <div className="page-detail container">
      <div className="d-flex pt-4">
        <img className="mr-4" src="https://picsum.photos/seed/picsum/300/300" alt=""/>
        <div className="ml-3">
          <p>id: {id}</p>
          <p>Price: $1000</p>
          <p>abc</p>
        </div>
      </div>
    </div>
  )
}
