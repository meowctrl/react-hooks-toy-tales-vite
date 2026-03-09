import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const { id, name, image, likes } = toy;

  function handleDelete() {
    fetch(`/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDelete(id);
    });
  }

  function handleLike() {
    const newLikes = likes + 1;
    fetch(`/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        onLike(updatedToy);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>
        Like &lt;3
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
