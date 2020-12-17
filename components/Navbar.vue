<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Е-општини</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/municipalities/blog/list-all">Блог</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right text="Најави се">
          <b-dropdown-item to="/users/usersignup"
            >Регистрирај се</b-dropdown-item
          >
          <b-dropdown-item to="/singin"
            >Најави се како корисник</b-dropdown-item
          >
          <b-dropdown-item to="/signInSectorAdmin"
            >Најави се како Сектор Админ</b-dropdown-item
          >
          <b-dropdown-item to="/signInAdmin"
            >Најави се како Админ</b-dropdown-item
          >
          <b-dropdown-item to="/signInSuperAdmin"
            >Најави се како Супер Админ</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item v-if="isLoggedIn" href="/users/profile">{{
            userInfo.imePrezime
          }}</b-dropdown-item>
          <b-dropdown-item @click="odjavi">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data() {
    return {
      isLoggedIn1: false,
      userInfo: {},
    }
  },
  async created() {
    this.isLoggedIn()
  },
  async asyncData() {},
  methods: {
    isLoggedIn() {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          return { isLoggedIn1: true }
        } else {
          this.isLoggedIn1 = false
        }
      })
    },
    odjavi() {
      this.$store.dispatch('admins/signOutGlobal')
    },
  },
}
</script>

<style>
.navbar {
  z-index: 2;
  height: 5vh;
  box-sizing: border-box;
}
</style>
