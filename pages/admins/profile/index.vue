<template>
  <div class="adminProfileCont">
    <PostPopUp :post="post" v-on:close-modal="post = false" />
    <b-container fluid class="profileTab">
      <b-row align-v="center" id="profile">
        <b-col cols="7">
          <b-row>
            <b-col cols="2">
              <div id="circle">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png"
                  width="100vw"
                />
              </div>
            </b-col>
            <b-col cols="8">
              <h1>{{ datas.imePrezime }}</h1>
              <p>Адреса: {{ datas.adress }}</p>
              <p>Место на живеење: {{ datas.city }}</p>
              <p>Број на телефон: {{ datas.contactTel }}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <div class="block">
            <button class="post" @click="post = true">Објави Пост</button>
          </div>
          <a href="/admins/createSektorAdmin"
            ><h3>Креирај Нов Админ на Сектор</h3></a
          >
        </b-col>
      </b-row>
    </b-container>
    <b-row class="News" align-v="center">
      <b-col><div id="bigBlock"></div> </b-col>
      <b-col>
        <div class="rects"></div>
        <div class="rects"></div>
        <div class="rects"></div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'adminProfile',
  data() {
    return {
      datas: {},
      post: false,
    }
  },
  async asyncData({ store }) {
    await store.dispatch('admins/getUser', '2bETKVeTlVNINHciiLP6')
    const datas = await store.state.admins.adminInfo
    return { datas: datas }
  },
}
</script>
<style scoped>
.adminProfileCont {
  width: 100vw;
  background: #b5b5b5;
}
.profileTab {
  width: 100vw;
  background: white;
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  border-radius: 20px;
}
.post {
  width: 10vw;
  height: 3vw;
  border: none;
  border-radius: 10px;
  color: white;
  background: #54b4c9;
}
.News {
  height: 60vh;
  width: 90vw;
  margin: 0 auto !important;
}
#bigBlock {
  height: 50vh;
  width: 25vw;
  background: #d7d7d7;
}
.rects {
  width: 50vw;
  height: 10vh;
  background: #d7d7d7;
  margin: 15px;
}
.row {
  margin: 0;
}
#circle {
  border: solid 1px black;
  text-align: center;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
