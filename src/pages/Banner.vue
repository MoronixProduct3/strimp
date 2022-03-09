<template>
    <v-app>
        <v-main>
                <v-container>
                    <v-row>
                        <v-col>
                            <player-banner
                                color="indigo darken-3"
                                v-model="game.player[0]"
                            />
                        </v-col>
                        <v-col cols="2">
                            <turn-banner
                                v-model="game"
                            />
                        </v-col>
                        <v-col>
                            <player-banner
                                color="red darken-4"
                                v-model="game.player[1]"
                            />
                        </v-col>
                    </v-row>
                </v-container>
        </v-main>
    </v-app>
</template>

<script>
import PlayerBanner from '../components/PlayerBanner.vue';
import TurnBanner from '../components/TurnBanner.vue';

export default {
  components: { PlayerBanner, TurnBanner },
  name: 'Banner',


  data: () => ({
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
  }),
    created: function() {
        const self = this
        console.log("Starting connection to WebSocket Server")
        this.connection = new WebSocket(`ws://${location.hostname}:9000`)

        this.connection.onmessage = function(event) {
            console.log("receiving incoming data");
            self.game = JSON.parse(event.data)
        }

        this.connection.onopen = function() {
            console.log("Successfully connected to the websocket server...")
        }
    }
};
</script>

<style>
    #app {
        background-color: #00000000;
    }
    html {
        overflow: hidden
    }
</style>