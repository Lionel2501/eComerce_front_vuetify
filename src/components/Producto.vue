<template>
    <div>
    <v-card
        class="mx-auto my-12"
        max-width="300"
    >
        <v-img
            @click="dialogImagen = !dialogImagen"
            height="150"
            :src="producto.url_imagen !== null && producto.url_imagen.includes('http') ?
            producto.url_imagen :  
            'http://localhost:8081/imagenes/' + producto.url_imagen"
        ></v-img>

        <v-card-title>{{ producto.codigo }} | {{ producto.nombre }}</v-card-title>

        <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
            ></v-rating>

            <div class="grey--text ml-4">
                4.5 (413)
            </div>
        </v-row>

        <div class="my-4 subtitle-1">
            $ {{ producto.precio }}
        </div>

        <div>{{producto.descripcion}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
        <v-chip-group
            active-class="deep-purple accent-4 white--text"
            column
        >
            <v-chip @click="setLike">
                <v-icon >mdi-thumb-up-outline</v-icon>  ( {{ producto.like }} )
            </v-chip>
            <v-chip @click="setDislike">
                <v-icon>mdi-thumb-down-outline</v-icon> ( {{ producto.dislike }} )
            </v-chip>
        </v-chip-group>
        </v-card-text>

        <v-card-actions>
        <v-btn
            color="green"
            text
            @click="openEdit"
        >
            Editar
        </v-btn>
        <v-btn
            @click="deleteProduct"
            color="red"
            text
        >
            Eliminar
        </v-btn>
        </v-card-actions>

        <v-dialog 
          max-width="500px"
          v-model="dialogImagen"
        >
        <drop-image
            :producto="producto"
            @salir="dialogImagen = false"
            @click="dialog = !dialog"
            @listar="$emit('listar')"
        >
        </drop-image>
        </v-dialog>
    </v-card>
    </div>
</template>

<script>
import DropImage from './DropImage.vue';
import { mapState } from "vuex";

  export default {
  components: { DropImage },
    name: 'producto',
    methods:{
        openEdit(){
            this.$router.push({name:'EditForm', params:{id: this.producto.id}});
        },
        deleteProduct(){
            if(confirm("Usted quiere eliminar ese producto ?")){
                const url = this.url + "productos/" + this.producto.id
                this.axios.delete(url).then(response => {
                    if(response.data.res == true){
                        this.$toastr.success(response.data.message)
                        this.$emit('listar')
                    }
                })
            }
        },
        setLike(){
            const url = this.url + "set_like/" + this.producto.id
            this.axios.put(url).then(response => {
                if(response.data.res === true){
                    this.$toastr.success('se agrego un like')
                    console.log('se recibio el like')
                    this.producto.like++
                } else {
                    this.$toastr.success('no se agrego un like')
                }
            })
        },
        setDislike(){
            const url = this.url + "set_dislike/" + this.producto.id
            this.axios.put(url).then(response => {
                if(response.data.res === true){
                    console.log('se recibio el dislike')
                    this.producto.dislike++
                }
            })
        }
    }, 

    computed:{
      ...mapState(['url'])
    },

    props:['producto'],

    data:() => ({
        dialogImagen:false
    })
  }
</script>
