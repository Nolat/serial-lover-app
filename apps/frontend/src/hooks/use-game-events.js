import { client } from "@/lib/client";
import { useEffect } from "react";

import { SubscriberEventNames } from "../../../../packages/types";

/**
 * @typedef GameListenerCallbacks
 * @property {(players: import("../../../../packages/types").PlayerRecord[]) => import("../../../../packages/types").PlayerRecord[]} [setPlayers]
 * @property {(player: import("../../../../packages/types").PlayerRecord) => void} [updatePlayer]
 * @property {(player: import("../../../../packages/types").PlayerRecord) => void} [addPlayer]
 * @property {(player: import("../../../../packages/types").PlayerRecord) => void} [deletePlayer]
 * @property {(player: import("../../../../packages/types").GameRecord) => void} [setGame]
 */

/**
 * @param {string} gameId
 * @param {GameListenerCallbacks} setters
 */
export function useGameEvents(gameId, setters) {
  useEffect(() => {
    if (!gameId) return;

    function onSseEvent(event) {
      console.log("Server sent event", event);
      switch (event.event) {
        case SubscriberEventNames.GameCreated:
          break;

        case SubscriberEventNames.GameUpdated:
          setters.setGame?.(event.payload);
          break;

        case SubscriberEventNames.GameDeleted:
          break;

        case SubscriberEventNames.PlayerCreated:
          return setters.addPlayer?.(event.payload);

        case SubscriberEventNames.PlayerUpdated:
          return setters.updatePlayer?.(event.payload);

        case SubscriberEventNames.PlayerDeleted:
          return setters.deletePlayer?.(event.payload);
      }
    }

    return client.setupGameListener(gameId, onSseEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);
}
