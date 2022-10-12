import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  //state (état , données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Pomme" }
  ]);

  //comportements
  const handleDelete = (id) => {
    //copier
    const fruitsCopy = [...fruits];
    //manipuler
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //actualiser
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    //1. state
    const fruitsCopy = [...fruits];
    //2. manipuler
    fruitsCopy.push(fruitAAjouter);
    //3. modifier
    setFruits(fruitsCopy);
  };

  //affichage (render)
  return (
    <div>
      <h1>liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onFruitDelete={handleDelete}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;

//gestion formulaire
//1. création
//2. soumission
//3. collecte des données
