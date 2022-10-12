import { useState } from "react";

export default function FruitForm({ handleAdd }) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    //2. manipuler
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };

    //3. modifier
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
}
