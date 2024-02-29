
<template>
    <div class="modal-wrapper" :class="{passanger: props.passangers}">
      <div class="container">
        <div class="modal-overlay"></div>
        <div class="modal-header-line"></div>
        <ModalHeaderVue :passangers="props.passangers"/>
        <slot></slot>

      </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import ModalHeaderVue from '@/components/common/ModalHeader.vue';
import { defineProps } from 'vue';
const props = defineProps(['passangers'])

</script>

<style>
</style>