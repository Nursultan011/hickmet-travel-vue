import { createStore } from 'vuex'

export default createStore({
  state:{
    cityValue: "Алматы",
    cityValueLabel: "ALA",
    step: 4,
    adultsNum: 0,
    childNum: 0,
    detailTourName: '',
    bookStep: 0,
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
    filteredCities: [],
    tourPrice: 0,
    dollarCurrency: 0,
    foodPrice: 200,
    visaCheckBox: true,
    foodCheckBox: false,
    passangerModal: false,
    startTimer: false,
    startDate: null,
    endDate: null,
    dateModal: false
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
        case 7:
          return 'Бронирование'
      }
    },
    getCities(state){
      return state.cities.map(data=>data)
    },
    changePriceToTenge(state){
      if(state.foodCheckBox) return ((parseInt(state.tourPrice) + parseInt(state.foodPrice)) * 450) * (parseInt(state.adultsNum) + parseInt(state.childNum))
      return (parseInt(state.tourPrice) * 450) * (parseInt(state.adultsNum) + parseInt(state.childNum))
    },
    getTotalPrice(state){
      if(state.foodCheckBox) return (parseInt(state.tourPrice) * (parseInt(state.adultsNum) + parseInt(state.childNum))) + parseInt(state.foodPrice)
      return (parseInt(state.tourPrice) * (parseInt(state.adultsNum) + parseInt(state.childNum)))
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
    },
    changeTourName(state,val){
      state.detailTourName = val
    },
    handleVisa(state, val){
      state.visaCheckBox = val
    },
    handleFood(state,val){
      state.foodCheckBox = val
    },
    handlePassangerModal(state,val){
      state.passangerModal = val
    },
    handleTourPrice(state,val){
      state.tourPrice = val
    },
    changeBookStep(state,val){
      state.bookStep = val
    },
    changeStartTimer(state,val){
      state.startTimer = val
    },
    handleDateModal(state,val){
      state.dateModal = val
    },
    handleStartDate(state,val){
      state.startDate = val
    },
    handleEndDate(state,val){
      state.endDate = val
    }
  },
  actions: {
  },
  modules: {
  }
})
