<script lang="ts">
  import ArcgisMap from './lib/ArcgisMap.svelte';
  import Map from '@arcgis/core/Map';
  import MapView from '@arcgis/core/views/MapView';

  const createMap = (domNode) => {
    const map = new Map({
      basemap: 'streets-vector',
    });
    // Create the mapView from the map
  };
</script>

<main>
  <div class="card">
    <ArcgisMap />
  </div>
</main>

<style>
  .card {
    height: 100vh;
    width: 100vw;
    padding: 0;
  }
</style>
