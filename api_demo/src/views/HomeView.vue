<template>
  <div class="home">
    <h1>Trang chủ</h1>
    <p ref="p">Tên tôi là {{ name }}, năm nay {{ age }} tuổi</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add 1 to age</button><br />
    <input type="text" v-model="name" />
    <p>
      ------------------------------------------------------------------------------------
    </p>
    <h1>------------Ref-------------</h1>
    <h4>Student : {{ student.name }}--Age:{{ student.age }}</h4>
    <button @click="clickStudent">Change Student</button>
    <h1>--------------Reactive---------------</h1>
    <h4>Student2:{{ student2.name }}--Age:{{ student2.age }}</h4>
    <button @click="clickStudent2">Change Student2</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, reactive } from "vue";

export default {
  name: "HomeView",

  setup() {
    // const p = ref("hello");
    // console.log(p, p.value);

    const name = ref("quốc trung");
    const age = ref(20);
    const handleClick = () => {
      name.value = "kha";
      age.value = 18;
      // console.log(p, p.value);
      // p.value.classList.add('test');
      // p.value.textContent='chào mọi người nha'
    };

    const student = ref({ name: "anh trung", age: 18 });
    const clickStudent = () => {
      student.value.age = 20;
    };

    const student2 = reactive({ name: "quoc trung", age: 30 });
    const clickStudent2 = () => {
      student2.age = 20;
    };

    return {
      name,
      age,
      handleClick,
      student,
      clickStudent,
      student2,
      clickStudent2,
    };
  },

  // created(){
  //   console.log('created...');
  // },
  // mounted(){
  //   console.log('mounted...');
  // },
};
</script>

