<template>
    <div class="document-card">
      <h2>{{ document._title }}</h2>
      <p>Date: {{ formatDate(document._date) }}</p>
      <p>Description: {{ document._description }}</p>
      <p>Colection: {{ document._colection }}</p>

      <!-- Agrega más campos según sea necesario -->
    </div>
</template>
  
<script>
  export default {
    props: {
      document: Object,
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
  };
</script>
  
<style scoped>
  /* Estilos de tu elección */
</style>