import { getGameUrl } from "@/lib/routes";
import useTranslation from "next-translate/useTranslation";
import GameStartedBadge from "./GameStartedBadge";
import PlayersAvatars from "./PlayersAvatars";

/**
 * @typedef GameCardProps
 * @property {import("../../../../../packages/types").GameRecord} game
 * @property {import("../../../../../packages/types").PlayerRecord[]} players
 * @property {string} url
 *
 * @param {GameCardProps} param0
 */
export default function GameCard({ game, players, url }) {
  const { t } = useTranslation("common");
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {game.name} <GameStartedBadge game={game} />
        </h2>
        <PlayersAvatars players={players} />
        <div className="card-actions justify-end">
          <a href={url ?? getGameUrl(game)} className="btn btn-secondary">
            {t("GameCard.see")}
          </a>
        </div>
      </div>
    </div>
  );
}
