<template>
  <div class="container">
    <div class="block-body">
      <h2>Как с вами связаться?</h2>
        <p>Мы проверим наличие домена, а также свяжемся с вами для уточнения деталей заказа, пришлем на почту все доступы и инструкции.</p>
    </div>
    <hr>
    <form>
      <FormBlock v-bind:class='{ "error-style": user_email_active && !user_email}'>
        <div slot="block-body">
          <div class="row">
            <label for="user_email"><h4>Адрес электронной почты<span class="form-required"> *</span></h4></label><br>
            <div class="col-md-4">
              <span class="md-form">
                <input type="email" id="user_email" name="user_email" class="form-control" v-model="user_email" @click="user_email_active = true">
              </span>
            </div>
          </div>
          <br>
          <div class="alert-danger error-message" v-show='user_email_active && !user_email'>
            <span class="glyphicon glyphicon-warning-sign error-sign"></span>
              Поле обязательно для заполнения
          </div>
          <div class="alert-danger error-message" v-show='user_email_active && user_email && !isEmailValid'>
            <span class="glyphicon glyphicon-warning-sign error-sign"></span>
             Данные указаны некорректно
          </div>
        </div>
      </FormBlock>
      <FormBlock v-bind:class='{ "error-style": user_mobile_active && !user_contact_mobile}'>
        <div slot="block-body">
          <div class="row">
            <label for="uuser_contact_mobile"><h4>Телефон<span class="form-required"> *</span></h4></label><br>
            <div class="col-md-4">
              <span class="md-form">
                <input type="tel" id="user_contact_mobile" name="user_contact_mobile" class="form-control" v-model="user_contact_mobile" @click="user_mobile_active = true">
              </span>
            </div>
          </div>
          <br>
          <div class="alert-danger error-message" v-show='user_mobile_active && !user_contact_mobile'>
            <span class="glyphicon glyphicon-warning-sign error-sign"></span>
              Поле обязательно для заполнения
          </div>
          <div class="alert-danger error-message" v-show='user_mobile_active && user_contact_mobile && !isNumberValid'>
            <span class="glyphicon glyphicon-warning-sign error-sign"></span>
             Данные указаны некорректно
          </div>
        </div>
      </FormBlock>
      </form>
      <div class="block_item">
        <button type="submit" class="btn btn-primary center-block">Далее</button>
      </div>
      <p><pre>data: {{$data}}</pre></p>
  </div>
</template>

<script>
import Vue from 'vue'
import FormBlock from './FormBlock'

export default {
  data() {
    return {
      user_email: '',
      user_contact_mobile: '',
      user_email_active: false,
      user_mobile_active: false,
    }
  },
  components: {
    FormBlock
  },
  methods: {
  },
  computed: {
    isEmailValid() {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.user_email);
    },
    isNumberValid() {
      return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(this.user_contact_mobile);
    },
    isErrors() {
      return (!this.user_email || !this.user_contact_mobile || !this.isEmailValid || !this.isNumberValid)
    }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 690px;
  background-color: #FFF;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
  text-align: left;
  padding-top: 20px;
}

h1 {
  font-size: 2em;
  font-weight: bold;
}

h2 {
    line-height: 1.618em;
    font-size: 1.714em;
    font-weight: bold;
}

h4 {
  font-size: 1.1em;
  font-weight: bold;
}

button {
  margin: 0 auto;
}

.error-style {
  background-color: #FAA;
}

.error-message {
  background-color: #ffd4d4;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
  margin: 0;
}

.error-sign {
  color: red;
}

.form-required {
  color: red;
}


.form-check-label {
  font-weight: normal;
  font-size: 1em;
}

.button-style {
  min-width: 100px;
  font-size: 1.3em;
  font-weight: bold;
}



</style>
