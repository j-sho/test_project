<template>
  <div class="container">
    Форма для брендированной почты
    <!-- <table>
      <tr>
        <td>Полное имя для домена</td>
        <td>{{name }} {{surname}}</td>
      </tr>
      <tr>
        <td>Домен</td>
        <td>Я хочу домен {{domain_name}}</td>
      </tr>
      <tr>
        <td>Сделать для вас простую страницу с вашим именем на вашем домене?</td>
        <td>{{personal_web if true ="Да (включено в стоимость)"}}</td>
      </tr>
      <tr>
        <td>Какие способы защиты настроить?</td>
        <td>{{security_enter_option}}</td>
      </tr>
      <tr>
        <td>Вход через приложение на телефоне</td>
        <td>{{entry_options}}</td>
      </tr>
      <tr>
        <td>Как вы хотите настроить почту?</td>
        <td>{{installation if = true "Пришлите мне подробные настройки на почту, настрою все сам"}}</td>
      </tr>
      <tr>
        <td>Адрес электронной почты</td>
        <td>{{user_email}}</td>
      </tr>
      <tr>
        <td>Телефон</td>
        <td>{{user_contact_mobile}}</td>
      </tr>
    </table> -->
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
  },
  computed: {
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 690px;
  background-color: #FFF;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 100px 0 150px;
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



</style>
