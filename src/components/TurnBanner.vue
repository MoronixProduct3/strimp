<template>
    <v-card 
        class="text-center white--text"
        :color="tcolor">
        <h1>
            Turn {{value.turn}}
        </h1>
        <h2>
            ({{turnp}}/2)
        </h2>
    </v-card>
</template>

<script>
export default {
    props:['value'],

    computed: {
        turnp(){
            if (this.value.firstTurnPlayer == this.value.playerTurn)
                return 1
            else
                return 2
        },

        tcolor(){
            if (this.value.firstTurnPlayer == this.value.playerTurn)
                return "indigo darken-3"
            else
                return "red darken-4"
        }
    }
}
</script>

<style>

</style>