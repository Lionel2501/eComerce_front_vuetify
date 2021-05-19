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
        @click="dialog = !dialog"
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

    <v-dialog
      v-model="dialog"
      max-width="500px"
      >
    <login
      @salir="salir"
    ></login>
    </v-dialog>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',
  components: {Login},

  data: () => ({
    dialog:false
  }),
  methods:{
    salir(){
        this.dialog = false
    }
  }

  
};
</script>
