<template>
    <v-card outlined>
        <v-card-title>
            <h3>Logearse</h3>
            <v-spacer></v-spacer>
            <v-btn
                @click="salir"
                outlined
            >
                Salir
            </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                label="Email"
                type="email"
                required
            ></v-text-field>

            <v-text-field
                label="Password"
                type="password"
                required
            ></v-text-field>
            <v-spacer></v-spacer>

            <v-btn
            outlined
            block
            color="green"
            class="mr-4"
            @click="validate"
            >
            Confirmar
            </v-btn>
        </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name:'Login',
    methods:{
        salir(){
            this.$emit("salir")
        }
    }
}
</script>