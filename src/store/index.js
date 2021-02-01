import axios from 'axios'
import Vue from'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    todos: []
}

const getters = {}

const actions = {
    getTodos: () => {
        
    }
}

const mutations = {}


export default {
    state,
    getters,
    actions,
    mutations
}