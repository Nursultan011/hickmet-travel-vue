import { createStore } from 'vuex'

export default createStore({
  state:{
    cityValue: "Алматы",
    cityValueLabel: "ALA",
    step: 1,
    adultsNum: 0,
    childNum: 0,
    cities:[
      {
        name: 'Алматы',
        label: 'ALA'
      },
      {
        name: 'Астана',
        label: 'NQZ'
      },
      {
        name: 'Атырау',
        label: 'GUW'
      },
      {
        name: 'Ақтау',
        label: 'SCO'
      }
    ]
  },
  getters: {
    getCityValue(state){
      return state.cityValue
    },
    getModalTitle(state){
      switch(state.step){
        case 2:
          return 'Откуда'
        case 3:
          return 'Подбор тура'
        case 4:
          return 'Доступные даты'
        case 5:
          return 'Пассажиры'
      }
    }
  },
  mutations: {
    changeStep(state, value){
      state.step = value
    },
    changeCityValue(state,val){
      const {city,label} = val
      state.cityValue = city
      state.cityValueLabel = label
    },
    changeAdultNum(state,type){
      if(type ==='plus'){
        state.adultsNum += 1
      }else if(type ==='minus' && state.adultsNum == 0){
        state.adultsNum = 0
      }else{
        state.adultsNum -= 1
      }
    },
    changeChildNum(state,type){
      if(type ==='plus'){
        state.childNum += 1
      }else if(type ==='minus' && state.childNum == 0){
        state.childNum = 0
      }else{
        state.childNum -= 1
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
