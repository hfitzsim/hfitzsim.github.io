export interface Mountain {
    id: number;
    name: string;
    vertical: number;
    address: string;
    skiableArea: number;
    coordinates: {
      latitude: number;
      longitude: number
    };
    imgUrl: string;
    siteUrl: string;
    avgAnnualSnow: number;
    totalTrails: number;
    lifts: number;
    snowmaking: string;
    terrainParks: number;
    nightSkiing: string;
    seasonpass: string;
  }