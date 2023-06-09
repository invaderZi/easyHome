<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";

export default {
  props: ["address"],
  setup(props) {
    const mapContainer = ref(null);
    const map = ref(null);

    onMounted(() => {
      if (mapContainer.value) {
        map.value = L.map(mapContainer.value).setView([0, 0], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map.value);

        const markers = L.markerClusterGroup();

        watch(
          () => props.address,
          (newValue) => {
            geocodeAddress(newValue)
              .then((latLng) => {
                markers.clearLayers();

                const marker = L.marker(latLng);
                markers.addLayer(marker);

                map.value.addLayer(markers);
                map.value.setView(latLng, 15);
              })
              .catch((error) => {
                console.log("Erro ao geocodificar o endereço:", error);
              });
          }
        );
      }
    });

    async function geocodeAddress(address) {
      const encodedAddress = encodeURIComponent(address);
      const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        const result = data[0];
        const lat = parseFloat(result.lat);
        const lon = parseFloat(result.lon);
        return L.latLng(lat, lon);
      } else {
        throw new Error("Endereço não encontrado");
      }
    }

    return { mapContainer };
  },
};
</script>
