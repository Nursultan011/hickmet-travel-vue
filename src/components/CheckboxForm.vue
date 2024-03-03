
<template>
<div class="checkbox-box">
        <div class="checkbox-item checkbox-item-visa">
            <div class="checkbox-text">
                <p>Оформить визу</p>
            </div>
            <div class="checkbox-input" :class="{checked: visa}">
                <!-- <input type="checkbox" :checked="visa" v-model="visa"> -->
                <div class="input-circle" :class="{checked: visa}" @click="handleVisa"></div>
            </div>
        </div>
        <div class="checkbox-item checkbox-item-food">
            <div class="checkbox-text">
                <p>2х разовое питание</p>
                <span>+ {{$store.state.foodPrice}}$</span>
            </div>
            
            <div class="checkbox-input" :class="{checked: food}">
                <!-- <input type="checkbox" :checked="visa" v-model="visa"> -->
                <div class="input-circle" :class="{checked: food}" @click="handleFood"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default{
    name: 'CheckboxForm',
    setup(){
        const store = useStore()
        const handleVisa = () => {
            store.commit('handleVisa', !store.state.visaCheckBox)
        }
        const handleFood = () => {
            store.commit('handleFood', !store.state.foodCheckBox)
        }

        return{
            food: computed(() => store.state.foodCheckBox),
            visa: computed(() => store.state.visaCheckBox),
            handleVisa,
            handleFood,
        }
    }
}

</script>