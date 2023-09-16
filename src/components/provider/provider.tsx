"use client";
import { CONFIG } from "@/utils/constants/config";
import AxiosHelper from "@/utils/helpers/axios.helper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { FC, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

const Provider: FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            keepPreviousData: true,
            retry: false,
          },
          mutations: {
            retry: false,
          },
        },
      })
  );

  new AxiosHelper(CONFIG.API_URL);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
