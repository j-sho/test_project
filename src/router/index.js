import Vue from 'vue'
import VueTimepicker from 'vue2-timepicker'
import Datepicker from 'vuejs-datepicker'
import Router from 'vue-router'
import Form from '@/components/Form'
import ContactForm from '@/components/ContactForm'
import SubmissionForm from '@/components/SubmissionForm'
import SendForm from '@/components/SendForm'
import VueMask from 'v-mask'
import { store } from '../store/store'


Vue.use(VueMask)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/form'
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/contact_form',
      name: 'ContactForm',
      component: ContactForm,
      beforeEnter: (to, from, next) => {
        if(store.state.inputData.submitedInputForm == true) {
          next()
        } else next({path: '/form'})
      }
    },
    {
      path: '/submission_form',
      name: 'SubmissionForm',
      component: SubmissionForm,
      beforeEnter: (to, from, next) => {
        if(store.state.submitedContactForm == true) {
          next()
        } else next({path: '/contact_form'})
      }
    },
    {
      path: '/send_form',
      name: 'SendForm',
      component: SendForm,
      beforeEnter: (to, from, next) => {
        if(store.state.submitedContactForm == true) {
          next()
        } else next({path: '/contact_form'})
      }
    }
  ]
})

