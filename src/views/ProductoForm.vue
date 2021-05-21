<template>
    <v-card outlined :loading="loading">
        <v-form
            @submit.prevent="save"
            ref="form"
            v-model="valid"
            lazy-validation
        >
        <v-card-title>
            <h3>{{ isNew ? 'Nuevo' : 'Editar'}} producto</h3>
            <v-spacer></v-spacer>
            <v-btn
                outlined
                @click="$router.back()"
            >
                Volver
            </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-text-field
                v-model="product.codigo"
                :counter="10"
                label="Codigo"
                type="number"
                required
                :rules="[
                    (v) => !! v || 'Codigo es requerido',
                    v => (v && v.lenght >= 3 && v.lenght <= 5) || 'El codigo debe tener entre 3 y 5 carcater'
                ]"
            ></v-text-field>
            
            <v-text-field
                v-model="product.nombre"
                label="Nombre"
                
            ></v-text-field>

            <v-textarea
                v-model="product.descripcion"
                label="Descripcion"
                
            ></v-textarea>

            <v-text-field
                v-model="product.precio"
                label="Precio"
                type="number"
                
            ></v-text-field>               
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                outlined
                color="green"
                type="submit"
            >
                Guardar
            </v-btn>
        </v-card-actions>
        <pre>
            {{ product }}
        </pre>
    </v-form>
    </v-card>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: 'producto-form',
    data: () => ({
        isNew: true,
        product: {
            user:{}
        },
        loading: false
    }),
    created(){
        this.isNew = !this.$route.params.id
    },
    mounted(){
        if(!this.isNew){
            this.getProducto();
        }
    },
    computed:{
      ...mapState(['url'])
    },
    methods:{
        getProducto(){
        const url = this.url + "productos/" + this.$route.params.id;
        console.log(url)
            this.axios.get(url).then(response => {
            console.log(response.data)
            this.product = response.data;
            })
        },
        save(){
            if(!this.$refs.form.validate())
                return;
                
            let url = "";

            if(!this.isNew){
                url = this.url + "productos/" + this.$route.params.id;
                this.axios.put(url).then(response => {
                    if(response.data.res == true){
                        console.log(response)
                        this.$toastr.success(response.data.message)
                    } else {
                        this.$toastr.error(response.data.message)
                    }
                })
            }else {
                url = this.url + "productos";
                this.axios.post(url);
            } 
            
        }        
    }
  }
</script>

<style lang="">
    
</style>