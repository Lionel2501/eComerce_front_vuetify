<template>
    <v-card outlined>
        <v-card-title>
            <h3>Nuevo / Editar producto</h3>
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
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    v-model="codigo"
                    :counter="10"
                    label="Codigo"
                    type="number"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="nombre"
                    label="Nombre"
                    required
                ></v-text-field>

                <v-textarea
                    label="Descripcion"
                    required
                ></v-textarea>

                <v-text-field
                    label="Precio"
                    type="number"
                    required
                ></v-text-field>

                <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
                ></v-select>

                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                ></v-checkbox>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Validate
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>

                <v-btn
                color="warning"
                @click="resetValidation"
                >
                Reset Validation
                </v-btn>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn
            outlined
                color="green"
                @click="openEdit"
            >
                Guardar
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    name: 'producto-form',
  }
</script>

<style lang="">
    
</style>