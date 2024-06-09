"use client";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import GameModal from "./GameModal";

/**
 * @typedef GameEditButtonProps
 * @property {import("../../../../../packages/types").GameRecord} game
 * @property {(game: import("../../../../../packages/types").GameRecord) => void} onGameUpdate
 * @property {() => void} onGameDelete
 *
 * @param {GameEditButtonProps} param0
 */
export default function GameEditButton({
  game,
  players,
  onGameDelete,
  onGameUpdate,
  disabled,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("game-dashboard");

  return (
    <>
      <GameModal
        game={isOpen ? game : null}
        onClosed={() => setIsOpen(false)}
        players={players}
        onGameDelete={onGameDelete}
        onGameUpdate={onGameUpdate}
      />
      <button
        className="btn btn-secondary"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        ✏️&nbsp;{t("GameEditButton.button")}
      </button>
    </>
  );
}
