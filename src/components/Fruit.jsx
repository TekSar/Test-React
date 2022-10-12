export default function Fruit({ fruitInfo, onFruitDelete }) {
  //state

  //components

  //affichage
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}
