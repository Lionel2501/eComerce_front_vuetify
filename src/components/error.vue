<template>
    <v-alert
        dense
        outlined
        type="error"
    >
        <div v-for="(v, k) in 'error'" :key="k">
            <p v-for="error in v" :key='error' class="text-sm">
                -   {{ error }}
            </p>
        </div>
    </v-alert>

</template>

<script>
export default {
    name:'error'
}
</script>