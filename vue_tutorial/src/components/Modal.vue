<template>
  <div class="block" @click="onClose">
    <h3 :class="{ 'bg-purple': theme === 'contact' }">
      <slot name="header"></slot>
    </h3>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      validator(val) {
        return ["example", "contact", "sales"].includes(val);
      },
      default: "example",
    },
  },
  data() {
    return {};
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
  },
};
</script>
