<template>
    <Modal>
        <div class="form__input-box">
            <div class="form__input-city">
                <span class="form__label-from">Откуда</span>
                <input 
                    type="text" 
                    class="form__input-city grey" 
                    v-model="cityValue"
                    @input="handleChange"
                >
                <span class="form__input-label">{{ inputCityLabel }}</span>
            </div>
            <div class="form__city-list">
                <div 
                    class="list-item" 
                    v-for="(list, i) in cities" 
                    :key="i" 
                    @click="changeCityVal({city:list.name, label:list.label})">
                    <img src="@/assets/images/location-icon.svg" />
                    <p>{{list.name}}</p>
                    <span>{{list.label}}</span>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from '../Modal.vue'
import { useStore } from 'vuex'
import { computed,onMounted,ref } from 'vue'
export default{
    name: 'ChooseCity',
    components:{
        Modal
    },
    setup(){
        const store = useStore();
        const cityValue = ref('')

        console.log(store.getters.getCities)

        const handleCityVal = (val) => {
            cityValue.value = val
        }

        const changeCityVal = (val) => {
            store.commit('changeCityValue', val)
            store.commit('changeStep', 3)
            handleCityVal(val.city)
        }

        const handleChange = (e)=>{
            console.log(e.target.value)
            store.commit('filterCitites', e.target.value)
        }

        onMounted(() => {
            handleCityVal(store.state.cityValue)
            store.commit('resetFilteredCities', store.state.cities)
        })

        return {
            inputCityValue: computed(() => store.state.cityValue),
            inputCityLabel: computed(() => store.state.cityValueLabel),
            cities: computed(() => store.state.filteredCities),
            cityValue,
            changeCityVal,
            handleChange
        }
    }
}
</script>