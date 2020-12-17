<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>
<style>
@font-face {
  font-family: 'DyslexicFZF';
  src: local('DyslexicFZF'), url('~assets/fonts/DyslexicFZF.ttf');
}
body {
  overflow-x: hidden;
  overflow-y: auto;
  font-family: 'DyslexicFZF', sans-serif;
}
</style>
<script>
import firebase from 'firebase/app'
export default {
  data() {
    return {
      userDatas: {},
    }
  },
  computed: {
    userDatas() {
      this.$store.dispatch('users/getUser1')
      const userDatas = this.$store.state.users.userInfo
      return userDatas
    },
  },

  // asyncData({ store }) {
  //   store.dispatch('users/getUser1')
  //   const userDatas1 = store.state.users.userInfo
  //   return {
  //     userDatas: userDatas1,
  //   }
  // },
}
</script>
