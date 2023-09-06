<template>
  <div class="container-course">
    Course: {{name}}

    {{body}}
    <button @click="handleClick">Register</button>
    Cycle {{cycle}}
  </div>

</template>

<script>
export default{
  props:{
    name:String,
    body:String,
    cycle: Number,
    vacancies: Number,
  },
  name:"Course",
  methods: {
    handleClick () {
      if(this.vacancies <= 0) {
        alert('The course dont have any vacancies')
      }
      else {
        alert('The course have ' + this.vacancies + ' vacancies')
      }
    }
  }
}


</script>

<style scoped>
.container-course{
  margin:2px;
  background-color: green;
  padding: 6px;
  font-size: xxx-large;

}

</style>