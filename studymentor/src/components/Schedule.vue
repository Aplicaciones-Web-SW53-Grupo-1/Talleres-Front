<script>

export default{
  props:
      {
        day: String,
        course: String,
        hour: String,
        section: String
      }
}

</script>

<template>

  <div class="container-schedule">
    <a>Schedule: {{day}} </a>
    <br>
    <a>Course: </a>{{course}}
    <br>
    <a>Hour:</a>
    {{hour }}
    <br>
    <a>Section:</a>
    {{section}}
  </div>

</template>

<style scoped>

.container-schedule{

  font-size: 1cm;
  color: green;
  background-color: #282828;
}


</style>