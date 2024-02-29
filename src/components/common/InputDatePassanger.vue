
<template>
  <div class="main-inputs-wrapper" :class="{grey: store.state.step > 1}">
    <div class="input-item" @click="store.commit('changeStep', 4)">
      <img src="@/assets/images/Date.svg" alt="" >
      <p>Вылет - Обратно</p>
    </div>
    <div class="input-item"  @click="store.commit('changeStep', 5)">
      <img src="@/assets/images/people.svg" alt="">
      <p>Пассажиры</p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
</script>