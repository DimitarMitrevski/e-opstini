import { db } from '~/plugins/firebase'
import firebase from '~/plugins/firebase'
require('firebase/auth')

export const store = () => ({})

export const mutations = {}
export const actions = {
  async signUp(adress, city, contactTel, email, imePrezime, password) {
    await db.collection('Users').add({
      adress: adress,
      city: city,
      contactTel: contactTel,
      email: email,
      imePrezime: imePrezime,
      password: password,
    })
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
          .catch(function (error) { })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
      })
  },
}

export const getters = {}
