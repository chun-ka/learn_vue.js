<template>
  <main-screen
    v-if="statusMatch === 'default'"
    @onStart="onHandleBeforeStart($event)"
  />

  <interact-screen
    v-if="statusMatch === 'match'"
    :cardsContext="settings.cardsContext"
  />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import { shuffled } from "./utils/array";
export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: "default",
    };
  },
  methods: {
    onHandleBeforeStart(config) {
      console.log("running handle before start, ", config);
      this.settings.totalOfBlocks = config.totalOfBlocks;
      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];

      this.settings.cardsContext = shuffled(shuffled(shuffled(cards)));
      console.log(this.settings.cardsContext);
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
  },
};
</script>
