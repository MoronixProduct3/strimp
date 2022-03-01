<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>STRIMP: STReaming IMPéria-lys</v-toolbar-title>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-main>
      <score-sheet/>
    </v-main>
  </v-app>
</template>

<script>
import ScoreSheet from '@/components/ScoreSheet.vue';

export default {
  name: 'Main',

  components: {
    ScoreSheet
  },

  data: () => ({
    //
  }),
};
</script>
