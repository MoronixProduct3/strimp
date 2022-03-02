<template>
  <v-row>
        <v-col>
            Turn {{turn}}
        </v-col>
        <v-col>
            <v-checkbox
                v-model="value[0]"
                label="Hold 1+"
                />
        </v-col>
        <v-col>
            <v-checkbox
                v-model="value[1]"
                label="Hold 2+"
                />
        </v-col>
        <v-col>
            <v-checkbox
                v-model="value[2]"
                label="Hold More"
                />
        </v-col>
        <v-col>
            <v-text-field
                v-model="score"
                suffix="VP"
            />
        </v-col>
      </v-row>
</template>

<script>
export default {
    props: ['turn', 'value'],

    computed: {
        score: function() {
            return 4* this.value.reduce((sum,item)=> sum + item)
        }
    }
}
</script>

<style>

</style>