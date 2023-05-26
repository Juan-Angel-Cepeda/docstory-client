<template>
    <div class="sidebar">
      <ul>
        <li><router-link to='/admin/documents' class='sidebar-button'>Documents</router-link></li>
        <li><router-link to='/admin/people' class='sidebar-button'>People</router-link></li>
        <li><router-link to='/admin/places' class="sidebar-button">Places</router-link></li>
      </ul>
    </div>
  </template>
  
<script>
  export default {
    name: 'AdminSidebar'
  }
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.sidebar {
  display: flex-start;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: black;
  color: #dd5100; /* Color del texto */
  padding: 10px;
  width: 15%; /* La barra lateral toma 1/5 del ancho de la página */
  height: 100vh; /* La barra lateral toma toda la altura de la página */
  position: fixed; /* La barra lateral se mantiene en su lugar al desplazarse */
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.sidebar a {
  color: black; /* Color del texto de los enlaces */
  font-family: 'Lobster', cursive;
  text-decoration: none;
  margin: 10px 0; /* Espacio entre los enlaces */
}

.sidebar a:hover {
  color: #ffffff; /* Cambia el color del texto al pasar el mouse por encima */
}

.sidebar-button {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  background-color: rgb(221, 81, 0); /* color de fondo naranja */
  border: none;
  color: rgb(255, 255, 255); /* texto negro */
  cursor: pointer;
  padding: 10px 20px; /* esto determina el tamaño del botón, ajústalo a tu gusto */
  border-radius: 15px; /* esto hace que el botón sea redondo, ajústalo a tu gusto */
  margin: 10px 0; /* espacio arriba y abajo del botón */
  font-family: 'Lobster', cursive;
}
</style>
