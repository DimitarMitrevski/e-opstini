import { db } from '~/plugins/firebase'
import firebase from '~/plugins/firebase'
require('firebase/auth')

export const state = () => ({
  adminInfo: {},
})

export const mutations = {
  setCurrentAdmin(state, payload) {
    state.adminInfo = payload
  },
}

export const actions = {
  async signUp(state, payload) {
    await db.collection('Admins').add(payload)
    const email = payload.email
    const password = payload.password
    firebase.auth().then((user) => {
      var usr = firebase.auth().currentUser
      usr
        .sendEmailVerification()
        .then(function () {})
        .catch(function (error) {})
    })
  },
  async getUser(state, payload) {
    await db
      .collection('Admins')
      .doc(payload)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          state.commit('setCurrentAdmin', doc.data())
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      })
  },
  async createAdmin(state, payload) {
    await db.collection('SectorAdmins').add(payload)

    firebase.auth().then((user) => {
      var usr = firebase.auth().currentUser
      usr
        .sendEmailVerification()
        .then(function () {
          this.$router.push('/users')
        })
        .catch(function (error) {})
    })
  },
}
