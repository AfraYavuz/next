import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Agent, GetAgentsParams } from "../interfaces/agents.interface";
import { AgentQueryKeys } from "@/utils/enums/enums";
import AxiosHelper from "@/utils/helpers/axios.helper";

export const useGetAgents = (
  params?: GetAgentsParams,
  options?: Omit<UseQueryOptions<Agent[]>, "queryKey">
) => {
  type Response = Promise<Agent[]>;
  return useQuery(
    [AgentQueryKeys.GetAgents, params],
    () =>
      AxiosHelper.instance.get("/agents", {
        params,
      }) as Response,
    options
  );
};
