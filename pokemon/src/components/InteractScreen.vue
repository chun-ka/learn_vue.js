<template>
  <h1>welcome to play game...</h1>
  <card-flip
    v-for="(card, index) in cardsContext"
    :key="index"
    :ref="`card-${index}`"
    :imgBackFaceUrl="`images/${card}.png`"
    :card="{ index: index, value: card }"
    @onFlip="checkRule($event)"
  />
</template>

<script>
import CardFlip from "./Card.vue";
export default {
  components: {
    CardFlip,
  },
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right...");
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("wrong...");
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          this.rules = [];
        }, 800);
      } else return false;
    },
  },
};
</script>
