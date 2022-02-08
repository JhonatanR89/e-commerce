import React from 'react';
import {useState} from "react-redux";
import Counter from "../Counter"

const Item = ({id,name, price, gen}) => {
  const [stockSelected, setStockSelected] = useState(0);

  const selectedItem = () => setSelectedItem({id,name,price,gen,stock:stockSelected});
  return 
  <div>
      <h2>id: {id}</h2>
      <h2>Nombre del producto: {name}</h2>
      <h2>precio del producto: {price}</h2>
      <h2>genero del producto: {gen}</h2>
      <Counter stock={stock} setStockSelected={setStockSelected} />
      <button onClick={selectedItem}>Seleccionar</button>
  </div>;
};

export default Item;