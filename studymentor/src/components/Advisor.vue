
<template>
  <div class="container-advisor">
    Profesor: {{name}} {{age}}

    {{area}}
    <button @click="handleClick"> Visualizar disponibilidad</button>


    <div v-if="count == 0">
      No tiene alumnos inscritos
    </div>
    <div v-else>
      Tiene {{count}} alumnos inscritos
    </div>
  </div>
</template>

<script>
export default {
  props:{name: String,
    age:Number,
    area: String,
    count: Number,
    availability: String,
  },
  name: "advisor",
  methods:{
    handleClick(){
      alert('El profesor ' + this.availability + ' disponible')
    }
  }
}
</script>

<style scoped>
.container-advisor{

  margin: 2px;
  background-color: red;
  font-size: xxx-large;

}
</style>