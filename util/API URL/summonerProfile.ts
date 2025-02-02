export const USER_API = {
  CREATE_NEW_USER: "/users/create",
  FETCH_NEW_USER_FROM_RIOT: "/users/fetchUser",
  FETCH_ALL_USERS: "/users",
  FETCH_USER_BY_PUUID: (puuid: string) => `/users/${puuid}`,
  PATCH_USER_BY_PUUID: (puuid: string) => `/users/${puuid}`,
  DELETE_USER_BY_PUUID: (puuid: string) => `/users/${puuid}`,
};

export const MATCH_API = {
  GET_PLAYER_MATCH_HISTORY: (puuid: string) => `/matches/by-puuid/${puuid}`,
  GET_MATCH_DETAIL_BY_MATCH_ID: (matchId: string) =>
    `/matches/by-match-id/${matchId}`,
};

export const LEADERBOARD_API = {
  GET_LEADERBOARD_BY_TIER: (tier: string) => `/leaderboard/by-tier/${tier}`,
};
