import { db } from '~/plugins/firebase'
import firebase from '~/plugins/firebase'
require('firebase/auth')

export const state = () => ({
  userID: '',
  userInfo: {},
})

export const mutations = {
  getInfo(state, payload) {
    state.userInfo = payload
  },
  setUserID(state, payload) {
    state.userID = payload
  },
}

export const actions = {
  saveUserID(state, payload) {
    state.commit('setUserID', payload)
  },
  async signUp(state, payload) {
    const email = payload.email
    const password = payload.password
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        var usr = firebase.auth().currentUser
        db.collection('Users').doc(usr.uid).set(payload)
        usr
          .sendEmailVerification()
          .then(function () {
            this.$router.push('/users/profile')
          })
          .catch(function (error) {})
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
      })
  },
  async getUser(state, payload) {
    await db
      .collection('Users')
      .doc(payload)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          state.commit('getInfo', doc.data())
        }
      })
  },
}

export const getters = {}
