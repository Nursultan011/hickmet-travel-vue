<template>
    <form action="" method="get">
        <div class="form__input-city" @click="changeStepVal(2)">
            <span class="form__label-from">Откуда</span>
            <input type="text" class="form__input-city" :class="{grey:tour}" v-model="inputCityValue">
            <span class="form__input-label">{{ inputCityLabel }}</span>
        </div>
        <div class="form__inputs-wrapper" :class="{grey:tour}">
            <div class="input-item">
                <img src="@/assets/images/date.svg" alt="" >
                <p>Вылет - Обратно</p>
            </div>
            <div class="input-item" @click="changeStepVal(5)">
                <img src="@/assets/images/passangers.svg" alt="">
                <p>Пассажиры</p>
            </div>
        </div>
    </form>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default{
    name: 'Form',
    props:{
        tour:Boolean
    },
    setup(){
        const store = useStore()
        const changeStepVal = (val) => {
            store.commit('changeStep', val)
        }
        return{
            inputCityValue: computed(() => store.state.cityValue),
            inputCityLabel: computed(() => store.state.cityValueLabel),
            changeStepVal
        }
    }
}
</script>