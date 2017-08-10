import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        user_email: '',
        user_contact_mobile: '',
        user_email_active: false,
        user_mobile_active: false,
        user_input: {
        name: '',
        surname: '',
        domain_name_standart: true,
        domain_name: '',
        personal_web: true,
        security_enter_option: [],
        laptop_audit: true,
        entry_options: [],
        installation: 'Пришлите мне подробные настройки на почту, настрою все сам',
        computer_quantity: 1,
        mobile_quantity: 1,
        instalation_date: new Date().toJSON().slice(0,10),
        instalation_time: {
          "HH": "00",
          "mm": "00"
        },
        name_input_active: false,
        entry_options_active: false,
        domain_name_active: false
      }
    },

    getters: {
        isEmailValid(state) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.user_email)
        },
        isNumberValid(state) {
            return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/.test(state.user_contact_mobile);
        },
        isContactFormErrors(state) {
            return (!state.user_email || !store.getters.isEmailValid || !store.getters.isNumberValid);
        },
        isNameValid(state) {
            return (/^[A-Za-z]+$/.test(state.user_input.name) && (state.user_input.name.length > 3));
        },
        isSurnameValid(state) {
            return (/^[A-Za-z]+$/.test(state.user_input.surname) && (state.user_input.surname.length > 3));
        },
        isNameShowError(state) {
            return (state.user_input.name_input_active && (!state.user_input.name || !state.user_input.surname));
        },
        isNameShowValidError(state) {
            return (state.user_input.name_input_active && !store.getters.isNameShowError && (!store.getters.isNameValid || !store.getters.isSurnameValid));
        },
        isEntryOptions(state) {
            return (state.user_input.entry_options.length > 0);
        },
        isDomainValid(state) {
            if (state.user_input.domain_name_active) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(state.user_input.domain_name);
            } else {return true;}
        },
        showInstalationDetails(state) {
            return (state.user_input.installation === 'Подключитесь ко мне через удаленный доступ и настройте все сами (+850 рублей)');
        },
        isInputFormErrors(state) {
            return (!store.getters.isNameValid || !store.getters.isSurnameValid || !store.getters.isEntryOptions || !state.user_input.name || !state.user_input.surname || !state.user_input.computer_quantity || !state.user_input.mobile_quantity || !state.user_input.instalation_date || !state.user_input.instalation_time || !store.getters.isDomainValid);
        },
        },

    mutations: {
        submitContactForm: function(state, payload){
            if (!payload.isErrors) {
                router.push('/submission_form');
            } else {
                state.user_email_active = true;
                state.user_mobile_active = true;
            }
        }
    },

    actions: {
        submitContactForm: function(contex) {
            contex.commit('submitContactForm', {
                isErrors: contex.getters.isContactFormErrors
            });
            }


    }


})