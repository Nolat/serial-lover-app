import { useEffect, useState } from "react";

export function useLocalStorageArray(key) {
  const [items, _setItems] = useState([]);

  useEffect(() => {
    _setItems(getItems());
  }, []);

  /**
   *
   * @param {import("../../../../packages/types").GameRecord[]} newItem
   */
  function setItems(newItem) {
    localStorage.setItem(key, JSON.stringify(newItem));
    _setItems(newItem);
  }

  /**
   * @returns {import("../../../../packages/types").GameRecord[]}
   */
  function getItems() {
    const gamesStr = localStorage.getItem(key);
    if (!gamesStr) return [];

    try {
      return JSON.parse(gamesStr);
    } catch (error) {
      console.error(error);
      localStorage.removeItem(key);
      return [];
    }
  }

  /**
   *
   * @param {import("../../../../packages/types").GameRecord} game
   */
  function removeItem(game) {
    setItems(items.filter((g) => g.id !== game.id));
  }

  /**
   *
   * @param {import("../../../../packages/types").GameRecord} game
   */
  function addItem(game) {
    setItems([...items, game]);
  }

  return { addItem, removeItem, items, getItems };
}
