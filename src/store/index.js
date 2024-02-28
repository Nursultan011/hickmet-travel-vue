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
    modalHeader : (state) =>{
      switch(state.step){
        case 2:
          return 'Откуда'
        case 3:
          return 'Подбор тура'
        case 4:
          return 'Доступные даты'
      }
    }
  },
  mutations: {
    changeStep(state,val) {
      state.step = val
    },
    goBack(state, val){
      state.step = val
    }
  },
  actions: {
  },
  modules: {
  }
})
