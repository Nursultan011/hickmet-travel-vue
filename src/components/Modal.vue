<template>
<div class="main__modal">
    <div class="container">
        <div class="main__modal-line"></div>
        <div class="modal-header-box">
            <div class="back-box" @click="changeStepVal" :class="{hide: $store.state.bookStep > 0}">
                <img src="../assets/images/left-arrow.svg" alt="left-arrow">
                <p>Назад</p>
            </div>
            <div class="back-box back-book-box" :class="{show: $store.state.bookStep > 0}">
                <img src="../assets/images/left-arrow.svg" alt="left-arrow">
                <p>Назад</p>
            </div>
            <div class="modal-header-text">
                <h1>{{ getModalTitle }}</h1>
            </div>
            <div class="img-box" @click="$store.commit('changeStep', 1)">
                <img class="close-icon" src="../assets/images/Close.svg" alt="">
            </div>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default{
    name: 'Modal',
    setup(){
        const store = useStore()
        const changeStepVal = () => {
            store.commit('changeStep', store.state.step - 1)
        }
        const {getModalTitle} = store.getters
        return{
            changeStepVal,
            getModalTitle
        }
    }
}
</script>