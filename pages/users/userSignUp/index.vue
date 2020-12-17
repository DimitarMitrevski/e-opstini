<template>
  <div class="signUpCont">
    <div class="circle"></div>
    <SignUpForm tip="user" />
  </div>
</template>
<script>
import firebase from 'firebase/app'
export default {
  name: 'userSignUp',
  async created() {
    this.$store.dispatch('municipality/setAllMunicipalities', this.opstini)
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.callStore(user.uid)
      } else {
      }
    })
  },
  methods: {
    async callStore(uid) {
      console.log(uid, 'log form 89')
      await this.$store.dispatch('users/getUser', uid)
      const userDatas = await this.$store.state.users.userInfo
      this.userID = uid
      this.userDatas = userDatas
      console.log(this.userDatas)
    },
  },
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
