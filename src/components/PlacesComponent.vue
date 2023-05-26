<template>
    <div class="places-container">
      <PlaceCard v-for="place in places" :key="place._id" :place="place" />
    </div>
  </template>
  
<script>
  import axios from 'axios';
  import PlaceCard from './PlaceCard.vue';
  
  export default {
    data() {
      return {
        places: [],
      };
    },
    components: {
      PlaceCard,
    },
    async created() {
      try {
        const response = await axios.get('https://docstory-jangelcepeda.b4a.run/places');
        this.places = response.data.obj;
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  
  <style scoped>
  .places-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: gray;
  }
  </style>