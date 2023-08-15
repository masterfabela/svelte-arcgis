import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery.js';

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

  addMapToogle() {
    const basemapToggle = new BasemapToggle({
      view: this.view,
      nextBasemap: 'topo-vector',
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
}
