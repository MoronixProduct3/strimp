<template>
  <v-container>
        <v-row
            v-for="n in 3"
            :key="n"
        >
            <v-col
                cols="8"
            >
                <v-text-field
                    label="Nom"
                    v-model="value[n-1].name"
                />
            </v-col>
            <v-col
                cols="4"
            >
                <v-text-field
                    outlined
                    type="number"
                    suffix="VP"
                    v-model.number="value[n-1].points"
                />
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {
    props:['value']
}
</script>

<style>

</style>