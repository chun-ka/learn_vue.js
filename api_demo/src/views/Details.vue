<template>
  <h1>Details Post</h1>
  <div v-if="error" style="color:red">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
  </div>
</template>

<script> 
import getPost from "../composables/getPost";

export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
