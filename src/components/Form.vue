<template>
  <div class="container">
    <div class="block_item">
      <h1>Создание персональной почты</h1>
    </div>
    <br>
    <hr>
    <FormBlock>
      <div slot="block-body">
        <h2>Выбор домена</h2>
        <p>Рекомендуем регистрировать почту вида i@имя-фамилия.ru, для этого нам нужны ваши имя и фамилия. Мы проверим доступность домена и зарегистрируем его, если он свободен. Если домен занят, мы предложим варианты и утвердим с вами выбор.</p>
      </div>
    </FormBlock>
    <hr>
    <form>
    <div class="block_item">
      <label for="name"><h4>Полное имя для домена<span class="form-required"> *</span></h4></label>
      <div class="row">
        <div class="col-md-3">
          <span class="md-form">
            <input type="text" id="name" name="name" class="form-control">
            <label for="name" class="sub_label">Имя</label>
          </span>
        </div>
        <div  class="col-md-4">
          <span class="form-group">
            <input type="text" id="surname" name="surname" class="form-control">
            <label for="surname" class="sub_label">Фамилия</label>
          </span>
        </div>
        <div class="hidden description">
          <div class="description_text">
            <p>На русском или английском языках</p>
          </div>
          <div class="glyphicon glyphicon-triangle-left description_arrow"></div>
        </div>
      </div>
      <div class="hidden form-control-feedback">
        Поле обязательно для заполнения
      </div>
    </div>

    <div class="block_item">
      <label for="domain_name_type"><h4>Домен</h4></label>
      <div>
        <div class="form-check">
          <label class="form-check-label">
          <input class="form-check-input" type="radio" name="domain_name_type" id="domain_name1" value="Я хочу домен i@имя-фамилия.ru" checked>  Я хочу домен i@имя-фамилия.ru</label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
          <input class="form-check-input" type="radio" name="domain_name_type" id="domain_name2" value="Я хочу другой домен (скажу какой)" checked>  Я хочу другой домен (скажу какой)</label>
        </div>
      </div>
      <div class="hidden">
        <label for="domain_name"><h4>Предпочитаемый домен<span class="form-required"> *</span></h4></label><br>
        <div class="col-md-4">
          <span class="md-form">
            <input type="text" id="domain_name" name="domain_name" class="form-control" placeholder="Домен">
          </span>
        </div>
        <div class="hidden form-control-feedback">
          Поле обязательно для заполнения
        </div>
      </div>
    </div>

    <div class="block_item">
      <label for="personal_web">
        <h4>Сделать для вас простую страницу с вашим именем на вашем домене?</h4>
      </label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="1">
          Да (включено в стоимость)
        </label>
      </div>
    </div>

    <hr>

    <div class="block_item">
      <h2>Настройки безопасности</h2>
      <p>Почта — ключ ко всем вашим данным и сервисам в интернете. Потеря доступа к почте может привести к большим финансовым и репутационным потерям. Мы рекомендуем настроить дополнительные опции безопасности.</p>
    </div>

    <hr>

    <div class="block_item">
      <label for="security_enter_option">
        <h4>Какие способы защиты настроить?</h4>
      </label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Вход через смс-сообщение на мой телефон">
          Вход через смс-сообщение на мой телефон
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Вход через приложение на телефоне">
          Вход через приложение на телефоне
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" value="Хочу создать USB-ключ для входа в почту">
          Хочу создать USB-ключ для входа в почту
        </label>
      </div>
    </div>

    <div class="block_item">
      <label for="laptop_audit">
        <h4>Провести аудит безопасности вашего компьютера?</h4>
      </label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="1">
          Да (включено в стоимость)
        </label>
      </div>
      <div class="hidden description">
        <div class="description_text">
          <p>Даже самая защищенная почта не защитит от потери данных, если компьютер не защищен</p>
        </div>
        <div class="glyphicon glyphicon-triangle-left description_arrow"></div>
      </div>
    </div>

    <hr>

    <div class="block_item">
      <h2>Настройка устройств для работы с почтой</h2>
      <p>Скажите нам, какие телефоны и компьютеры настроить для работы с почтой. Мы настроим почту везде.</p>
    </div>

    <div class="block_item">
      <label for="entry_options"><h4>Опции входа<span class="form-required"> *</span></h4></label><br>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Буду заходить на почту через браузер (Chrome, IE, Safari и другие)">
          Буду заходить на почту через браузер (Chrome, IE, Safari и другие)
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Буду проверять почту на Android телефоне">
          Буду проверять почту на Android телефоне
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Буду проверять почту на iPhone">
          Буду проверять почту на iPhone
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" id="laptop_audit" value="Хочу настроить почтовый клиент на компьютере (Outlook, Thunderbird, The Bat! и другие)">
          Хочу настроить почтовый клиент на компьютере (Outlook, Thunderbird, The Bat! и другие)
        </label>
      </div>
      <div class="hidden form-control-feedback">
        Поле обязательно для заполнения
      </div>
    </div>

    <div class="block_item">
      <label for="installation"><h4>Как вы хотите настроить почту?<span class="form-required"> *</span></h4></label><br>
      <div>
        <div class="form-check">
          <label class="form-check-label">
          <input class="form-check-input" type="radio" name="installation" id="installation_type1" value="Пришлите мне подробные настройки на почту, настрою все сам" checked>  Пришлите мне подробные настройки на почту, настрою все сам</label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
          <input class="form-check-input" type="radio" name="installation" id="installation_type2" value="Подключитесь ко мне через удаленный доступ и настройте все сами (+850 рублей)" checked>  Подключитесь ко мне через удаленный доступ и настройте все сами (+850 рублей)</label>
        </div>
        <br>
        <div class="">
          <div class="row">
            <div class="col-md-3">
              <label for="computer_quantity"><h4>Количество компьютеров<span class="form-required"> *</span></h4></label>
            </div>
            <div class="col-md-2">
              <span class="md-form">
                <input type="text" id="computer_quantity" name="computer_quantity" class="form-control" placeholder="1">
              </span>
            </div>
            <div class="hidden form-control-feedback">
              Поле обязательно для заполнения
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <label for="mobile_quantity"><h4>Количество смартфонов<span class="form-required"> *</span></h4></label>
            </div>
            <div class="col-md-2">
              <span class="md-form">
                <input type="text" id="mobile_quantity" name="mobile_quantity" class="form-control" placeholder="1">
              </span>
            </div>
            <div class="hidden form-control-feedback">
              Поле обязательно для заполнения
            </div>
          </div>
          <div class="block_item">
            <label for="instalation_date"><h4>Дата помощи в настройке доступа<span class="form-required"> *</span></h4></label><br>
            <div class="hidden description">
              <div class="description_text">
                <p>Нам нужно будет от 30 минут до 1 часа, в зависимости от числа устройств. Время московское</p>
              </div>
              <div class="glyphicon glyphicon-triangle-left description_arrow"></div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <span class="md-form">
                  <input type="date" id="instalation_date" name="instalation_date" class="form-control">
                  <label for="instalation_date" class="sub_label">Дата</label>
                </span>
              </div>
              <div class="col-md-1">
              <p>в</p>
              </div>
              <div class="col-md-2">
                <span class="md-form">
                  <input type="time" id="instalation_time" name="instalation_time" class="form-control">
                  <label for="instalation_time" class="sub_label">Время</label>
                </span>
              </div>
            </div>
            <div class="hidden form-control-feedback">
              Поле обязательно для заполнения
            </div>
          </div>
          <hr>
          <div class="block_item">
            <button type="submit" class="btn btn-primary center-block">Далее</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import model from '../Module.js'
import FormBlock from './FormBlock'

export default {
  components: {
    FormBlock
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

.description {
  position: relative;
}

.description_text {
  z-index: 1000;
  position: absolute;
  right: 10px;
  max-width: 150px;
  top: -30px;
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
  font-size: 12px;
}

.description_arrow {
  z-index: 2000;
  position: absolute;
  right: 150px;
  top: -15px;
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
  font-size: 14px;
  font-weight: bold;
}

.sub_label {
  min-height: 13px;
  font-size: 0.786em;
}

button {
  margin: 0 auto;
}

.active {
  background-color: #ffffe0;
}

</style>
