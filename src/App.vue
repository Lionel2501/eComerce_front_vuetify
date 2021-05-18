<template>
  <v-app>
    <v-app-bar
      app
      color="#D32F2F"
      dark
    >
      <div class="d-flex align-center">
        <h2>Shop store</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-avatar
          color="teal"
          size="30"
        ></v-avatar>
      </v-btn>

      <v-btn
        text>
        Salir
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
