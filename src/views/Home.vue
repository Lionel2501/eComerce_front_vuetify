<template>
  <v-card outlined>
    <v-card-title>
      Catalogo de productos
    </v-card-title>
    <v-card-text v-for="(row, producto) in producto" :key="producto">

    </v-card-text>
    <v-divider/>
  </v-card>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'

  export default {
    name: '',

    components: {

    },
  }
</script>
