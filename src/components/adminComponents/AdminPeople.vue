<template>
  <AdminSidbar class="fixed"></AdminSidbar>
  <div class="container mt-5" style="margin-left: 15%;">
    <h2>Create a new person</h2>
    <form @submit.prevent="createPerson" class="row g-3">
      <div class="col-6">
        <label class="form-label">Name</label>
        <input v-model="person.name" type="text" class="form-control" placeholder="Name" required>
      </div>
      <div class="col-6">
        <label class="form-label">Last Name</label>
        <input v-model="person.lastName" type="text" class="form-control" placeholder="Last Name" required>
      </div>
      <div class="col-6">
        <label class="form-label">Date of Birth</label>
        <input v-model="person.date_of_birth" type="date" class="form-control" placeholder="Date of Birth" required>
      </div>
      <div class="col-6">
        <label class="form-label">Birth Place</label>
        <select v-model="person.birth_place_id" class="form-control" required>
          <option disabled value="">Please select one</option>
          <option v-for="place in places" :key="place._id" :value="place._id">
            {{ place._name }}
          </option>
        </select>
      </div>
      <div class="col-6">
        <label class="form-label">Date of Death</label>
        <input v-model="person.date_of_death" type="date" class="form-control" placeholder="Date of Birth" required>
      </div>
      <div class="col-6">
        <label class="form-label">Death Place</label>
        <select v-model="person.death_place_id" class="form-control">
          <option disabled value="">Please select one</option>
          <option v-for="place in places" :key="place._id" :value="place._id">
            {{ place._name }}
          </option>
        </select>
      </div>
      <div class="col-6">
        <label class="form-label">Select Father</label>
        <select v-model="person.fatherId" class="form-control" required>
          <option disabled value="">Please select one</option>
          <option v-for="person in people" :key="person._id" :value="person._id">
            {{person._name}}
            {{person._lastName}}
          </option>
        </select>
      </div>
      <div class="col-6">
        <label class="form-label">Select Mother</label>
        <select v-model="person.motherId" class="form-control" required>
          <option disabled value="">Please select one</option>
          <option v-for="person in people" :key="person._id" :value="person._id">
            {{person._name}}
            {{person._lastName}}
          </option>
        </select>
      </div>
      <div class="col-6">
        <label class="form-label">Children</label>
        <button type="button" class="btn btn-primary" @click="showAddChildModal">Add Child</button>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Create Person</button>
      </div>
    </form>
    <h2>Delete a person</h2>
    <form @submit.prevent="deletePerson" class="row g-3">
      <div class="col-6">
        <label class="form-label">Select Person</label>
        <select v-model="selectedPerson" class="form-control" required>
          <option disabled value="">Please select one</option>
          <option v-for="person in people" :key="person._id" :value="person._id">
            {{person._name}}
            {{person._lastName}}
          </option>
        </select>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-danger">Delete Person</button>
      </div>
    </form>
  </div>
  <div class="b-modal" tabindex="-1" role="dialog" v-if="showModal">
    <div class="b-modal-dialog" role="document">
      <div class="b-modal-content">
        <div class="b-modal-header">
          <h5 class="b-modal-title">Add Child</h5>
          <button type="button" class="close" @click="closeAddChildModal">
            <span>&times;</span>
          </button>
        </div>
        <div class="b-modal-body">
          <select v-model="selectedChild" class="form-control" required>
            <option disabled value="">Please select one</option>
            <option v-for="person in people" :key="person._id" :value="person._id">
              {{person._name}}
              {{person._lastName}}
            </option>
          </select>
        </div>
        <div class="b-modal-footer">
          <button type="button" class="btn btn-primary" @click="addChild">Add Child</button>
          <button type="button" class="btn btn-secondary" @click="closeAddChildModal">Close</button>
        </div>
      </div>
    </div>
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
        showModal:false,
        selectedChild:null,
        person: {
          name: '',
          lastName: '',
          date_of_birth:'',
          date_of_death:'',
          birth_place_id: '',
          death_place_id: '',
          fatherId:'',
          motherId:'',
          childrenIds: [],
          
          // Agrega más campos según necesites
        },
        people: [],
        places: [],
        selectedPerson: ''
      };
    },
    methods: {
      createPerson() {
        axios.post('https://docstory-jangelcepeda.b4a.run/admin/people', this.person)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      },
      deletePerson(){
        axios.delete(`https://docstory-jangelcepeda.b4a.run/admin/people/${this.selectedPerson}`)
             .then(response => {
                console.log(response)
             }).catch(err => {
                console.log(err)
             })
      },
      showAddChildModal(){
        this.showModal = true;
        this.$nextTick(()=>{
          
        })
      },
      closeAddChildModal(){
        this.showModal = false;
      },
      addChild(){
      if (this.selectedChild) {
        this.person.childrenIds.push(this.selectedChild);
        this.selectedChild = null;
      }
      this.closeAddChildModal();
      },

    },
    created(){
      axios.get('https://docstory-jangelcepeda.b4a.run/places')
            .then(response => {
              this.places = response.data.obj;
            }).catch(err => {
              console.log(err);
            });

      axios.get('https://docstory-jangelcepeda.b4a.run/people')
            .then(response => {
              this.people = response.data.obj;
            }).catch(err => {
              console.log(err);
            });
    }
  }

</script>

<style scoped>

</style>