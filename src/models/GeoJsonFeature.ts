export interface GeoJsonFeature {
  type: string;
  properties: {
    speed: number;
    direction: number;
    geometry: {
      type: 'Point' | 'LineString' | 'Polygon';
      coordinates: number[];
    };
  };
}
