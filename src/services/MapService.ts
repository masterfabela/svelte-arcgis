import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery.js';
import Basemap from '@arcgis/core/Basemap.js';
import WebTileLayer from '@arcgis/core/layers/WebTileLayer.js';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer.js';
import TileLayer from '@arcgis/core/layers/TileLayer.js';
import { SECRETS } from '../secrets';

export class MapService {
  private map: Map;
  private view: SceneView;

  constructor(domNode: HTMLDivElement) {
    this.map = new Map({
      basemap: 'streets',
    });
    this.view = new SceneView({
      container: domNode,
      map: new Map({ basemap: 'hybrid', ground: 'world-elevation' }),
      zoom: 8,
    });
    this.addMapToogle();
    //this.addBaseMapGallery();
  }

  async addMapToogle() {
    const basemapToggle = new BasemapToggle({
      view: this.view,
      nextBasemap: await this.getSecondaryBaseMap(),
      visible: true,
    });
    this.view.ui.add(basemapToggle, 'top-right');
  }

  addBaseMapGallery() {
    const baseMapGallery = new BasemapGallery({
      view: this.view,
    });
    this.view.ui.add(baseMapGallery, 'top-right');
  }

  async getSecondaryBaseMap() {
    const outdoorLayer = new VectorTileLayer({
      portalItem: {
        id: '659e7c1b1e374f6c8a89eefe17b23380', // World Hillshade
      },
      title: 'Outdoor',
    });
    return new Basemap({
      baseLayers: [outdoorLayer],
    });
  }
}
