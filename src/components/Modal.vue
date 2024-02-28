
<template>
    <div class="modal-wrapper">
      <div class="container">
        <div class="modal-header-line"></div>
        <ModalHeaderVue />
        <slot></slot>

      </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import ModalHeaderVue from '@/components/common/ModalHeader.vue';
const store = useStore();
</script>

<style>
</style>