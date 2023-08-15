<template>
  <div class="about">
    <h1>About</h1>
    <input type="text" v-model="search" />
    <p>Search : {{ search }}</p>
    <div v-for="name in searchInput" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="handleClick">Stop Watch</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "about",
  setup() {
    const search = ref("");
    const names = ref(["hello", "world", "one", "two", "three"]);
    const searchInput = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const stopWatch = watch(search, () => {
      console.log("function watch run...");
    });

    const stopEffect = watchEffect(() => {
      console.log("function watchEffect run...", search.value);
    });

    const handleClick = () => {
        stopWatch();
        stopEffect();
    }

    return {
      search,
      names,
      searchInput,
      handleClick
    };
  },
};
</script>

