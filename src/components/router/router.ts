import { Routes } from "@/utils/enums/enums";

export type RouteItem = {
  title: string;
  route: () => string;
  hide?: {
    header?: boolean;
  };
};

export const routes: { [key: string]: RouteItem } = {
  homepage: {
    title: "Homepage",
    route: () => Routes.Homepage,
    hide: {
      header: true,
    },
  },
  weapons: {
    title: "Wepaons",
    route: () => Routes.Weapons,
  },
  maps: {
    title: "Maps",
    route: () => Routes.Maps,
  },
  agents: { title: "Agents", route: () => Routes.Agents },
};
