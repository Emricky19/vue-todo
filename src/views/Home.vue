<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo($event)" />
  </div>
</template>

<script>
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
  },
  data: () => {
    return {};
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    addTodo(newTodo) {
      this.$store.dispatch("addTodo", newTodo);
    },
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
  },
  created() {
    this.$store.dispatch("getTodos");
  },
};
</script>

<style></style>
