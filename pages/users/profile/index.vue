<template>
  <div class="userProfileCont">
    <b-container fluid class="profileTab">
      <b-row align-v="center" id="profile">
        <b-col cols="7">
          <b-row align-v="center">
            <b-col cols="2">
              <b-icon icon="file-person" variant="light" scale="11"></b-icon>
            </b-col>
            <b-col cols="8">
              <h1>{{ userDatas.imePrezime }}</h1>
              <p>Адреса: {{ userDatas.adress }}</p>
              <p>Место на живеење: {{ userDatas.city }}</p>
              <p>Број на телефон: {{ userDatas.contactTel }}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="newsSignOut">
          <div class="block">
            <h3>Разгледај Новости за Општина {{ userDatas.city }}</h3>
          </div>
          <b-button block variant="light" class="signOut" @click="odjava"
            >Одјави се</b-button
          >
        </b-col>
      </b-row>
      <div class="underline"></div>
    </b-container>
    <b-row class="News" align-v="center">
      <b-col
        ><div id="bigBlock">
          <h3>Граѓански буџет</h3>
          <pie-chart
            :colors="['cadetblue', '#FF6868', '#A6E2A8']"
            :data="[
              ['Приходи', '222.3 милијарди денари'],
              ['Расходи', '239.7 милијарди денари'],
              ['Дефицит', '17.4 милијарди денари'],
            ]"
          ></pie-chart>
        </div>
      </b-col>
      <b-col>
        <div class="rects">
          <h3>Буџет на Општина Битола во последните 3 години</h3>
          <column-chart
            :colors="['#54C9BB']"
            :data="[
              ['2018', 100000],
              ['2019', 98000],
              ['2020', 97500],
            ]"
            xtitle="Година"
            ytitle="Буџет"
          ></column-chart>
        </div>
        <div class="rect1"><h3>Јавни набавки</h3></div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import firebase from 'firebase/app'
export default {
  name: 'profile',
  data() {
    return {
      userDatas: [],
      userID: '',
    }
  },
  async created() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.callStore(user.uid)
      } else {
        console.log('User is not signed out!')
      }
    })
    // console.log(this.userID)
    // await store.dispatch('users/getUser', '7ybKfvFZ7hQc0F2l07QbUOiTdPD3')
    // const userDatas = store.state.users.userInfo
    // return { userDatas: userDatas }
  },
  mounted() {
    console.log(this.userID)
  },
  methods: {
    odjava() {
      firebase.auth().signOut()
      this.$router.push('/')
    },
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
.userProfileCont {
  width: 100vw;
  background: cadetblue;
}
.profileTab {
  color: white;
  width: 100vw;
  background: cadetblue;
  height: 40vh;
}
#profile {
  height: 40vh;
  width: 80vw;
  margin: 0 auto;
}
.block {
  width: 25vw;
  height: 10vw;
  background: none;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.underline {
  width: 95vw;
  height: 0.05vw;
  background-color: white;
}
.News {
  width: 90vw;
  margin: 0 auto !important;
}
#bigBlock {
  height: 50vh;
  width: 25vw;
  border-radius: 10px;
  background: white;
  color: cadetblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.rects {
  width: 50vw;
  height: 38vh;
  background: white;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: cadetblue;
}
.rect1 {
  width: 50vw;
  height: 10vh;
  background: none;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  transition: 0.3s;
}

.rect1:hover {
  background: White;
  color: cadetblue;
}
.row {
  margin: 0;
}
.newsSignOut {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.signOut {
  background: none;
  width: 25vw;
  border: 1px solid white;
  color: white;
  margin-top: 1vw;
  transition: 0.3s;
}
.signOut:hover {
  background: white;
  color: cadetblue;
}
</style>
