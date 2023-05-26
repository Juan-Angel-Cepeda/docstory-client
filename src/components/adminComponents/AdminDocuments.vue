<template>
    <AdminNavbar></AdminNavbar>
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
        <div class="col-6">
          <label class="form-label">Select Author</label>
          <select v-model="document.authorId" class="form-control" required>
            <option disabled value="">Please select one</option>
            <option v-for="person in people" :key="person._id" :value="person._id">
              {{ person._name }} {{ person._lastName }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <label class="form-label">Select Sender</label>
          <select v-model="document.senderId" class="form-control" required>
            <option disabled value="">Please select one</option>
            <option v-for="person in people" :key="person._id" :value="person._id">
              {{ person._name }} {{ person._lastName }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <label class="form-label">Select Reciver</label>
          <select v-model="document.reciverId" class="form-control" required>
            <option disabled value="">Please select one</option>
            <option v-for="person in people" :key="person._id" :value="person._id">
              {{ person._name }} {{ person._lastName }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <label class="form-label">Colection</label>
          <input v-model="document.colection" type="text" class="form-control" placeholder="Colection" required>
        </div>
        <div class="col-6">
          <label class="form-label">Where is the document</label>
          <input v-model="document.ubi" type="text" class="form-control" placeholder="ubi" required>
        </div>
        
        <div class="col-6" v-for="(photo, index) in document.photos" :key="index">
          <label class="form-label">Link to the Photo</label>
          <input v-model="document.photos" type="text" class="form-control" placeholder="Link to the Photos" required>
        </div>
        
        <div class="col-12">
          <label class="form-label">Context</label>
          <input v-model="document.photos[index]" type="text" class="form-control" placeholder="Link to the Photos" required>
          <button type="button" @click="addPhotoField">Add another photo</button>
        </div>
        <div class="col-6">
          <label class="form-label">Relations With Other Documents</label>
          <select v-model="document.relations" class="form-control" multiple required>
            <option disabled value="">Please select one</option>
            <option v-for="document in documents" :key="document._id" :value="document._id">
              {{ document._title }}
            </option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Create Document</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
    import AdminNavbar from './AdminNavbar.vue';
    import axios from 'axios';
    export default {
    data() {
        return {
            document: {
                title: "",
                date: "",
                description: "",
                format: "",
                placeId: "",
                authorId: "",
                senderId: "",
                reciverId: "",
                context: "",
                photos: [""],
                colection: "",
                ubi: "",
                relations: []
            },
            places: [],
            authors: [],
            people: [],
            documents: []
        };
    },
    methods: {
        async createDocument() {
            axios.post("https://docstory-jangelcepeda.b4a.run/admin/documents", this.document)
                .then(response => {
                console.log(response);
            })
                .catch(error => {
                console.log(error);
            });
        },
        addPhotoField() {
            this.document.photos.push("");
        }
    },
    created() {
        axios.get("https://docstory-jangelcepeda.b4a.run/places")
            .then(response => {
            this.places = response.data.obj;
        }).catch(err => {
            console.log(err);
        });
        axios.get("https://docstory-jangelcepeda.b4a.run/people")
            .then(response => {
            this.people = response.data.obj;
        }).catch(err => {
            console.log(err);
        });
        axios.get("https://docstory-jangelcepeda.b4a.run/documents")
            .then(response => {
            this.documents = response.data.obj;
        }).catch(err => {
            console.log(err);
        });
    },
    components: { AdminNavbar }
}
</script>
<style scoped>

</style>