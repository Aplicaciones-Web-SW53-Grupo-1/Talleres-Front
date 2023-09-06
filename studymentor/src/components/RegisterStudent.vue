<script >
export default {
  name: "registerStudent",
}
</script>

<template>

  <div class="form-container">
    <div class="title">
      <h1> {{$t('registerS')}} </h1>
    </div>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name">
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email">
    </div>

    <div class="form-group">
      <label for="cellphone">Cellphone:</label>
      <input type="text" id="cellphone">
    </div>

    <div class="form-group">
      <label for="Birthdate">Birthdate:</label>
      <input type="date" id="birthdate">
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="text" id="password">
    </div>

    <div class="btn-register">
      <button type="submit" value="submit">Register</button>
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
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #000000;
  border-radius: 3px;
}
.btn-register{
  text-align: center;
}
.btn-register button{
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  border: 0.5px solid #ffffff;
  font-size: 16px;
}
</style>