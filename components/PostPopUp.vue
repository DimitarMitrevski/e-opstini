<template>
  <div class="popUpContainer">
    <div class="popUp" v-if="post">
      <a
        href="#!"
        style="
          position: fixed;
          z-index: 103;
          top: 5%;
          right: 25%;
          font-size: 2.5vw;
        "
        @click="$emit('close-modal')"
        >x</a
      >
      <b-form-textarea
        id="input-group-1"
        :label="'Внеси Текст за вашиот пост'"
        label-for="input-2"
      >
      </b-form-textarea>
    </div>
    <div class="darken" v-if="post"></div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>
<style scoped>
.popUpContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
  z-index: 6;
}
.popUp {
  position: fixed;
  width: 30vw;
  height: 40vh;
  top: 50;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  align-items: center;
  background: white;
  margin: 0 auto;
  z-index: 6;
}
.darken {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: black;
  opacity: 0.7;
  z-index: 4;
}
</style>
