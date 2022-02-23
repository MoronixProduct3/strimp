<template>
    <v-container>
        <h1>Score Sheet</h1>

        <v-text-field outlined label="Nom de la partie" />

        <v-autocomplete
            outlined
            label="Mission"
            :items="missions"
            item-text="name"/>

        <v-autocomplete
            outlined
            disabled
            label="Map"
            :items="maps"
            item-text="name"/>

        <h2>Joueurs</h2>
        <v-row>
            <v-col
                v-for="n in 2"
                :key="n"
            >
                Joueur {{n}}
                <v-text-field outlined label="Nom ou Surnom" />
                <v-text-field outlined label="Faction" />
                <v-text-field
                    outlined
                    placeholder="12"
                    label="Command Points"
                    suffix="CP"
                    type="number"
                />

            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    


    data() {
        return {
            missions: [
                {
                    name:"11 - Recover the Relics",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Break Them, Body and Soul",
                    number:11,

                },
                {
                    number:12,
                    name:"12 - Tear Down their Icons",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Detonation",
                },
                {
                    number:13,
                    name:"13 - Data Scry-Salvage",
                    primary:"Domination (2, 3, more)",
                    secondary:"Data Intercept",
                },
                {
                    number:21,
                    name:"21 - Abandoned Sanctuaries",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Secure the Sanctuaries",
                },
                {
                    number:22,
                    name:"22 - Conversion",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Corrupted Ground",
                },
                {
                    number:23,
                    name:"23 - The Scouring",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Strategic Scan",
                },
                {
                    number:31,
                    name:"31 - Tide of Conviction",
                    primary:"Domination (2, 3, more)",
                    secondary:"Overrun",
                },
                {
                    number:32,
                    name:"32 - Death and Zeal",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Direct Assault",
                },
                {
                    number:33,
                    name:"33 - Secure Missing Artefacts",
                    primary:"Take and Hold (1, 2, more)",
                    secondary:"Precious Artefacts",
                },
            ],

            maps: [
            ]
        }
    }

}
</script>

<style>

</style>'