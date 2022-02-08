import { useState, useEffect} from "react";
import Item from "../item/Item";
import {gamesAPI} from "../../helpers/promises"

const ItemListContainer = () => {
  const  [selectedItem, setSelectedItem] = useState(null)
  const  [games, setGames] = useState([])
  const  [loading, setLoading] = useState(true)

  useEffect(() => {
    getGames();
  }, [])
  
  const getGames = async () => {
      try {
        const result = await gamesAPI;
        setGames(result);
      }catch (error) {
        console.log({error})
      }finally{
        setLoading(false);
      }console.log('API videojuegos consumida con exito')
  }
    return;
    <div>
      <h1>Lista de videojuegos</h1>
      <h3>Videojuego Seleccionado</h3> 
      <p>{selectedItem ? selectedItem : "vacio"}</p>
      {games.map(({id, name, price, gen}) => (
        <Item key={id} 
              name={name}
              price={price}
              gen={gen}
              setSelectedItem={setSelectedItem}  />
        ))}
    </div>;
    
};

export default ItemListContainer;