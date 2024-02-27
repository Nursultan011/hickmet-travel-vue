import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      city:{
        name: "Алматы",
        label: "ALA",
        id: 1
      },
      date: "",
      passangers: 0,
      step: 1
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
