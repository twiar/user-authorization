<template>
  <q-page class="flex flex-center">
    <div class="modal flex flex-center column">
      <h2 class="text-h2">Авторизация</h2>
      <q-input outlined v-model="text" placeholder="Логин" />
      <q-input outlined v-model="password" type="password" placeholder="Пароль" />
      <q-btn color="primary" label="Отправить запрос" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthPage'
});
</script>