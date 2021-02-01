import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  getTodos: ({ commit }) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        commit("SET_POSTS", response.data);
      })
      .catch((error) => console.log(error));
  },
  deleteTodo: ({ commit }, id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
          console.log(res);
        commit("DELETE_TODO", id);
      })
      .catch((err) => console.log(err));
  },
  addTodo: ({commit}, newTodo) => {
    const { title, completed } = newTodo;
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed,
      })
      .then((response) => commit('ADD_TODO', response.data))
      .catch((err) => console.log(err));
  }
};

const mutations = {
  SET_POSTS: (state, todos) => {
    state.todos = todos;
  },
  DELETE_TODO: (state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
      console.log(state.todos)
  },
  ADD_TODO: (state, todo) => {
      state.todos = [...state.todos, todo]
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
