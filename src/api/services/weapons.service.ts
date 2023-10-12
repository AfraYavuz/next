import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Weapon, GetWeaponsParams } from "../interfaces/weapons.interface";
import { WeaponQueryKeys } from "@/utils/enums/enums";
import AxiosHelper from "@/utils/helpers/axios.helper";

export const useGetWeapons = (
  params?: GetWeaponsParams,
  options?: Omit<UseQueryOptions<Weapon[]>, "queryKey">
) => {
  type Response = Promise<Weapon[]>;
  return useQuery(
    [WeaponQueryKeys.GetWeapons, params],
    () =>
      AxiosHelper.instance.get("/weapons", {
        params,
      }) as Response,
    options
  );
};
