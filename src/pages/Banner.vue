<template>
    <v-app>
        <v-main>
                <v-container>
                    <v-row>
                        <v-col>
                            <player-banner/>
                        </v-col>
                        <v-col cols="2">
                            <turn-banner/>
                        </v-col>
                        <v-col>
                            <player-banner/>
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
    //
  }),
};
</script>
