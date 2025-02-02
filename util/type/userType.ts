export type UserType = {
  _id: string;
  puuid: string;
  gameName: string;
  tagLine: string;
  LoL: {
    id: string;
    accountId: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
  };
};
