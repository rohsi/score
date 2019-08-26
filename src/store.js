import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stocks: [
      {id: 1, name: "BMW", price: 123},
      {id: 2, name: "Apple", price: 67},
      {id: 3, name: "Tata", price: 94},
      {id: 4, name: "Infosys", price: 106},
    ],
    funds:10000
  },

  mutations: {

  },
  actions: {

  },
  getters:{
    funds:(state) =>{
      return state.funds;
    }
  }
})
