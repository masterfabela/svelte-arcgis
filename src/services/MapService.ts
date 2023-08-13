import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import * as windData from './wind.json';
import type { GeoJsonFeature } from '../models/GeoJsonFeature';

export class MapService {
  private map: Map;
  private view: SceneView;

  constructor(domNode: HTMLDivElement) {
    this.init(domNode);
  }

  private init(domNode: HTMLDivElement) {
    this.map = new Map({
      basemap: 'streets-vector',
    });
    this.view = new SceneView({
      container: domNode,
      map: new Map({ basemap: 'hybrid', ground: 'world-elevation' }),
      zoom: 8,
    });
  }
}
