import useTranslation from "next-translate/useTranslation";
import GameForm from "../molecules/GameForm";
import Modal from "../molecules/Modal";

/**
 * @typedef PlayerModalProps
 * @property {import("../../../../../packages/types").GameRecord | undefined} game
 * @property {(game: import("../../../../../packages/types").GameRecord) => void} onGameUpdate
 * @property {() => void} onGameDelete
 * @property {() => void} onClosed
 * @property {import("../../../../../packages/types").GameActionRecord[]} actions
 *
 * @param {PlayerModalProps} param0
 * @returns
 */
export default function GameModal({
  game,
  onGameUpdate,
  onClosed,
  onGameDelete,
}) {
  const { t } = useTranslation("games");
  return (
    <Modal
      isOpen={!!game}
      title={t("GameModal.title")}
      onClosed={onClosed}
      content={game && <GameForm game={game} onSubmit={onGameUpdate} />}
      actions={
        game && (
          <div className="join">
            <button
              className="btn btn-link text-error join-item"
              onClick={() => onGameDelete?.()}
            >
              {t("delete")}
            </button>
          </div>
        )
      }
    />
  );
}
