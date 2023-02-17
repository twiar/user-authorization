<template>
  <q-page class="flex flex-center">
    <div class="modal flex flex-center column">
      <h2 class="text-h2">Авторизация</h2>
      <p v-if='errMsg' class='text-red'>{{ errMsg }}</p>
      <q-input outlined v-model="email" placeholder="Логин" />
      <q-input outlined v-model="password" type="password" placeholder="Пароль" />
      <q-btn color="primary" label="Отправить запрос" @click='signIn' />
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../firebase/firebaseInit";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AuthPage',

  setup () {
    const email = ref('');
    const password = ref('');
    const errMsg = ref();
    const router = useRouter()

    const signIn = () => {
      const auth = getAuth(firebaseConfig);
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
          router.push('/board')
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "Некорректный e-mail";
              break;
            case "auth/user-not-found":
              errMsg.value = "Пользователь с таким e-mail не найден";
              break;
            case "auth/wrong-password":
              errMsg.value = "Неверный пароль";
              break;
            default:
              errMsg.value = "Неверный логин или пароль";
              break;
          }
        })
    }

    return {
      email,
      password,
      errMsg,
      router,
      signIn
    }
  }
});
</script>