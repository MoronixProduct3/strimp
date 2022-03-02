<template>
  <v-container>
        <primary-row
            v-for="n in [2,3,4,5]"
            :key="n"
            :turn="n"
            v-model="value.objectives[n-2]"
        />
        <v-text-field
            outlined
            label="Extras"
            suffix="VP"
            type="number"
            v-model.number="value.mission"
        />
  </v-container>
</template>

<script>
import PrimaryRow from './PrimaryRow.vue'
export default {
  components: { PrimaryRow },

  props: ['value']
}
</script>

<style>

</style>