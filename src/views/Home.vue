<template>
  <v-card outlined>
    <v-card-title>
      Catalogo de productos
    </v-card-title>
    <v-card-text>
    <v-row>
      <v-col cols="10" md="4" sm="6">
        <v-text-field
          label="Buscar producto"
          :rules="rules"
          hide-details="auto"
          color="black"
        ></v-text-field>
      </v-col>
      <v-col cols="2" md="2" sm="6">
        <v-btn
          color="green"
          text
          class="mt-4"
          outlined
          @click="openForm"
        >Nuevo producto</v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-top: -25px">
      <v-col cols="12" md="4" sm="12" v-for="(row, index) in productos" :key="index">
        <producto></producto>
      </v-col>
    </v-row>
    </v-card-text>
    <v-divider/>
    
  </v-card>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import producto from '../components/Producto';

  export default {
    name: 'Home',
    components: { producto },
    data:() => ({
      productos: [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5}
      ],
    
    }),
    methods:{
      openForm(){
        this.$router.push({name:'ProductoForm'});
      }
    }
  }
</script>
