<template>
    <AdminSidbar class="fixed"></AdminSidbar>
    <div class="container mt-5" style="margin-left: 15%;">
      <h2>Create a new place</h2>
      <form @submit.prevent="createPlace" class="row g-3">
        <div class="col-6">
          <label class="form-label">Name</label>
          <input v-model="place.name" type="text" class="form-control" placeholder="Name" required>
        </div>
        <div class="col-6">
          <label class="form-label">Description</label>
          <input v-model="place.description" type="text" class="form-control" placeholder="Description" required>
        </div>
        <div class="col-6">
          <label class="form-label">Country</label>
          <input v-model="place.country" type="text" class="form-control" placeholder="Country" required>
        </div>
        <div class="col-6">
          <label class="form-label">City</label>
          <input v-model="place.city" type="text" class="form-control" placeholder="City" required>
        </div>
        <div class="col-6">
          <label class="form-label">Street</label>
          <input v-model="place.street" type="text" class="form-control" placeholder="Street" required>
        </div>
        <div class="col-6">
          <label class="form-label">Number</label>
          <input v-model="place.number" type="number" class="form-control" placeholder="Number" required>
        </div>
        <div class="col-6">
          <label class="form-label">Interior</label>
          <input v-model="place.interior" type="text" class="form-control" placeholder="Interior">
        </div>
        <div class="col-6">
          <label class="form-label">ZIP</label>
          <input v-model="place.zip" type="number" class="form-control" placeholder="ZIP" required>
        </div>
        <div class="col-6">
          <label class="form-label">Latitude</label>
          <input v-model="place.latitud" type="text" class="form-control" placeholder="Latitude" required>
        </div>
        <div class="col-6">
          <label class="form-label">Longitude</label>
          <input v-model="place.longitud" type="text" class="form-control" placeholder="Longitude" required>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Create Place</button>
        </div>
      </form>
    </div>
  </template>
<script>
  import axios from 'axios';
  import AdminSidbar from './AdminSidebar.vue'
  
  export default {
    components:{
            AdminSidbar
    },
    data() {
      return {
        place: {
          name: '',
          description: '',
          country: '',
          city: '',
          street: '',
          number: '',
          interior: '',
          zip: '',
          latitud: '',
          longitud: ''
        }
      };
    },
    methods: {
      createPlace() {
        axios.post('http://localhost:3000/admin/places', this.place)
          .then(response => {
            console.log(response);
            // puedes agregar aquí cualquier acción adicional, como redirigir al usuario o mostrar un mensaje de éxito
          })
          .catch(error => {
            console.log(error);
            // puedes agregar aquí cualquier acción adicional, como mostrar un mensaje de error
          });
      }
    }
  };
</script>
<style scoped>
.fixed{
    display: fixed;
}


</style>
