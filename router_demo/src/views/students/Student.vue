<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "trung", age: 20 },
        { id: 2, name: "kha", age: 22 },
        { id: 3, name: "nam", age: 24 },
      ],
    };
  },
};
</script>

<style lang="css"></style>
