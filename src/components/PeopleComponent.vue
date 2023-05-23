<template>
    <div class="people-container">
      <PersonCard v-for="person in people" :key="person._id" :person="person" />
    </div>
</template>
  
<script>
  import axios from 'axios';
  import PersonCard from './PersonCard.vue';
  
  export default {
    data() {
      return {
        people: [],
      };
    },
    components: {
      PersonCard,
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/people');
        this.people = response.data.obj;
      } catch (error) {
        console.error(error);
      }
    },
  };
</script>
  
<style scoped>
  .people-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>