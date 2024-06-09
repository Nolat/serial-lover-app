import { AvatarConfig, genConfig } from "react-nice-avatar";

/**
 *
 * @param {import('../../../../packages/types').PlayerRecord} player player
 * @returns {AvatarConfig}
 */
export function getPlayerAvatarConfig(player) {
  if (player.id === "hidden") {
    return genConfig({});
  }

  switch (typeof player.avatar) {
    case "undefined":
      return genConfig(player.name);
    case "object":
      return player.avatar;
    case "string":
      return JSON.parse(player.avatar);
  }
}

/**
 * @param {import("../../../../packages/types").PlayerRecord | import("../../../../packages/types").PlayerRecordSanitized} player
 * @returns {boolean}
 */
export function isPlayerRecord(player) {
  return (
    typeof player === "object" && player !== null && "private_token" in player
  );
}

/**
 * @param {import("../../../../packages/types").PlayerRecord} old
 * @param {import("../../../../packages/types").PlayerRecord | import("../../../../packages/types").PlayerRecordSanitized} newPlayer
 * @returns {import("../../../../packages/types").PlayerRecord}
 */
export function mergePlayerRecord(oldPlayer, newPlayer) {
  if (isPlayerRecord(newPlayer)) return newPlayer;

  const ret = { ...oldPlayer };

  for (const key in newPlayer) {
    ret[key] = newPlayer[key];
  }

  return ret;
}
