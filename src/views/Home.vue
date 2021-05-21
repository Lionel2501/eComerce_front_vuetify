<template>
  <v-card outlined :loading="loading">
    <v-card-title>
      Catalogo de productos
    <v-spacer></v-spacer>
    <v-btn
      color="green"
      text
      class="mt-4"
      @click="openForm"
    >Nuevo producto
    </v-btn>
    </v-card-title>
    <v-card-text>
    <v-row>
      <v-col cols="10" md="4" sm="6">
        <v-text-field
          v-model="txtSearch"
          label="Buscar producto"
          :rules="rules"
          hide-details="auto"
          color="black"
        ></v-text-field>
      </v-col>
      <v-col cols="2" md="2" sm="6">
        <v-btn
          @click="getProductos"
          outlined
          color="green"
          text
          class="mt-4"
        >Buscar
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-top: -25px">
      <v-col cols="12" md="4" sm="12" v-for="(row, index) in productos" :key="index">
        <producto
          :producto="row"  
          @listar="getProductos"
        ></producto>
      </v-col>
    </v-row>
    </v-card-text>
    <v-divider/>
    
  </v-card>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import producto from '../components/Producto';
  import { mapState } from "vuex";

  export default {
    name: 'Home',
    components: { producto },
    data:() => ({
      productos: [],
      loading: false,
      txtSearch:""
    }),
    computed:{
      ...mapState(['url'])
    },
    mounted(){
      this.getProductos();
    },
    methods:{
      openForm(){
        this.$router.push({name:'ProductoForm'});
      },
      getProductos(){
        this.loading = true
        const url = this.url + "productos" + "/?buscar=" + this.txtSearch;
        console.log(url)
        this.axios.get(url).then(response => {
          console.log(response.data)
          this.productos = response.data;
          this.loading = false
        })
      }
    }
  }
</script>
