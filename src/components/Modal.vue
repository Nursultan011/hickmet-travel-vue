<template>
<div class="main__modal">
    <div class="container">
        <div class="main__modal-line"></div>
        <div class="modal-header-box">
            <div class="back-box" @click="changeStepVal(1)">
                <img src="../assets/images/left-arrow.svg" alt="left-arrow">
                <p>Назад</p>
            </div>
            <div class="modal-header-text">
                <h1>{{ getModalTitle }}</h1>
            </div>
            <div class="img-box" @click="changeStepVal(1)">
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
        const changeStepVal = (val) => {
            store.commit('changeStep', val)
        }
        const {getModalTitle} = store.getters
        return{
            changeStepVal,
            getModalTitle
        }
    }
}
</script>