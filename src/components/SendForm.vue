<template>
  <div class="container">
    <h2>Форма для брендированной почты</h2>
    <table class="table table-bordered table-personal-style">
      <tr class="table table-bordered">
        <th>Полное имя для домена</th>
        <td>{{ data.inputData.name }} {{ data.inputData.surname }}</td>
      </tr>
      <tr class="table table-bordered">
        <th>Домен</th>
        <td v-if="data.inputData.domain_name_standart">Я хочу домен i@{{data.inputData.name}}{{data.inputData.surname}}.ru</td>
        <td v-else>Я хочу домен {{data.inputData.domain_name}}</td>
      </tr>
      <tr class="table table-bordered">
        <th>Сделать для вас простую страницу с вашим именем на вашем домене?</th>
        <td v-if="data.inputData.personal_web">Да (включено в стоимость)</td>
        <td v-else>Нет</td>
      </tr>
      <tr class="table table-bordered">
        <th>Какие способы защиты настроить?</th>
        <td><li v-for="item in data.inputData.security_enter_option">{{ item }}</li>
        </td>
      </tr>
      <tr class="table table-bordered">
        <th>Вход через приложение на телефоне</th>
        <td><li v-for="item in data.inputData.entry_options">{{ item }}</li>
        </td>
      </tr>
      <tr class="table table-bordered">
        <th>Как вы хотите настроить почту?</th>
        <td v-if="data.inputData.installation == '1'">Пришлите мне подробные настройки на почту, настрою все сам</td>
        <td v-else>Подключитесь ко мне через удаленный доступ и настройте все сами (+850 рублей)</td>
      </tr>
      <tr v-if="data.inputData.installation == '2'" class="table table-bordered">
        <th>Количество компьютеров</th>
        <td>{{data.inputData.computer_quantity}}</td>
      </tr>
      <tr v-if="data.inputData.installation == '2'" class="table table-bordered">
        <th>Количество смартфонов</th>
        <td>{{data.inputData.mobile_quantity}}</td>
      </tr>
      <tr v-if="data.inputData.installation == '2'" class="table table-bordered">
        <th>Дата помощи в настройке доступа</th>
        <td>{{data.inputData.instalation_date}} в {{data.inputData.instalation_time.HH}}:{{data.inputData.instalation_time.mm}}</td>
      </tr>
      <tr class="table table-bordered">
        <th>Адрес электронной почты</th>
        <td>{{data.user_email}}</td>
      </tr>
      <tr class="table table-bordered">
        <th>Телефон</th>
        <td>{{data.user_contact_mobile}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters.loadedData
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

.table-personal-style {
  max-width: 600px;
  margin: 30px;
  text-align: left;
}

td,
th {
  padding: 10px;
}


</style>
