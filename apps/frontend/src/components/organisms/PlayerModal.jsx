import useTranslation from "next-translate/useTranslation";
import Modal from "../molecules/Modal";
import PlayerForm from "./PlayerForm";

/**
 * @typedef PlayerModalProps
 * @property {import("../../../../../packages/types").PlayerRecord | undefined} player
 * @property {(player: import("../../../../../packages/types").PlayerRecord) => void} onPlayerUpdate
 * @property {() => void} onPlayerDelete
 * @property {() => void} onClosed
 * @property {import("../../../../../packages/types").GameActionRecord[]} actions
 *
 * @param {PlayerModalProps} param0
 * @returns
 */
export default function PlayerModal({
  player,
  actions,
  onPlayerUpdate,
  onClosed,
  onPlayerDelete,
}) {
  const { t } = useTranslation("common");
  return (
    <Modal
      isOpen={!!player}
      title="Edit the player"
      onClosed={onClosed}
      content={
        player && (
          <PlayerForm
            player={player}
            onChange={onPlayerUpdate}
            actions={actions}
          />
        )
      }
      actions={
        player && (
          <div className="join">
            <button
              className="btn btn-link text-error join-item"
              onClick={() => onPlayerDelete?.()}
            >
              {t("delete")}
            </button>
          </div>
        )
      }
    />
  );
}
