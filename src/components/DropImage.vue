<template>
    <v-card outlined>
        <v-form
          method="post"
          id="postImage"
          enctype="multipart/form-data">
        <v-card-title>
            <h3>Cargar imagen del producto</h3>
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
                type="file" 
                ref="url_imagen" 
                id="url_imagen" 
                name="url_imagen"
                accept="image/gif, image/png, image/jpg, image/jpeg"
                required>
        </v-card-text>
        <v-card-actions>
        <v-btn
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
export default {
    name:'dropImage', 
    
}
</script>