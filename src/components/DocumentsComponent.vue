<template>
    <div class="document-container">
      <DocumentCard v-for="document in documents" :key="document._id" :document="document" />
    </div>
</template>
  
<script>
  import axios from 'axios';
  import DocumentCard from './DocumentCard.vue';
  
  export default {
    data() {
      return {
        documents: [],
      };
    },
    components: {
      DocumentCard,
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/documents');
        this.documents = response.data.obj;
        console.log(this.documents)
      } catch (error) {
        console.error(error);
      }
    },
  };
</script>
  
<style scoped>
  .document-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>