import { client } from "@/lib/client";
import { useEffect, useState } from "react";

/**
 * @typedef Return
 * @property {boolean} loading
 * @property {any} error
 * @property {import("../../../../packages/types").PlayerRecord | undefined} player
 * @property {(player: import("../../../../packages/types").PlayerRecord | undefined) => void} setPlayer
 */

/**
 * @param {string | undefined} playerId
 * @param {string} [playerPrivateToken]
 * @returns {Return}
 */
export function usePlayer(playerId, playerPrivateToken) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [player, setPlayer] = useState();

  useEffect(() => {
    if (!playerId) return;
    setLoading(true);
    setError(undefined);
    client
      .fetchPlayer(playerId, playerPrivateToken)
      .then(setPlayer)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [playerId, playerPrivateToken]);

  return { loading, error, player, setPlayer };
}
