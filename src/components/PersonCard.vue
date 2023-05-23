<template>
    <div class="person-card">
      <h2>{{ person._name }} {{ person._lastName }}</h2>
      <p>Born: {{ formatDate(person._date_of_birth) }}</p>
      <p>Birth Place: {{ person._birth_place._name }}, {{ person._birth_place._city }}, {{ person._birth_place._country }}</p>
    </div>
  </template>
  
<script>
  export default {
    props: {
      person: Object,
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
  };
</script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  .person-card {
    font-family: 'Lobster', cursive;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
    padding: 10px;
    margin: 10px;
    background-color: orange;
  }
</style>