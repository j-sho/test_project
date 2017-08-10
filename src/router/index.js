import Vue from 'vue'
import VueTimepicker from 'vue2-timepicker'
import Datepicker from 'vuejs-datepicker'
import Router from 'vue-router'
import Form from '@/components/Form'
import ContactForm from '@/components/ContactForm'
import SubmissionForm from '@/components/SubmissionForm'
import VueMask from 'v-mask'


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
      component: ContactForm
    },
    {
      path: '/submission_form',
      name: 'SubmissionForm',
      component: SubmissionForm
    }
  ]
})
