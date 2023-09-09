<script >
import Password from "primevue/password";

export default {
  name: "registerStudent",
  data(){
    return{
      data: new Date("01/01/2023"),
    }
  },

}
</script>

<template>

  <div class="form-container">
    <div class="title">
      <h1> {{$t('registerS')}} </h1>
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <pv-input class="input" type="text" id="name"/>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <pv-input class="input" type="email" id="email"/>
    </div>

    <div class="form-group">
      <label for="cellphone">Cellphone:</label>
      <pv-input class="input" type="text" id="cellphone"/>
    </div>

    <div class="form-group">
      <label for="Birthdate">Birthdate:</label>
      <pv-calendar v-model="data" />
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <pv-password class="pass-input" id="password"/>
    </div>

    <div class="btn-register">
      <pv-button label="Register" severity="success"/>
    </div>

  </div>


</template>

<style scoped>
.title{
  text-align: center;
  margin-bottom: 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}
.form-container {
  width: 400px;
  padding: 20px;
  border: 1px solid #ffffff;
  background-color: #004330;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  text-align: left;
  font-weight: bold;
  color: white;
}

.input {
  width: 58%;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 3px;
}
.btn-register{
  text-align: center;
}

</style>