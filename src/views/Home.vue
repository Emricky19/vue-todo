<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo($event)" />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },
  data: () => {
    return {
      
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => {
          console.log(res);
          this.todos = this.todos.filter((todo) => todo.id !== id);
        })
        .catch((err) => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed,
        })
        .then((response) => (this.todos = [...this.todos, response.data]))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos
    }
  },
  mounted() {
    this.$store.dispatch("getTodos");
  },
  created() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
    //   .then((response) => (this.todos = response.data))
    //   .catch((err) => console.log(err));
  },
};
</script>

<style></style>
