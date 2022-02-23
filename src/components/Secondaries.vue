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
                />
            </v-col>
            <v-col
                cols="4"
            >
                <v-text-field
                    outlined
                    type="number"
                    suffix="VP"
                />
            </v-col>
        </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>