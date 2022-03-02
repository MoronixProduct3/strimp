<template>
    <v-card :color="color">
        <v-card-text class="white--text">
            <v-row class="mx-0">
                <div>
                    <div class="text-h5 font-weight-bold">
                        {{value.faction || 'Faction'}}
                    </div>
                    <div class="text-subtitle-1">
                        {{value.name}}
                    </div>
                </div>
                <v-spacer/>
                <div class="my-auto text-h5 font-weight-bold">
                    {{vp}}VP {{value.cp || 0}}CP
                </div>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ["color", "value"],

    computed: {
        vp() {
            return this.value.primaries.objectives
                    .map(cond=>cond.reduce((a,b)=>a+b)).reduce((a,b)=>a+b) *4 +
                this.value.primaries.mission +
                this.value.secondaries.reduce((a,b)=> a + b.points,0)
        }
    }
}
</script>

<style>

</style>