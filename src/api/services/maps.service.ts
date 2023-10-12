import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Map, GetMapsParams } from "@/api/interfaces/maps.interface";
import { MapQueryKeys } from "@/utils/enums/enums";
import AxiosHelper from "@/utils/helpers/axios.helper";

export const useGetMaps = (
  params?: GetMapsParams,
  options?: Omit<UseQueryOptions<Map[]>, "queryKey">
) => {
  type Response = Promise<Map[]>;
  return useQuery(
    [MapQueryKeys.GetMaps, params],
    () =>
      AxiosHelper.instance.get("/maps", {
        params,
      }) as Response,
    options
  );
};
