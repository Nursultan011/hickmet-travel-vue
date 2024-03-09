
<template>
<div class="main__modal">
    <div class="container">
        <div class="main__modal-line"></div>
        <div class="modal-header-box">
            <div class="back-box" @click="handleDateModal" >
                <img src="@/assets/images/left-arrow.svg" alt="left-arrow">
                <p>Назад</p>
            </div>
            <div class="modal-header-text">
                <h1>Доступные даты</h1>
            </div>
            <div class="img-box" @click="handleDateModal">
                <img class="close-icon" src="@/assets/images/Close.svg" alt="">
            </div>
        </div>
        <section class="detail-slider">
        <div class="detail-slider-title">
            <div class="slider-tab">
                <div class="slider-tab-item" :class="{active: sevenDays}" @click="()=>{sevenDays = true}">
                    <p>7 дневные туры</p>
                </div>
                <div class="slider-tab-item" :class="{active: !sevenDays}" @click="()=>{sevenDays = false}">
                    <p>10 дневные туры</p>
                </div>
            </div>
        </div>
    </section>

    <div class="modal__btn-box dates-btn">
                   <button class="btn btn-1" @click="storeDate(range.start, range.end)">Выбрать</button>
               </div>

    <div class="dates-wrapper">
        <div class="days-box">
            <div class="days-item" v-for="(item,i) in days" :key="i">
                <p>{{ item }}</p>
            </div>
        </div>
        <DatePicker 
            :rows="12" 
            title-position="left"
            :attributes='attrs'
            :masks="masks"
            mode="date"
            v-model.range="range"
        />
    </div>

</div>
</div>
</template>

<script>
import Modal from '../Modal.vue';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
// const months = [
//     {
//         name: Январь,
//         value: 1
//     },
//     {
//         name: Февраль,
//         value: 2
//     },
//     {
//         name: Март,
//         value: 3
//     },
//     {
//         name: Апрель,
//         value: 4
//     },
//     {
//         name: Май,
//         value: 5
//     },
//     {
//         name: Июнь,
//         value: 6
//     },
//     {
//         name: Июль,
//         value: 7
//     },
//     {
//         name: Август,
//         value: 8
//     },
//     {
//         name: Сентябрь,
//         value: 9
//     },
//     {
//         name: Октябрь,
//         value: 10
//     },
//     {
//         name: Ноябрь,
//         value: 11
//     },
//     {
//         name: Декабрь,
//         value: 12
//     },
// ]
import {ref, watch} from 'vue'
import { useStore } from 'vuex';


export default{
    name: 'Dates',
    components:{
        Modal,
        Calendar,
        DatePicker
    },
    setup(){
        const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        const store = useStore()
        const sevenDays = ref(true)
        const { getModalTitle} = store.getters
        const range = ref({
            start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            end: new Date(new Date().getFullYear(), new Date().getMonth(),new Date().getDate()+7 ),
        });
        const attrs = ref([
        {
            key: 'today',
            highlight: 'black',
            // dates: new Date(),
            highlight: {
                start: { fillMode: 'outline' },
                // base: { fillMode: 'light' },
                end: { fillMode: 'outline' },
            },
        },
        ]);

        const masks = ref({
            title: 'MMMM',
            dayPopover: "d,M D,YYYY"
        })

        function handleDateModal() {
            store.commit('handleDateModal', false)
        }
        function storeDate(startDate, endDate){
            store.commit('handleStartDate', startDate)
            store.commit('handleEndDate', endDate)
            store.commit('handleDateModal', false)
        }
        
        return{
            days,
            attrs,
            range,
            masks,
            getModalTitle,
            handleDateModal,
            storeDate,
            sevenDays
        }
    }
}

</script>