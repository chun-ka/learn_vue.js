<template>
  <div v-if="student">
    <p>Tên học sinh: {{ student.name }}</p>
    <p>Tuổi: {{ student.age }}</p>
  </div>
  <div v-else>
    <p>Loading student ....</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number
  },

  data() {
    return {
      student: null,
    };
  },

  mounted() {
    fetch("http://localhost:3000/students/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.student = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style></style>
