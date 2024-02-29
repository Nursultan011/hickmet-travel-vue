<template>
    <Modal>
        <div class="form__input-city">
            <span class="form__label-from">Откуда</span>
            <input 
                type="text" 
                class="form__input-city grey" 
                v-model="inputCityValue"
                @input="event=>console.log(event.target.value)"
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
    </Modal>
</template>

<script>
import Modal from '../Modal.vue'
import { useStore } from 'vuex'
import { computed,ref } from 'vue'
import {city_list} from '../../content/index.js'
export default{
    name: 'ChooseCity',
    components:{
        Modal
    },
    setup(){
        const store = useStore();
        const cityValue = ref('')
        const {cities} = store.state;

        const handleCityVal = (val) => {
            cityValue.value = val
        }

        const changeCityVal = (val) => {
            store.commit('changeCityValue', val)
            store.commit('changeStep', 3)
            handleCityVal(val.city)
        }

        return {
            inputCityValue: computed(() => store.state.cityValue),
            inputCityLabel: computed(() => store.state.cityValueLabel),
            cityValue,
            city_list,
            cities,
            changeCityVal,
        }
    }
}
</script>