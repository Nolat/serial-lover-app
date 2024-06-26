/**
 * @param {import("../../../../packages/types").GameRecord} game
 */
export function getGameUrl(game, lang = "") {
  const params = new URLSearchParams({ password: game.private_token });
  return `${getLangPrefix(lang)}/games/${game.id}?${params}`;
}

/**
 * @param {import("../../../../packages/types").GameRecord} game
 */
export function getGameJoinUrl(game, lang = "") {
  return `${getLangPrefix(lang)}/games/${game.id}/join`;
}

/**
 * @param {import("../../../../packages/types").PlayerRecord} player
 */
export function getPlayerUrl(player, lang = "") {
  const params = new URLSearchParams({ password: player.private_token });
  return `${getLangPrefix(lang)}/players/${player.id}?${params}`;
}

function getLangPrefix(lang) {
  return lang ? `/${lang}` : "";
}
