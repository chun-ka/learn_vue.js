<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world ref="hello" msg="trung to Your Vue.js App" />
  <header-app ref="header" />
  <Teleport to="body">
    <base-modal
      v-if="isShow"
      title="Tôi tên là Trung"
      content="thích chơi thể thao"
      theme="contact"
      @close="onToggleModal"
    >
      <template v-slot:header>
        <h2>This is a header</h2>
      </template>

      <template v-slot:footer>
        <button @click="onToggleModal">This is a footer</button>
      </template>

      <label for="">Name</label>

      <input type="text" />
    </base-modal>
  </Teleport>

  <button @click="onToggleModal">ẩn và hiện</button>
  <h1>Hello from chunka</h1>
  <button @click="onChange">Thay đổi</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderApp: Header,
    BaseModal: Modal,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onChange() {
      console.log("anh Trung nq");
      this.$refs.hello.onConsoleTesting();
      console.log(this.$refs.hello);
    },
    onToggleModal() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
