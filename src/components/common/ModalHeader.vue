
<template>
<header class="detail-header">
        <div class="container">
            <div class="detail-header-box">
                <div class="back-box" @click="store.commit('goBack', 1)">
                    <img src="@/assets/images/left-arrow.svg" alt="left-arrow">
                    <p>Назад</p>
                </div>
                <div class="detail-header-logo">
                    <h1>{{store.getters.modalHeader}}</h1>
                </div>
                <img @click="store.commit('goBack', 1)" class="download-icon" src="@/assets/images/Close.svg" alt="">
            </div>
        </div>
    </header>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

