
<template>
<Modal>
    <section class="detail-slider">
        <div class="detail-slider-title">
            <div class="slider-tab">
                <div class="slider-tab-item active">
                    <p>7 дневные туры</p>
                </div>
                <div class="slider-tab-item">
                    <p>10 дневные туры</p>
                </div>
            </div>
        </div>
    </section>

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

</Modal>
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
import {ref} from 'vue'



export default{
    name: 'Dates',
    components:{
        Modal,
        Calendar,
        DatePicker
    },
    setup(){
        const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        const range = ref({
            start: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            end: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+7),
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

        function handleUpdate(e) {
            console.log('aa')
            console.log(e.target)
        }
        function getNumberDays(year,month){
            return new Date(year, month, 0).getDate();
        }
        return{
            days,
            attrs,
            handleUpdate,
            range,
            masks
        }
    }
}

</script>