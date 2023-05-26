<template>
    <div class="container mt-5">
      <h2>Create a new Document</h2>
      <form @submit.prevent="createDocument" class="row g-3">
        <div class="col-6">
          <label class="form-label">Title</label>
          <input v-model="document.title" type="text" class="form-control" placeholder="Title" required>
        </div>
        <div class="col-6">
          <label class="form-label">Date</label>
          <input v-model="document.date" type="date" class="form-control" required>
        </div>
        <div class="col-12">
          <label class="form-label">Description</label>
          <textarea v-model="document.description" class="form-control" placeholder="Description" required></textarea>
        </div>
        <div class="col-6">
          <label class="form-label">Format</label>
          <select v-model="document.format" class="form-control" required>
            <option disabled value="">Please select one</option>
            <option value="LETTER">Letter</option>
            <option value="NEWSPAPER">Newspaper</option>
            <option value="PRINTED PUBLISH">Printed Publish</option>
            <option value="CARD">Card</option>
            <option value="OBJECT">Object</option>
            <option value="BOOK">Book</option>
            <option value="PICTURE">Picture</option>
          </select>
        </div>
        <div class="col-6">
          <label class="form-label">Select Place</label>
          <select v-model="document.placeId" class="form-control" required>
            <option disabled value="">Please select one</option>
            <option v-for="place in places" :key="place._id" :value="place._id">
              {{ place._name }}
            </option>
          </select>
        </div>
        <!-- Continúa con los otros campos siguiendo el mismo patrón -->
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Create Document</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        document: {
          title: '',
          date: '',
          description: '',
          format: '',
          placeId: '',
          authorId: '',
          senderId: '',
          reciverId: '',
          context: '',
          photos: [],
          colection: '',
          ubi: '',
          relations: []
        },
        places: [], // Asegúrate de llenar este array con los lugares disponibles
        // Asegúrate de llenar los siguientes arrays con la información correspondiente
        authors: [],
        people: [], // Para los campos senderId y reciverId
        documents: [] // Para el campo relations
      }
    },
    methods: {
      async createDocument() {
        // Aquí se implementa la lógica para crear el documento y enviar la petición al servidor
      }
    }
  }
</script>
<style scoped>

</style>