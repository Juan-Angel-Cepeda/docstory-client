<template>
    <div class="map-page">
      <h1>Main Map</h1>
      <div id="mapid" style="height: 80vh;"></div>
    </div>
</template>
  
<script>
  import L from 'leaflet';
  import axios from 'axios';
  
  export default {
    name: 'MainMap',
    data() {
      return {
        map: null,
        places:[]
      };
    },
    async mounted(){
        this.map = L.map('mapid').setView([51.505, -0.09], 2);
        // Añadir la capa de tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
        }).addTo(this.map);
        let customIcon = L.icon({
            iconUrl:`/images/ubicacion.png`,
            iconSize: [30, 30], // Especifica el tamaño del ícono aquí. Los valores son [ancho, alto]
            iconAnchor: [20, 90], // Especifica el punto de anclaje del ícono. Los valores son [izquierda, arriba]
            popupAnchor: [-3, -76] 
        })
        try{
            let response = await axios.get('http://localhost:3000/places');
            let places = response.data.obj
            if(this.map){
              places.forEach(place => {
                L.marker([place._latitud, place._longitud],{icon:customIcon}).addTo(this.map).bindPopup(place._name).openPopup();
              });
            } 
        }catch(error){
            console.log(error)
        }
    },
    };
</script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  @import url('../../node_modules/leaflet/dist/leaflet.css');  
  .map-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: orange;
    height: 100vh;
  }
  
  h1 {
    color: black;
    font-family: 'Lobster', cursive;
  }
  
  #mapid {
    width: 100%;
  }
</style>