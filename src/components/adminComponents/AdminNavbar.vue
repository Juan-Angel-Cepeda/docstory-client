<template>
    <nav class="navbar">
      <ul class="navbar-links">
        <li><router-link to='/' class='navbar-button'>Home</router-link></li>
        <li><router-link to='/admin/documents' class='navbar-button'>Admin Documents</router-link></li>
        <li><router-link to='/admin/places' class="navbar-button">Admin Places</router-link></li>
        <li><router-link to='/admin/people' class='navbar-button'>Admin People</router-link></li>
        <li><router-link to='/documents' class='navbar-button'>See Documents</router-link></li>
        <li><router-link to='/places' class='navbar-button'>See Places</router-link></li>
        <li><router-link to='/people' class='navbar-button'>See People</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
  name: 'AdminNavbar',
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  .navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  color: #dd5100; /* Color del texto */
  padding: 12px;
  width: 100%;
  }
  
  .navbar-links {
  display: flex;
  gap: 10px; /* Espacio entre los botones */
  list-style: none;
  margin: 0;
  padding: 0;
  }
  
  .navbar-button {
    background-color: rgba(255, 255, 255, 0.274); /* color de fondo naranja */
    border: none;
    color: rgb(0, 0, 0); /* texto negro */
    cursor: pointer;
    padding: 10px 20px; /* esto determina el tamaño del botón, ajústalo a tu gusto */
    border-radius: 8px; /* esto hace que el botón sea redondo, ajústalo a tu gusto */
    margin-left: 10px; /* espacio a la izquierda del botón */
    font-family: 'montserrat';
    text-decoration: none; /* quita el subrayado del texto */
  }
  .navbar-button.login{
    margin-left: auto;
  }
  </style>