<template>
  <q-page class="flex flex-center">
    <div class="content flex flex-center column">
      <div class="fit flex column justify-end">
        <UserList />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import UserList from "../components/UserList.vue";

export default defineComponent({
  name: 'MainPage',
  components: {
    UserList,
  },
  setup () {
    return {
    }
  }
});
</script>