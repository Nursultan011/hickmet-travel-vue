<template>
    <form action="" method="get">
        <div class="form__input-box">
            <div class="form__input-city" @click="changeStepVal(2)" :class="{grey:tour}">
                <span class="form__label-from">Откуда</span>
                <p>{{ inputCityValue }}</p>
                <span class="form__input-label">{{ inputCityLabel }}</span>
            </div>
            <div class="form__inputs-wrapper" :class="{grey:tour}">
                <div class="input-item">
                    <img src="@/assets/images/date.svg" alt="" >
                    <p>Вылет - Обратно</p>
                </div>
                <div class="input-item" @click="changeStepVal(5)">
                    <img src="@/assets/images/passangers.svg" alt="">
                    <p v-if="adultNum > 0 && childNum > 0">{{ adultNum }} Взрослый, {{ childNum }} Дети</p>
                    <p v-else-if="adultNum > 0">{{ adultNum }} Взрослый</p>
                    <p v-else-if="childNum > 0">{{ childNum }} Дети</p>
                    <p v-else>Пассажиры</p>
                </div>
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
            changeStepVal,
            adultNum:computed(() => store.state.adultsNum),
            childNum:computed(() => store.state.childNum),
        }
    }
}
</script>