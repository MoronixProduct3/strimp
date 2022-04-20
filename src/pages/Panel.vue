<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols=9>
                        <div class="holder">
                            <v-responsive :aspect-ratio="60/44" class="camslot"/>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="holder">
                            <v-responsive :aspect-ratio="60/44" class="camslot"/>
                        </div>

                        <div class="holder">
                            <turn-banner
                                v-model="game"
                            />
                            <player-banner
                                color="indigo darken-3"
                                v-model="game.player[0]"
                            />
                            <player-points
                                color="indigo darken-2"
                                v-model="game.player[0]"
                            />

                            <player-banner
                                color="red darken-4"
                                v-model="game.player[1]"
                            />
                            <player-points
                                color="red darken-3"
                                v-model="game.player[1]"
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import GAME_DATA from '../data/game';
import PlayerBanner from '../components/PlayerBanner.vue';
import PlayerPoints from '../components/PlayerPoints.vue';
import TurnBanner from '../components/TurnBanner.vue';

export default {
  name: 'Panel',
  components: { PlayerBanner, PlayerPoints, TurnBanner },

  data: () => ({
    game: GAME_DATA,
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
        background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
    }
    .holder {
        background-color: white;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .camslot {
        background-color: black;
    }
    html {
        overflow: hidden
    }
</style>