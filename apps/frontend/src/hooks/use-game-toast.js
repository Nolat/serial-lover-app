import useTranslation from "next-translate/useTranslation";

/**
 *
 * @param {(level: string, message: string) => void} push
 */
export function useGameToast(pushToast) {
  const { t } = useTranslation("toasts");
  return {
    player: {
      created: {
        /**
         * @param {import("../../../../packages/types").PlayerRecordSanitized} player
         */
        success: (player) =>
          pushToast(
            "success",
            `👯 ${t("player.created.success", { player: player.name })}`
          ),
        /**
         * @param {import("../../../../packages/types").PlayerRecordSanitized} player
         */
        error: (player) =>
          pushToast(
            "error",
            `🔥 ${t("player.created.error", { player: player.name })}`
          ),
      },
      updated: {
        /**
         * @param {import("../../../../packages/types").PlayerRecordSanitized} player
         */
        success: (player) =>
          pushToast(
            "success",
            `✅ ${t("player.updated.success", { player: player.name })}`
          ),
        /**
         * @param {import("../../../../packages/types").PlayerRecordSanitized} player
         */
        error: (player) =>
          pushToast(
            "error",
            `🔥 ${t("player.updated.error", { player: player.name })}`
          ),
      },
      removed: {
        /**
         * @param {import("../../../../packages/types").PlayerRecordSanitized} player
         */
        success: (player) =>
          pushToast(
            "success",
            `😢 ${t("player.removed.success", { player: player.name })}`
          ),
        /**
         * @param {import("../../../../packages/types").PlayerRecordSanitized} player
         */
        error: (player) =>
          pushToast(
            "error",
            `🔥 ${t("player.removed.error", { player: player.name })}`
          ),
      },
    },
  };
}
