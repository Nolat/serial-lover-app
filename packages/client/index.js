import { SubscriberEventNames } from "serial-lover-types";

export class SerialLoverClient {
  /** @type {string} */
  host;

  /**
   * @param {string} host
   */
  constructor(host) {
    this.host = host;
  }

  /**
   * @param {Pick<import("../types").GameRecord, 'name'>} game
   * @returns {Promise<import('../types').GameRecord>}
   */
  async createGame(game) {
    return this.#fetchJson(`/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });
  }

  /**
   * @param {import("../types").GameRecord} game
   * @returns {Promise<import('../types').GameRecord>}
   */
  updateGame(game) {
    return this.#fetchJson(`/games/${game.id}`, {
      method: "PUT",
      headers: {
        Authorization: game.private_token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });
  }

  /**
   * @param {import("../types").GameRecord} game
   * @returns {Promise<import('../types').GameRecord>}
   */
  deleteGame(game) {
    return this.#fetchJson(`/games/${game.id}`, {
      method: "DELETE",
      headers: {
        Authorization: game.private_token,
      },
    });
  }

  /**
   * @param {string} gameId
   * @param {string} [privateToken]
   * @returns {Promise<import('../types').GameRecord>}
   */
  fetchGame(gameId, privateToken = undefined) {
    return this.#fetchJson(`/games/${gameId}`, {
      method: "GET",
      headers: {
        Authorization: privateToken,
      },
    });
  }

  /**
   * @param {string} gameId
   * @param {import('../types').PlayerCreateDTO} player
   * @returns {Promise<import('../types').PlayerRecord>}
   */
  createPlayer(gameId, player) {
    return this.#fetchJson(`/games/${gameId}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
  }

  /**
   * @param {string} playerId
   * @param {string} privateToken the `game.private_token` or the corresponding `player.private_token`
   * @returns {Promise<import('../types').PlayerRecord>}
   */
  async fetchPlayer(playerId, privateToken) {
    return this.#fetchJson(`/players/${playerId}`, {
      method: "GET",
      headers: {
        Authorization: privateToken,
      },
    });
  }

  /**
   * @param {string} playerId
   * @param {string} privateToken the `game.private_token` or the corresponding `player.private_token`
   * @returns {Promise<import('../types').PlayerStatus>}
   */
  async fetchPlayerStatus(playerId, privateToken) {
    return this.#fetchJson(`/players/${playerId}/status`, {
      method: "GET",
      headers: {
        Authorization: privateToken,
      },
    });
  }

  /**
   * @param {string} gameId
   * @param {import('../types').PlayerCreateDTO} player
   * @param {string} privateToken `game.private_token` or the corresponding `player.private_token`
   * @returns {Promise<import('../types').PlayerRecord>}
   */
  updatePlayer(gameId, player, privateToken) {
    return this.#fetchJson(`/games/${gameId}/players/${player.id}`, {
      method: "PUT",
      headers: {
        Authorization: privateToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...player,
        avatar:
          typeof player.avatar === "string"
            ? JSON.parse(player.avatar)
            : player.avatar,
      }),
    });
  }

  /**
   * @param {string} gameId
   * @param {string} playerId
   * @param {string} privateToken `game.private_token` or the corresponding `player.private_token`
   */
  async deletePlayer(gameId, playerId, privateToken) {
    const res = await fetch(
      `${this.host}/games/${gameId}/players/${playerId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: privateToken,
        },
      }
    );

    if (!res.ok) throw Error();
  }

  /**
   * @param {string} playerId
   * @param {string} privateToken `player.private_token`
   * @param {string} targetId the player to kill
   * @param {string} killToken `player.private_token`
   * @returns {Promise<import('../types').PlayerRecord>}
   */
  async killPlayer(playerId, privateToken, targetId, killToken) {
    return this.#fetchJson(`/players/${playerId}/kill`, {
      method: "POST",
      headers: {
        Authorization: privateToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ kill_token: killToken, target_id: targetId }),
    });
  }

  /**
   * @param {string} gameId
   * @param {string} [privateToken]
   * @returns {Promise<import('../types').PlayerRecord[]>}
   */
  async fetchPlayers(gameId, privateToken = undefined) {
    return this.#fetchJson(`/games/${gameId}/players`, {
      method: "GET",
      headers: {
        Authorization: privateToken,
      },
    });
  }

  /**
   * @param {string} gameId
   * @param {string} privateToken
   * @param {{displayAllPlayers?: boolean}} [opts]
   * @returns {Promise<import('../types').GamePlayersTable>}
   */
  fetchPlayersTable(gameId, privateToken, opts = {}) {
    const params = new URLSearchParams(opts);

    return this.#fetchJson(
      `/games/${gameId}/players/table?${params.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: privateToken,
        },
      }
    );
  }

  /**
   * @param {string} gameId
   * @param {string} [privateToken] the `private_token` of the game or of the player
   * @returns {Promise<import('../types').GameDashboard>}
   */
  fetchGameDashboard(gameId, privateToken) {
    return this.#fetchJson(`/games/${gameId}/dashboard`, {
      method: "GET",
      headers: {
        Authorization: privateToken,
      },
    });
  }

  /**
   * @param {string} path
   * @param {RequestInit} [init]
   */
  async #fetchJson(path, init) {
    const res = await fetch(`${this.host}${path}`, init);

    if (!res.ok) throw Error();
    const { data } = await res.json();

    return data;
  }

  /**
   * @param {string} gameId
   * @param {(event: {event: keyof typeof SubscriberEventNames, payload: any}) => void} callback
   * @returns {() => void} the method to unsubscribe
   */
  setupGameListener(gameId, callback) {
    const evtSource = new EventSource(`${this.host}/games/${gameId}/sse`);

    evtSource.onmessage = (event) => {
      try {
        callback(JSON.parse(event.data));
      } catch (error) {
        console.error(error);
      }
    };

    return () => evtSource.close();
  }

  /**
   * @param {import("../types").GameRecord} game
   */
  getGamePublicUrl(game, lang = "") {
    const params = new URLSearchParams({ password: game.private_token });
    return `${this.#getPublicUrlLangPrefix(lang)}/games/${game.id}?${params}`;
  }

  /**
   * @param {import("../types").GameRecord} game
   */
  getGameJoinPublicUrl(game, lang = "") {
    return `${this.#getPublicUrlLangPrefix(lang)}/games/${game.id}/join`;
  }

  /**
   * @param {import("../types").PlayerRecord} player
   */
  getPlayerPublicUrl(player, lang = "") {
    const params = new URLSearchParams({ password: player.private_token });
    return `${this.#getPublicUrlLangPrefix(lang)}/players/${
      player.id
    }?${params}`;
  }

  #getPublicUrlLangPrefix(lang) {
    return lang ? `${this.host}/${lang}` : this.host;
  }
}
