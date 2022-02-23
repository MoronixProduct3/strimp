<template>
  <v-container>
        <primary-row
            v-for="n in [2,3,4,5]"
            :key="n"
            :turn="n"
        />
        <v-text-field
            outlined
            label="Extras"
            suffix="VP"
            type="number"
        />
  </v-container>
</template>

<script>
import PrimaryRow from './PrimaryRow.vue'
export default {
  components: { PrimaryRow },

}
</script>

<style>

</style>