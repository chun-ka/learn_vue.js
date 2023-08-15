<template>
  <div v-for="post in posts" :key="post.id">
    <single-post :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import { onMounted, onUnmounted, onUpdated } from "vue";
export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    console.log(props.posts);
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
  mounted(){
    console.log('function mounted is run .....')
  }
};
</script>

<style></style>
