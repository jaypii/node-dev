<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
      <router-link to="/" class="navbar-brand">Vue Client</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <!-- Header -->
    <div class="card mt-3 p-3 bg-light">
      <h2 class="display-5 text-center">Vue 3 Frontend</h2>
      <p class="lead text-center">using Routing, Bootstrap 5 and Node Sequelize (MySQL) Backend</p>
      <p class="text-center text-warning">Start on Port 8081!</p>
    </div>
    <div class="container mt-3">
      <div class="card p-3 mt-3">
        <router-view />
      </div>
    </div>

    <!-- Footer -->
    <div class="row mt-3 p-3 bg-light">
      <div class="col"><p>&copy; 2021, J. Polzin</p></div>
      <div class="col"><p>&nbsp;</p></div>
      <div class="col">
        <p class="float-end">{{currentDateTime()}}</p>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    currentDateTime() {
      const current = new Date();
      const date = current.getDate() +'.'+ (current.getMonth()+1) +'.'+ current.getFullYear();
      const time = current.getHours() + ":" + current.getMinutes();
      const dateTime = date +' '+ time;
      return dateTime;
    }
  }
}
</script>