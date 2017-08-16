import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    inputData: {},
    user_email: '',
    user_contact_mobile: '',
    submitedContactForm: false
  },

  getters: {
    loadedData (state) {
      return state
    }
  },

  mutations: {
    createUserInputData (state, payload) {
      state.inputData = payload
    },

    createUserContactData (state, payload) {
      state.user_email = payload.user_email
      state.user_contact_mobile = payload.user_contact_mobile
      state.submitedContactForm = payload.submitedContactForm
    }
  },

  actions: {
  }
})
