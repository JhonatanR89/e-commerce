import { useEffect, useState } from "react";
import { GamesAPI } from "../helpers/promises";

const useGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = () =>async () => {
    try {
      const result = await GamesAPI;
      setGames(result);
    } catch (error) {
      console.log({ error });
    } finally {
      console.log("Finalización del consumo de la API productsAPI");
    }
  };

  return {
    games,
  };
};

export default useGames;