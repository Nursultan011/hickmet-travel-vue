
<template>
<div class="main__modal">
    <div class="enter__number-wrapper">
        <header class="header">
            <div class="language">
                <img class="icon" src="@/assets/images/lang-icon.png" alt="">
            </div>
            <div class="logo">
                <img src="@/assets/images/Logo.png" alt="">
            </div>
            <div class="setting">
                <img class="icon" src="@/assets/images/Help.png" alt="">
            </div>
        </header>
        <div class="enter-number-content">
            <div class="item-content" v-if="numberStep == 1">
                <img src="@/assets/images/Info.svg" alt="">
                <p>Ваш текущий номер<br> + 7 708 678 78 78 привязан к kaspi.kz?</p>
            </div>
            <div class="item-content" v-if="numberStep == 2">
                <img src="@/assets/images/Info.svg" alt="">
                <p>Введите ваш номер привязанный к kaspi.kz</p>
                <div class="input-box number-input-box">
                    <label for="">Номер телефона</label>
                    <input type="text" placeholder="">
                </div>
            </div>
            <div class="item-content" v-if="numberStep == 3">
                <img src="@/assets/images/confirm.svg" alt="">
                <p>В приложении kaspi.kz Вам придет уведомление, оплатите выставленный счет</p>
            </div>
        </div>
    </div>
    <div class="modal__btn-box bottom-btn-box" v-if="numberStep == 2">
        <button class="btn btn-2" @click="handleStep(3)">Получить счет на оплату</button>
    </div>
    <div class="modal__btn-box bottom-btn-box" v-if="numberStep == 3">
        <button class="btn btn-3">Получить счет на оплату</button>
    </div>
    <div class="modal__btn-box bottom-btn-box enter-number-btns" v-if="numberStep == 1">
        <button class="btn btn-3" @click="handleStep(2)">Нет</button>
        <button class="btn btn-2">Да</button>
    </div>
</div>
</template>

<script>
import { ref } from 'vue';
export default{
    name: 'EnterNumberPage',
    setup(){
        const numberStep = ref(1)
        function handleStep(val){
            numberStep.value = val
        }
        return {
            numberStep,
            handleStep
        }
    }
}

</script>