
<template>
<header class="detail-header">
        <div class="container">
            <div class="detail-header-box">
                <div class="back-box" @click="store.commit('goBack', 1)" :style="{'opacity': props.passangers && 0}">
                    <img src="@/assets/images/left-arrow.svg" alt="left-arrow">
                    <p>Назад</p>
                </div>
                <div class="detail-header-logo">
                    <h1>{{store.getters.modalHeader}}</h1>
                </div>
                <div class="img-box" @click="store.commit('goBack', 1)">
                    <p v-if="props.passangers">Сбросить</p>
                    <img class="download-icon" src="@/assets/images/Close.svg" alt="" v-else>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useStore } from "vuex";
import { defineProps } from 'vue';
const props = defineProps(['passangers'])
const store = useStore();

</script>

