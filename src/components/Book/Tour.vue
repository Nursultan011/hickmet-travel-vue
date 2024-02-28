<template>
  <ModalVue>
    <InputCity />
    <InputDatePassanger />
    <div class="no-data">
      <p>Пока ничего не найдено</p>
    </div>
  </ModalVue>
</template>

<script setup>
import InputCity from '../common/InputCity.vue';
import InputDatePassanger from '../common/InputDatePassanger.vue';
import ModalVue from '../Modal.vue';
</script>

<style scoped>
.no-data{
  position: relative;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.no-data p{
  z-index: 1;
}
</style>