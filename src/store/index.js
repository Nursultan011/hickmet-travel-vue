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
    ],
    filteredCities: []
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
    },
    getCities(state){
      return state.cities.map(data=>data)
    },
    getFilteredArray(state){
      if(state.filteredCities.length !== 0){
        return state.filteredCities
      }else{
        return state.cities
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
    },
    filterCitites(state,val){
      state.filteredCities = state.cities.filter(el=>el.name.toLowerCase().includes(val.toLowerCase()))
    },
    resetFilteredCities(state,val){
      state.filteredCities = val
    }
  },
  actions: {
  },
  modules: {
  }
})
