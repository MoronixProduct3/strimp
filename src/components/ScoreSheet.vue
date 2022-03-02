<template>
    <v-container>
        <h1>Score Sheet</h1>

        <v-text-field
            outlined 
            label="Nom de la partie" 
            v-model="game.name"
        />

        <v-autocomplete
            outlined
            clearable
            label="Mission"
            :items="missions"
            item-text="name"
            item-value="number"
            v-model="game.mission"
        />

        <v-autocomplete
            outlined
            disabled
            label="Map"
            :items="maps"
            item-text="name"
            v-model="game.map"
        />

        <h2>Joueurs</h2>
        <v-row>
            <v-col
                v-for="j in 2"
                :key="j"
            >
                Joueur {{j}}
                <v-text-field
                    outlined label="Nom ou Surnom"
                    v-model="game.player[j-1].name"
                />
                <v-text-field
                    outlined
                    label="Faction"
                    v-model="game.player[j-1].faction"
                />
                <v-text-field
                    outlined
                    placeholder="12"
                    label="Command Points"
                    suffix="CP"
                    type="number"
                    v-model.number="game.player[j-1].cp"
                />

            </v-col>
        </v-row>

        <h2>Tour</h2>
        <v-chip-group
            mandatory
            active-class="primary--text"
            v-model="game.firstTurnPlayer"
        >
            <v-chip
                v-for="j in 2"
                :key="j"
                :value="j"
            >
                Premier tour joueur {{j}}
            </v-chip>
        </v-chip-group>

        <v-chip-group
            mandatory
            active-class="primary--text"
            v-model="game.turn"
        >
            <v-chip
                v-for="t in 5"
                :key="t"
                :value="t"
            >
                Tour {{t}}
            </v-chip>
        </v-chip-group>

        <v-chip-group
            mandatory
            active-class="primary--text"
            v-model="game.playerTurn"
        >
            <v-chip
                v-for="j in 2"
                :key="j"
                :value="j"
            >
                Joueur {{j}}
            </v-chip>
        </v-chip-group>


        <h2>Primaires</h2>
        <v-row>
            <v-col
                v-for="n in 2"
                :key="n"
            >
                Joueur {{n}}

                <primaries
                    v-model="game.player[n-1].primaries"
                />
            </v-col>
        </v-row>

        <h2>Secondaries</h2>
        <v-row>
            <v-col
                v-for="n in 2"
                :key="n"
            >
                Joueur {{n}}
                <secondaries
                    v-model="game.player[n-1].secondaries"
                />
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Primaries from './Primaries.vue';
import Secondaries from './Secondaries.vue';
import missions from '../data/missions'

export default {
    components: {
        Primaries,
        Secondaries
    },

    data() {
        return {
            game:{
                name: "",
                mission: null,
                map: null,
                firstTurnPlayer: 1, // 1 or 2
                turn: 1,            // 1 through 5
                playerTurn: 1,      // 1 or 2
                player: [
                    {
                        name:"",
                        faction:"",
                        cp:null,
                        primaries:{
                            objectives: [
                                [0,0,0],
                                [0,0,0],
                                [0,0,0],
                                [0,0,0],
                            ],
                            mission: null
                        },
                        secondaries: [
                            {
                                name:"",
                                points: null,
                            },
                            {
                                name:"",
                                points: null,
                            },
                            {
                                name:"",
                                points: null,
                            },
                        ]
                    },
                    {
                        name:"",
                        faction:"",
                        cp:null,
                        primaries:{
                            objectives: [
                                [0,0,0],
                                [0,0,0],
                                [0,0,0],
                                [0,0,0],
                            ],
                            mission: null
                        },
                        secondaries: [
                            {
                                name:"",
                                points: null,
                            },
                            {
                                name:"",
                                points: null,
                            },
                            {
                                name:"",
                                points: null,
                            },
                        ]
                    },
                ]
            },
            missions: missions,
            maps: [
            ]
        }
    },

    watch: {
        game: {
            handler() {
                // Push data
            },
            deep:true
        }
    }
}
</script>

<style>

</style>