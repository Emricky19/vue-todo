import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: [],
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
  getTodos: ({ commit }) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        console.log(response.data);
        commit("SET_POSTS", response.data);
      })
      .catch((error) => console.log(error));
  },
};

const mutations = {
  SET_POSTS: (state, todos) => {
    state.todos = todos;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
