import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onLike, onDonate, ...props}) {
  if (!toys?.length) {
    return (
      <div id="toy-collection">No toys currently.</div>
    )
  }
  let cards = toys.map((toy, index) => {
    return (
      <ToyCard key={toy.id} toy={toy} onDonate={onDonate} onLike={onLike}/>
    )
  })

  return (
    <div id="toy-collection">{cards}</div>
  );
}

export default ToyContainer;
