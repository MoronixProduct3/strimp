<template>
  <v-row>
        <v-col>
            Turn {{turn}}
        </v-col>
        <v-col>
            <v-checkbox
                v-model="cond1"
                label="Hold 1+"
                />
        </v-col>
        <v-col>
            <v-checkbox
                v-model="cond2"
                label="Hold 2+"
                />
        </v-col>
        <v-col>
            <v-checkbox
                v-model="cond3"
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
    props: ['turn'],

    data() {
        return {
            cond1:false,
            cond2:false,
            cond3:false,
        }
    },
    computed: {
        score: function() {
            return 4*(this.cond1+this.cond2+this.cond3)
        }
    }
}
</script>

<style>

</style>