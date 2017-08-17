<template>
  <div class="container">
    <div class="block_item">
      <h1>Создание персональной почты</h1>
    </div>
    <br>
    <hr>
      <div class="block-body">
        <h2>Выбор домена</h2>
        <p>Рекомендуем регистрировать почту вида i@имя-фамилия.ru, для этого нам нужны ваши имя и фамилия. Мы проверим доступность домена и зарегистрируем его, если он свободен. Если домен занят, мы предложим варианты и утвердим с вами выбор.</p>
      </div>
    <hr>
    <form>

    <FormBlock v-bind:class='{ "error-style": isNameShowError || isNameShowValidError }'>
      <div slot="description-item" class="description">
        <div class="description_text">
          <p>На русском или <br> английском языках</p>
        </div>
        <div class="glyphicon glyphicon-triangle-left description_arrow_small"></div>
      </div>
    <div slot="block-body">
      <label for="name">
        <h4>Полное имя для домена<span class="form-required"> *</span></h4>
      </label>

      <div class="row">
        <div class="col-md-3">
          <span class="md-form">
            <input type="text" id="name" name="name" class="form-control" v-model="user_input.name" @click="user_input.name_input_active = true">
            <label for="name" class="sub_label">Имя</label>
          </span>
        </div>
        <div  class="col-md-4">
          <span class="form-group">
            <input type="text" id="surname" name="surname" class="form-control"  v-model="user_input.surname">
            <label for="surname" class="sub_label">Фамилия</label>
          </span>
        </div>
      </div>
      <div class="alert-danger error-message" v-show='isNameShowError'>
        <span class="glyphicon glyphicon-warning-sign error-sign"></span>
         Поле обязательно для заполнения
      </div>
      <div class="alert-danger error-message" v-show='isNameShowValidError'>
        <span class="glyphicon glyphicon-warning-sign error-sign"></span>
         Данные указаны некорректно
      </div>
    </div>
    </FormBlock>
    <FormBlock>
    <div slot="block-body">
      <label for="domain_name_type"><h4>Домен</h4></label>
      <div>
        <div class="form-check">
          <label class="form-check-label">
          <input class="form-check-input" type="radio" name="domain_name_type" id="domain_name1" value="true" v-model="user_input.domain_name_standart" @click="changeToStandartName" checked>  Я хочу домен i@имя-фамилия.ru</label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
          <input class="form-check-input" type="radio" name="domain_name_type" id="domain_name2" value="false" v-model="user_input.domain_name_standart">  Я хочу другой домен (скажу какой)</label>
        </div>
      </div>
    </div>
    </FormBlock>
    <FormBlock v-bind:class='{ "error-style": user_input.domain_name_active && (!user_input.domain_name || !isDomainValid) }' v-show="user_input.domain_name_standart === 'false'">
    <div slot="block-body">
      <div class="domain_name_option">
        <label for="domain_name"><h4>Предпочитаемый домен<span class="form-required"> *</span></h4></label><br>
        <div class="col-md-4 domain-name-input">
          <span class="md-form">
            <input type="text" id="domain_name" name="domain_name" class="form-control" v-model="user_input.domain_name" placeholder="Домен" @click="user_input.domain_name_active = true">
          </span>
        </div>
      </div>
      <br>
      <div class="alert-danger error-message" v-show='user_input.domain_name_active && !user_input.domain_name'>
        <span class="glyphicon glyphicon-warning-sign error-sign"></span>
          Поле обязательно для заполнения
      </div>
      <div class="alert-danger error-message" v-show='user_input.domain_name_active && user_input.domain_name && !isDomainValid'>
        <span class="glyphicon glyphicon-warning-sign error-sign"></span>
         Данные указаны некорректно
      </div>
    </div>
    </FormBlock>
    <FormBlock>
    <div slot="block-body">
      <label for="personal_web">
        <h4>Сделать для вас простую страницу с вашим именем на вашем домене?</h4>
      </label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="1" v-model="user_input.personal_web" >
          Да (включено в стоимость)
        </label>
      </div>
    </div>
    </FormBlock>

    <hr>

    <div class="block_item">
      <h2>Настройки безопасности</h2>
      <p>Почта — ключ ко всем вашим данным и сервисам в интернете. Потеря доступа к почте может привести к большим финансовым и репутационным потерям. Мы рекомендуем настроить дополнительные опции безопасности.</p>
    </div>

    <hr>

    <FormBlock>
    <div slot="block-body">
      <label for="security_enter_option">
        <h4>Какие способы защиты настроить?</h4>
      </label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Вход через смс-сообщение на мой телефон" v-model="user_input.security_enter_option" checked>
          Вход через смс-сообщение на мой телефон
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Вход через приложение на телефоне" v-model="user_input.security_enter_option" >
          Вход через приложение на телефоне
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Хочу создать USB-ключ для входа в почту" v-model="user_input.security_enter_option" >
          Хочу создать USB-ключ для входа в почту
        </label>
      </div>
    </div>
    </FormBlock>

    <FormBlock>
    <div slot="description-item" class="description">
      <div class="description_text">
        <p>Даже самая защищенная почта не защитит от потери данных, если компьютер не защищен</p>
      </div>
      <div class="glyphicon glyphicon-triangle-left description_arrow"></div>
    </div>
    <div slot="block-body">
      <label for="laptop_audit">
        <h4>Провести аудит безопасности вашего компьютера?</h4>
      </label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="1" v-model="user_input.laptop_audit">
          Да (включено в стоимость)
        </label>
      </div>

    </div>
    </FormBlock>

    <hr>

    <div class="block_item">
      <h2>Настройка устройств для работы с почтой</h2>
      <p>Скажите нам, какие телефоны и компьютеры настроить для работы с почтой. Мы настроим почту везде.</p>
    </div>

    <FormBlock v-bind:class='{ "error-style": user_input.entry_options_active && !isEntryOptions }'>
    <div slot="block-body" @click="user_input.entry_options_active = true">
      <label for="entry_options"><h4>Опции входа<span class="form-required"> *</span></h4></label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Буду заходить на почту через браузер (Chrome, IE, Safari и другие)" v-model="user_input.entry_options" checked>
          Буду заходить на почту через браузер (Chrome, IE, Safari и другие)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Буду проверять почту на Android телефоне" v-model="user_input.entry_options">
          Буду проверять почту на Android телефоне
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Буду проверять почту на iPhone" v-model="user_input.entry_options">
          Буду проверять почту на iPhone
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Хочу настроить почтовый клиент на компьютере (Outlook, Thunderbird, The Bat! и другие)" v-model="user_input.entry_options">
          Хочу настроить почтовый клиент на компьютере (Outlook, Thunderbird, The Bat! и другие)
        </label>
      </div>
      <div class="alert-danger error-message" v-show='user_input.entry_options_active && !isEntryOptions'>
        <span class="glyphicon glyphicon-warning-sign error-sign"></span>
         Поле обязательно для заполнения
      </div>
    </div>
    </FormBlock>

    <FormBlock>
    <div slot="block-body">
      <label for="installation"><h4>Как вы хотите настроить почту?<span class="form-required"> *</span></h4></label><br>
      <div class="form-check">
        <label class="form-check-label">
        <input class="form-check-input" type="radio" name="installation" id="installation_type1" value="1" v-model="user_input.installation" @click="clearInstalationData" checked>  Пришлите мне подробные настройки на почту, настрою все сам</label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
        <input class="form-check-input" type="radio" name="installation" id="installation_type2" value="2" v-model="user_input.installation">  Подключитесь ко мне через удаленный доступ и настройте все сами (+850 рублей)</label>
      </div>
    </div>
    </FormBlock>
    <br>
    <div v-show="showInstalationDetails">
      <FormBlock v-bind:class='{ "error-style": !user_input.computer_quantity }'>
      <div slot="block-body">
        <div class="row">
          <div class="col-md-3">
            <label for="computer_quantity"><h4>Количество компьютеров<span class="form-required"> *</span></h4></label>
          </div>
          <div class="col-md-2">
            <span class="md-form">
              <input type="number" id="computer_quantity" name="computer_quantity" class="form-control" placeholder="1" v-model="user_input.computer_quantity">
            </span>
          </div>
        </div>
        <div class="alert-danger error-message" v-show='!user_input.computer_quantity'>
          <span class="glyphicon glyphicon-warning-sign error-sign"></span>
          Поле обязательно для заполнения
        </div>
      </div>
      </FormBlock>
      <FormBlock v-bind:class='{ "error-style": !user_input.mobile_quantity }'>
      <div slot="block-body">
        <div class="row">
          <div class="col-md-3">
            <label for="mobile_quantity"><h4>Количество смартфонов<span class="form-required"> *</span></h4></label>
          </div>
          <div class="col-md-2">
            <span class="md-form">
              <input type="number" id="mobile_quantity" name="mobile_quantity" class="form-control" placeholder="1" v-model="user_input.mobile_quantity">
            </span>
          </div>
        </div>
        <div class="alert-danger error-message" v-show='!user_input.mobile_quantity'>
          <span class="glyphicon glyphicon-warning-sign error-sign"></span>
          Поле обязательно для заполнения
        </div>
      </div>
      </FormBlock>
      <FormBlock v-bind:class='{ "error-style": !user_input.instalation_date || !user_input.instalation_time }'>
        <div slot="description-item" class="description">
          <div class="description_text">
            <p>Нам нужно будет от 30 минут до 1 часа, в зависимости от числа устройств. Время московское</p>
          </div>
          <div class="glyphicon glyphicon-triangle-left description_arrow"></div>
        </div>
      <div slot="block-body">
        <label for="instalation_date"><h4>Дата помощи в настройке доступа<span class="form-required"> *</span></h4></label><br>
        <div class="row">
          <div class="col-md-4">
            <span class="md-form">
              <datepicker language="ru" v-model="user_input.instalation_date"></datepicker>
              <label for="instalation_date" class="sub_label">Дата</label>
            </span>
          </div>
          <div class="col-md-1">
          <p>в</p>
          </div>
          <div class="col-md-2">
            <span class="md-form">
              <vue-timepicker v-model="user_input.instalation_time"></vue-timepicker>
              <label for="instalation_time" class="sub_label">Время</label>
            </span>
          </div>
        </div>
        <div class="alert-danger error-message" v-show='!user_input.instalation_date || !user_input.instalation_time.HH || !user_input.instalation_time.mm'>
          <span class="glyphicon glyphicon-warning-sign error-sign"></span>
          Поле обязательно для заполнения
        </div>
      </div>
      </FormBlock>
    </div>
    <hr>
    </form>
      <div class="block_item">
        <button type="button" class="btn btn-primary center-block button-style" v-on:click="submitForm">Далее</button>
      </div>
      <br><br>
      <p><pre>data: {{$data}}</pre></p>

  </div>
