import React from "react";

function ToyCard({toy, onLike, onDonate, ...props}) {
  function handleLike(e) {
    if(onLike) {
      onLike(toy, e);
    }
  };

  function handleDonate(e) {
    if(onDonate) {
      onDonate(toy, e);
    }
  }
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy?.name}</h2>
      <img
        src={toy?.image}
        alt={toy?.name}
        className="toy-avatar"
      />
      <p>{toy?.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
