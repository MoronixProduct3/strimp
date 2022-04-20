<template>
    <v-card :color="color">
        <v-card-text class="white--text">
            <v-row class="mx-0">
                Objective primaries:
                <v-spacer/>
                {{objectivePrimaries}} VP
            </v-row>
            <v-row class="mx-0">
                Mission bonus:
                <v-spacer/>
                {{value.primaries.mission}} VP
            </v-row>

            <v-row 
                v-for="sec in value.secondaries"
                :key="sec"
                class="mx-0"
            >
                {{sec.name}}:
                <v-spacer/>
                {{sec.points}} VP
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ["color", "value"],

    computed: {
        objectivePrimaries() {
            return this.value.primaries.objectives
                    .map(cond=>cond.reduce((a,b)=>a+b)).reduce((a,b)=>a+b) *4
        },
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
    div {
        font-size: 16px;
    }
</style>