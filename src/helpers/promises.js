import { games } from "../data/games";

export const task = new Promise((resolve, reject) => {
  resolve(true);
  // reject("Message Error from Reject");
});

export const gamesAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("Message Error from Reject");
    resolve(games);
  }, 2000);
});