</template>

<script>
import FormBlock from './FormBlock'
import Datepicker from 'vuejs-datepicker'
import VueTimepicker from 'vue2-timepicker'
import {isNameInput, isNameShowValidError, isEntryOptions, isDomainValid, showInstalationDetails, isErrors} from '../mixins/validation'

export default {
  components: {
    FormBlock,
    Datepicker,
    VueTimepicker
  },

  data () {
    return {
      user_input: {
        name: '',
        surname: '',
        domain_name_standart: true,
        domain_name: '',
        personal_web: true,
        security_enter_option: [],
        laptop_audit: true,
        entry_options: [],
        installation: '1',
        computer_quantity: 1,
        mobile_quantity: 1,
        instalation_date: new Date().toJSON().slice(0, 10),
        instalation_time: {
          'HH': '00',
          'mm': '00'
        },
        name_input_active: false,
        entry_options_active: false,
        domain_name_active: false,
        submitedInputForm: false
      }
    }
  },

  methods: {
    submitForm () {
      if (!this.isErrors) {
        const serialObj = JSON.stringify(this.user_input)

        this.user_input.submitedInputForm = true
        localStorage.clear()
        localStorage.setItem('newUserData', serialObj)
        this.$store.commit('createUserInputData', this.user_input)

        this.$router.push('/contact_form')
      } else {
        this.user_input.name_input_active = true
        this.user_input.entry_options_active = true

        if (!this.user_input.domain_name_standart) {
          this.user_input.domain_name_active = true
        }
      }
    },

    changeToStandartName () {
      this.user_input.domain_name = ''
      this.user_input.domain_name_active = false
    },

    clearInstalationData () {
      this.user_input.mobile_quantity = 1
      this.user_input.computer_quantity = 1
      this.user_input.instalation_date = new Date().toJSON().slice(0, 10)
      this.user_input.instalation_time = {
        'HH': '00',
        'mm': '00'
      }
    }
  },

  created () {
    if (JSON.parse(localStorage.getItem('newUserData'))) {
      this.user_input = JSON.parse(localStorage.getItem('newUserData'))
    }
  },

  mixins: [isNameInput, isNameShowValidError, isEntryOptions, isDomainValid, showInstalationDetails, isErrors]
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

.description {
  position: relative;
}

.description_text {
  z-index: 1000;
  position: absolute;
  margin: 0;
  padding: 0;
  right: 0;
  max-width: 200px;
  top: -20px;
  border: 4px solid #ccc;
  -webkit-border-radius: 6px 6px;
  -webkit-box-shadow: 0px 2px 4px #666;
  -moz-border-radius: 6px 6px;
  -moz-box-shadow: 0px 2px 4px #666;
  border-radius: 6px 6px;
  box-shadow: 0px 2px 4px #666;
  background: #f5f5f5;
  white-space: normal;
  text-align: center;
  padding-top: 5px;
  font-size: 11px;
}

.description_arrow {
  z-index: 2000;
  position: absolute;
  right: 189px;
  top: -2px;
  color: #ccc;
  font-size: 30px;
}

.description_arrow_small {
  z-index: 2000;
  position: absolute;
  right: 101px;
  top: -8px;
  color: #ccc;
  font-size: 30px;
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

.sub_label {
  min-height: 13px;
  font-size: 0.786em;
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

.domain-name-input {
  float: none;
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
