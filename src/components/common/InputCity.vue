
<template>
    <div class="input input-city">
       <span class="input-city-label">Откуда</span>
       <input :class="{ grey: store.state.step > 1}" type="text" v-model="store.state.city.name" @click="openModal(3)">
       <span class="input-city-en">{{ store.state.city.label }}</span>
   </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore();

const openModal = (val) =>{
    store.commit('changeStep', val)
}
</script>

<style scoped lang="scss">

</style>