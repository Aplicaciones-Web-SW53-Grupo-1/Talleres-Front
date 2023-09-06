<script>

import Advisor from "@/components/Advisor.vue";
import Student from "@/components/Student.vue";
import Courses from "@/components/Courses.vue";
import Schedule from "@/components/schedule.vue";
export default {
  name: "data",
  components: {Schedule, Student, Advisor, Courses}
}

</script>

<template>
  <div class="container-data">
    <Advisor name="Luis" age="31" area="Programming" count="9" availability="no está"/>
    <Advisor name="Juan" age="28" area="Math" count="5" availability= "está"/>
    <Advisor name="Mateo" age="45" area="Literature" count="0" availability="está"/>
    <Student name="Tom Cruise" age="52" major="Actor" :courses="['Improvisation', 'Acting 1']" />
  </div>
  <div class="container-data">
    <Courses name="Improvisation" body="Acting without a script is important for students" cycle="1" vacancies="0"/>
    <Courses name="Acting 1" body="Learning acting techniques since theater was invented" cycle="2" vacancies="10"/>
    <Courses name="Acting 2" body="Same thing as acting 1, but with more techniques since cinema was invented" cycle="4" vacancies="4"/>
  </div>

  <Schedule day = "Monday" course="Math" hour="12:30 - 14:30" section="ISC-32"/>
  <Schedule day = "Tuesday" course="Geometry" hour="15:00 - 17:00" section="IOS-72"/>

</template>


<style scoped>
.container-data{

  display: flex;
  flex-direction: column;
  padding: 6px;
  background-color: bisque;
  margin: 6px;

}
</style>