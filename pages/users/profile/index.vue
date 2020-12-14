<template>
  <div class="userProfileCont">
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
              <h1>Александар Петровски</h1>
              <p>Адреса: Багдадска,30</p>
              <p>Место на живеење: Битола</p>
              <p>Број на телефон: 071-626-444</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <div class="block"></div>
          <h3>Разгледај Новости за Општина Битола</h3>
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
  name: 'profile',
}
</script>
<style scoped>
.userProfileCont {
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
  background: darkgray;
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
