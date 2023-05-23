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
        // Crear el mapa
        this.map = L.map('mapid').setView([51.505, -0.09], 2);
        // Añadir la capa de tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
        }).addTo(this.map);
        let customIcon = L.divIcon({
            iconUrl:`url(public/images/ubicacion.png)`,
            iconSize: [38, 95], // Especifica el tamaño del ícono aquí. Los valores son [ancho, alto]
            iconAnchor: [22, 94], // Especifica el punto de anclaje del ícono. Los valores son [izquierda, arriba]
            popupAnchor: [-3, -76] 
        })
      // Obtener los lugares del servidor
        try{
            let response = await axios.get('http://localhost:3000/places');
            let places = response.data.obj
            L.marker([places[0]._latitud, places[0]._longitud],{icon:customIcon}).addTo(this.map).bindPopup(places[0]._name).openPopup();
            //if(this.map){
            //    for(let i; i <= places.length;i++){
            
            //    }
            //}   
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