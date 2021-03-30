<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        <img src="./assets/logo.png" height="30px" alt="Vue Logo"/>&nbsp;Vuetify Example
      </div>

      <v-btn to="/tutorials" text>
        Tutorials
      </v-btn>

      <v-btn to="/add" text>
        Add
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer color="black">
      <v-col cols="4" class="white--text">
        &copy; 2021, J. Polzin
      </v-col>
      <v-col cols="4" class="text-center white--text">
        &nbsp;
      </v-col>
      <v-col cols="4" class="text-right white--text">
        &nbsp;
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>
