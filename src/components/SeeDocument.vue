<template>
    <div v-if="document && document.obj" class="card-container">
      <div class="card text-card">
        <h1 class="title card-title">{{ document.obj._title }}</h1>
  
        <div class="card-body">
          <div class="container">
            <div class="text">
              <p class="card-text">{{ document.obj._description }}</p>
              <p>Format: {{ document.obj._format }}</p>
              <p>Author: {{ document.obj._author }}</p>
              <p>Context: {{ document.obj._context }}</p>
              <p>Collection: {{ document.obj._colection }}</p>
              <p>Location: {{ document.obj._ubi }}</p>
              <p>Date: {{ formatDate(document.obj._date) }}</p>
            </div>
          </div>
          <div v-if="document.obj._relations.length">
            <p>Relations:</p>
            <ul>
              <li v-for="(relation, index) in document.obj._relations" :key="index">{{ relation }}</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="card carousel-card">
        <img :src="document.obj._photos[currentPhotoIndex]" alt="Document photo" class="card-img-top">
        <button @click="prevPhoto">Previous</button>
        <button @click="nextPhoto">Next</button>
      </div>
    </div>
  
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getDocumentById } from '../services/apiService';
  
  export default {
    props: ['id'],
    setup(props) {
      const document = ref(null);
      const currentPhotoIndex = ref(0);
  
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }
  
      const fetchDocument = async () => {
        console.log('Fetching document...');
  
        try {
          document.value = await getDocumentById(props.id);
          console.log('Fetched document:', document.value);
        } catch (error) {
          console.error('Failed to fetch document:', error);
        }
      }
  
      onMounted(fetchDocument);
  
      const nextPhoto = () => {
        if (currentPhotoIndex.value < document.value.obj._photos.length - 1) {
          currentPhotoIndex.value++;
        } else {
          currentPhotoIndex.value = 0; // loop back to the first photo
        }
      }
  
      const prevPhoto = () => {
        if (currentPhotoIndex.value > 0) {
          currentPhotoIndex.value--;
        } else {
          currentPhotoIndex.value = document.value.obj._photos.length - 1; // loop back to the last photo
        }
      }
  
      return { document, formatDate, currentPhotoIndex, nextPhoto, prevPhoto };
    }
  }
  </script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 20px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .title{
    text-align: center;
    font-family: 'Lobster', cursive;
  }
  p {
    font-family: 'Lobster', cursive;
  }
  .photo {
    align-self: flex-start;
  }
  img {
  width: 400px;  /* Ajusta este valor para cambiar el tamaño de la imagen */
  height: auto;  /* Asegura que la altura cambie proporcionalmente con el ancho */
  object-fit: contain;  /* Asegura que la imagen se ajuste a sus dimensiones sin recortar o estirar */
  }

  .card-container {
    display: flex;
    justify-content: space-between;
  }

  .text-card {
    flex-basis: 50%; /* Esto hará que la tarjeta ocupe la mitad del espacio disponible */
    margin-right: 10px; /* Añade un poco de espacio entre las tarjetas */
  }

  .carousel-card {
    flex-basis: 50%; /* Esto hará que la tarjeta ocupe la mitad del espacio disponible */
  }

</style>