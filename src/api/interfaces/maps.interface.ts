export interface Maps {
  status: number;
  data: {
    uuid: string;
    displayName: string;
    narrativeDescription: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    splash: string;
    assetPath: string;
    mapUrl: string;
    xMultiplier: number;
    yMultiplier: number;
    xScalarToAdd: number;
    yScalarToAdd: number;
    callouts: Callout[];
  };
}
interface Callout {
  regionName: string;
  superRegionName: string;
  location: {
    x: number;
    y: number;
  };
}
