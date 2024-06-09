import useTranslation from "next-translate/useTranslation";

/**
 * @typedef PlayerStatusBadgeProps
 * @property {import("../../../../../packages/types").PlayerRecord} player
 *
 * @param {PlayerStatusBadgeProps} param0
 */
export function PlayerStatusBadge({ player }) {
  const { t } = useTranslation("common");

  if (player.killed_at) {
    return (
      <div className="badge badge-warning badge-outline">
        {t("PlayerStatusBadge.dead")}
      </div>
    );
  }

  return (
    <div className="badge badge-success badge-outline">
      {t("PlayerStatusBadge.alive")}
    </div>
  );
}
