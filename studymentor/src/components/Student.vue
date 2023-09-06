<template>
  <div class="container-student">
    Estudiante: {{ name }} {{ age }}

    {{ major }}
    <button @click="handleClick">Ver detalles</button>

    <div v-if="courses.length === 0">
      No estás inscrito en ningún curso.
    </div>
    <div v-else>
      Estás inscrito en {{ courses.length }} cursos:
      <ul>
        <li v-for="(course, index) in courses" :key="index">{{ course }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    age: Number,
    major: String,
    courses: Array,
  },
  name: "student",
  methods: {
    handleClick() {
      alert("Detalles del estudiante:\nNombre: " + this.name + "\nEdad: " + this.age + "\nCarrera: " + this.major);
    },
  },
};
</script>

<style scoped>
.container-student {
  margin: 2px;
  background-color: blue;
  font-size: xxx-large;
}
</style>
