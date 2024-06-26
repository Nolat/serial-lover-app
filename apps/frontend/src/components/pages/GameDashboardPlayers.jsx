"use client";
import { useMemo, useState } from "react";
import Empty from "../atoms/Empty";
import PlayerModal from "../organisms/PlayerModal";
import PlayersTable from "../organisms/PlayersTable";

/**
 * @typedef GameDashboardTabsPlayersProps
 * @property {import("../../../../../packages/types").GameRecord} game
 * @property {import("../../../../../packages/types").PlayerRecord[]} players
 * @property {(player: import('../../../../../packages/types').PlayerRecord) => void} [onPlayerUpdate]
 * @property {(player: import('../../../../../packages/types').PlayerRecord) => void} [onPlayerDelete]
 * @property {() => void} [reload]
 *
 * @param {GameDashboardTabsPlayersProps} param0
 */
export default function GameDashboardPlayers({
  game,
  players,
  onPlayerDelete,
  onPlayerUpdate,
  reload,
}) {
  const [editedPlayerId, setEditedPlayerId] = useState(undefined);

  const editedPlayer = useMemo(
    () =>
      editedPlayerId ? players.find((p) => p.id === editedPlayerId) : undefined,
    [editedPlayerId, players]
  );

  /**
   * @param {import("../../../../../packages/types").PlayerRecord} player
   */
  function handlePlayerModeUp(player) {
    const order = Math.min(
      ...players.filter((p) => p.order > player.order).map((p) => p.order)
    );
    onPlayerUpdate?.({ ...player, order });
    reload?.();
  }

  /**
   * @param {import("../../../../../packages/types").PlayerRecord} player
   */
  function handlePlayerModeDown(player) {
    const order = Math.max(
      ...players.filter((p) => p.order < player.order).map((p) => p.order)
    );
    onPlayerUpdate?.({ ...player, order });
    reload?.();
  }

  if (players.length === 0) return <Empty />;

  return (
    <>
      <PlayersTable
        players={players}
        editable={!game.started_at}
        onPlayerClick={(p) => setEditedPlayerId(p.id)}
        onEditClick={(p) => setEditedPlayerId(p.id)}
        onDeleteClick={(p) => onPlayerDelete(p)}
        onMoveDown={handlePlayerModeDown}
        onMoveUp={handlePlayerModeUp}
      />
      <PlayerModal
        player={editedPlayer}
        actions={game.actions}
        onClosed={() => setEditedPlayerId(undefined)}
        onPlayerUpdate={onPlayerUpdate}
        onPlayerDelete={() => onPlayerDelete(editedPlayer)}
      />
    </>
  );
}
