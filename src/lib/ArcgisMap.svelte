<script lang="ts">
  import '@arcgis/core/assets/esri/themes/light/main.css';
  import { MapService } from '../services/MapService';

  let mapService: MapService;

  function createMap(domNode: HTMLDivElement) {
    mapService = new MapService(domNode);
  }
</script>

<div id="myMap" class="map-container" use:createMap />

<style lang="scss" scoped>
  .map-container {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    :global(.esri-view-surface) {
      &:focus {
        padding: 0;
        margin: 0;
        outline: none;
        &::after {
          outline: none;
        }
      }
    }
    :global(.esri-attribution) {
      display: none;
    }
  }
</style>
