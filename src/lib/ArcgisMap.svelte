<script lang="ts">
  import { onMount } from 'svelte';
  import '@arcgis/core/assets/esri/themes/light/main.css';
  import { MapService } from '../services/MapService';

  let mapService: MapService = null;

  onMount(() => {});

  function createMap(domNode: HTMLDivElement) {
    mapService = new MapService(domNode);
  }
</script>

<div id="myMap" class="map-container" use:createMap />

<style scoped>
  .map-container {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
