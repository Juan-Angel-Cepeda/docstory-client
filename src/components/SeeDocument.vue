<template>
    <div v-if="document && document.obj">
      <h1>{{ document.obj._title }}</h1>
      <p>{{ document.obj._description }}</p>
      <!-- More document details here -->
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

    return { document };
  }
}
</script>

<style scoped>

</style>