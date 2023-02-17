import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import axios from "axios";

export default store(function () {
  const Store = createStore({
    state: {
      usersData: [],
    },
    mutations: {
      SET_USERS_DATA(state, payload) {
        state.usersData = payload;
      },
    },
    actions: {
      async GET_USERS({ commit, state }) {
        try {
          const { data } = await axios.get("https://63eec3cb388920150de40329.mockapi.io/users");
          console.log(data);
          commit("SET_USERS_DATA", [...data]);
        } catch (error) {
          alert("Ошибка при запросе");
          console.error(error);
        }
      },
    },
    modules: {},
  })

  return Store
})
