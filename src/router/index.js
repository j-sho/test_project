import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import ContactForm from '@/components/ContactForm'

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
    }
  ]
})
