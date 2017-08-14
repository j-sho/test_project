import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        inputData: {}
    },

    getters: {

    },

    mutations: {
        createUserInputData(state, payload) {
            console.log(payload);
            state.inputData.push(payload);
        }
    },

    actions: {

    }


})
