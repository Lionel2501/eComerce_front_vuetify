<template>
    <v-card outlined>
        <v-form
          @submit.prevent="save"
          method="post"
          id="postImage"
          enctype="multipart/form-data">
        <v-card-title>
            <h3>Cargar la imagen del producto: {{ producto.codigo }} </h3>
            <v-spacer></v-spacer>
            <v-btn
                @click="salir"
                icon
            >
                <v-icon
                    @click="$emit('salir')"
                >mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <input 
                @change="chooseFile"
                type="file" 
                ref="url_imagen" 
                id="url_imagen" 
                name="url_imagen"
                accept="image/gif, image/png, image/jpg, image/jpeg"
                required>
        </v-card-text>
        <v-card-actions>
        <v-btn
            :loading="loading"
            color="green"
            block
            type="submit"
        >
            Subir imagen
        </v-btn>
        </v-card-actions>
         </v-form>
    </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
    name:'dropImage', 
    props:['producto'],
    data:() => ({
        loading:false,
        file:null
    }),
    computed:{
        
      ...mapState(['url'])
    },
    methods:{
        chooseFile(event){
            this.file = event.target.files[0]
            console.log(this.file)
        },
        save(){
            this.loading = true
            const url = this.url + "set_imagen/" + this.producto.id;
            let data = new FormData();
            data.append('imagen', this.file);
            data.append('_method', 'PUT');

            this.axios.post(url, data).then(response => {
                if(response.data.res == true){
                    this.$toastr.success(response.data.message)
                    this.$emit('listar')
                    this.$emit('salir')
                } else {
                    return false;
                }
            })
            this.loading = false
        }        
    }
    
}
</script>