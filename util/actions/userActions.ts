import { USER_API } from "../API URL/summonerProfile";
import { UserType } from "../type/userType";

const BACKEND_DOMAIN = process.env.BACKEND_DOMAIN || "http://localhost:4000";

export const fetchUserByPUUID = async (puuid: string): Promise<UserType> => {
  const url = `${BACKEND_DOMAIN}${USER_API.FETCH_USER_BY_PUUID(puuid)}`;
  console.log("URL:", url);
  const response = await fetch(url);
  return await response.json();
};
