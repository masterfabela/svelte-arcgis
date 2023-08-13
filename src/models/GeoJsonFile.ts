import type { GeoJsonFeature } from './GeoJsonFeature';

export interface GeoJsonFile {
  type: string;
  name: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
  features: GeoJsonFeature[];
}
