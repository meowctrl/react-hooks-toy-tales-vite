import React, { useEffect, useState } from "react";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  function handleToggleForm() {
    setShowForm((prev) => !prev);
  }

  function handleAddToy(newToy) {
    setToys((prev) => [...prev, newToy]);
  }

  function handleDeleteToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  function handleLikeToy(updatedToy) {
    setToys((prev) =>
      prev.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <div>
      <h1>Toy Application</h1>
      <button onClick={handleToggleForm}>Add a Toy</button>
      {showForm && <ToyForm addToy={handleAddToy} />}
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </div>
  );
}

export default App;
