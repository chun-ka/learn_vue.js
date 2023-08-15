<template>
  <div v-if="students.length">
    <h1>Danh sách học sinh</h1>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col" colspan="3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>
            <router-link
              :to="{ name: 'student-details', params: { id: student.id } }"
              class="btn btn-info"
              >Info
            </router-link>
          </td>
          <td>
            <router-link
              :to="{ name: 'student-details', params: { id: student.id } }"
              class="btn btn-warning"
              >Edit
            </router-link>
          </td>

          <td>
            <router-link
              :to="{ name: 'student-details', params: { id: student.id } }"
              class="btn btn-danger"
              >Delete
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1>Loading Students ....</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/students')
    .then(res=>res.json())
    .then(data=>this.students = data)
    .catch(error=>console.log(error.message))
  }
};
</script>

<style lang="css"></style>
