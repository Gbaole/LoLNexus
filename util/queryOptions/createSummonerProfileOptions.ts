import { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { fetchUserByPUUID } from "../actions/userActions";
import { UserType } from "../type/userType";

export default function createSummonerProfileOptions(
  puuid: string
): UseSuspenseQueryOptions<UserType, Error, UserType, [string, string]> {
  return {
    queryKey: ["summonerProfile", puuid],
    queryFn: () => fetchUserByPUUID(puuid),
  };
}
