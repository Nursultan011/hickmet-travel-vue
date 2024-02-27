
<template>
    <div class="input input-city">
       <span class="input-city-label">Откуда</span>
       <input type="text" v-model="store.state.city.name">
       <span class="input-city-en">{{ store.state.city.label }}</span>
   </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore();
</script>

<style scoped lang="scss">

</style>