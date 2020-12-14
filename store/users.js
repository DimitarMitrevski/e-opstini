import { db } from '~/plugins/firebase'
import firebase from '~/plugins/firebase'
require('firebase/auth')

export const state = () => ({
  userInfo: {},
})

export const mutations = {
  add(state, payload) {
    state.userInfo = payload
  },
}
export const actions = {
  addUser(state, payload) {
    state.commit('add', payload, { root: true, namespaced: true })
  },
  async signUp(state, payload) {
    await db.collection('Users').add(payload)
    const email = payload.email
    const password = payload.password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        var usr = firebase.auth().currentUser
        usr
          .sendEmailVerification()
          .then(function () {
            this.$router.push('/users')
          })
          .catch(function (error) {})
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
      })
  },
}

export const getters = {}
