<template>
  <div class="signUpCont">
    <div class="circle"></div>
    <SignUpForm tip="user" />
  </div>
</template>
<script>
export default {
  name: 'userSignUp',
}
</script>
<style scoped>
.circle {
  background: white;
  position: absolute;
  top: -50%;
  right: -5%;
  width: 200vw;
  rotate: 90deg;
  height: 70vw;
  border-radius: 50%;
}
.signUpCont {
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
}
</style>
