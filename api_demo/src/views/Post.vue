<template>
  <h1>Hello</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <post-list :posts="posts" v-if="showPosts" />
  </div>
  <div v-else>Loading.....</div>
  <button @click="showPosts = !showPosts">Toggle Post</button>
  <button @click="posts.pop()">Delete a post</button>
</template>

<script>
import { ref } from "vue";
import getPosts from '../composables/getPosts';
import PostList from "../components/PostList.vue";

export default {
  name: "Hello",
  components: { PostList },
  setup() {
    const showPosts = ref(true);
    const {posts, error, load} = getPosts()
    load()
    return { posts, showPosts, error };
  },
};
</script>

<style></style>
