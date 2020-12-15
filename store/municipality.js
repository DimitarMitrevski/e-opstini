import { db } from '~/plugins/firebase'
import firebase from '~/plugins/firebase'
// require('firebase/auth')

export const state = () => ({
    message: null
});

export const mutations = {
    setMsg(state, payload) {
        state.message = payload;
    }
};
export const actions = {
    async saveMsg(state, payload) {
        await db.collection("messages").add(payload);
        state.commit('setMsg', payload);
    }
}

export const getters = {
    getMsg: (state) => {
        return state.message
    },

}