<template>
    <v-card :color="color">
        <v-card-text class="white--text">
            <v-row class="mx-0">
                <div>
                    <div class="text-h5 font-weight-bold">
                        Faction
                    </div>
                    <div class="text-subtitle-1">
                        Player
                    </div>
                </div>
                <v-spacer/>
                <div class="my-auto text-h5 font-weight-bold">
                    10VP 12CP
                </div>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ["color"]
}
</script>

<style>

</style>