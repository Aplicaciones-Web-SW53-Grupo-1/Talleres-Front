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
    <a> {{$t('Schedule')}}: {{$t(day)}}</a>
    <br>
    <a> {{$t('Course')}}: </a> {{course}}
    <br>
    <a> {{$t('Hour')}}:</a> {{hour }}
    <br>
    <a> {{$t('Section')}}:</a>
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