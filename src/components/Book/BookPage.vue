
<template>
    <!-- <Loader v-if="showLoader"/> -->
    <Modal>
    <div class="book-wrapper" :class="{hasPadding: $store.state.adultsNum > 1 && $store.state.bookStep == 1}">
        <div class="book-progressbar">
            <div class="progress-title">
                <div class="progress-item">
                    <p>Проверка</p>
                </div>
                <div class="progress-item">
                    <p>Данные</p>
                </div>
                <div class="progress-item">
                    <p>Оплата</p>
                </div>
            </div>
            <div class="progress-line-box" :class="{step2: $store.state.bookStep == 1, step3: $store.state.bookStep == 2}">
                <div class="progress-line">
                    <div class="progress-line-percent"></div>
                </div>
                <img src="@/assets/images/kaaba.svg" alt="">
            </div>
        </div>

        <swiper
            :slides-per-view="1"
            :allowTouchMove="false"
            :space-between="8"
            :modules="[Navigation]"
            :navigation="{ nextEl: '.book-bottom-btn', prevEl: '.back-book-box'}"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <Form :tour="true"/>
                <CheckboxForm />
            </swiper-slide>
            <swiper-slide>
                
                <div class="cleint__data-box">
                    <div class="client__data-title">
                        <p>Данные клиента</p>
                        <span>Заполните ваши данные как в паспорте</span>
                    </div>
                    <form action="">
                        <div class="form-wrapper">
                            <div class="client-form-items" v-for="(item,id) in adultsNum" :key="id">
                                <div class="input-box">
                                    <label for="">Имя Фамилия (На латинице)</label>
                                    <input type="text" placeholder="ASANOV ASAN">
                                </div>
                                <div class="input-box">
                                    <label for="">Введите ИИН</label>
                                    <input type="text" placeholder="123456789123">
                                </div>
                                <div class="input-box">
                                    <label for="">Номер телефона</label>
                                    <input v-mask="'#(###)###-##-##'" type="text" placeholder="">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <CheckboxForm />
            </swiper-slide>
            <swiper-slide>
                <div class="cleint__data-box">
                    <div class="client__data-title">
                        <p>Выберите способ оплаты</p>
                        <span>Ваг пакет забронирован, оплатите бронь в течение:</span>
                    </div>
                    <div class="timer-box">
                        <p>{{ minute }} : {{ second }}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <div class="book-bottom-box">
            <div class="book-result-price" :class="{hide:$store.state.bookStep == 2 }">
                <p>Итого</p>
                <div class="price-box">
                    <p>{{numberWithSpaces(tourPrice)}}₸</p>
                    <span>{{numberWithSpaces($store.getters.getTotalPrice)}}$</span>
                </div>
            </div>
            <button class="btn btn-1 book-bottom-btn" :class="{blackBtn:$store.state.bookStep == 1, redBtn: $store.state.bookStep == 2}" >{{$store.state.bookStep == 2 ? "Отправить счет на Kaspi.kz" : "Продолжить"}}</button>
            <button @click="handleBtn" class="btn btn-1 book-bottom-btn-2 redBtn" :class="{show: $store.state.bookStep == 2}">Отправить счет на Kaspi.kz</button>
        </div>

    </div>
</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import Form from '../Form.vue';
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import CheckboxForm from '../CheckboxForm.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation} from 'swiper/modules';
import Loader from '../Loader.vue';

export default{
    name: 'BookPage',
    components:{
        Modal,
        Form,
        CheckboxForm,
        Swiper,
        SwiperSlide,
        Loader
    },
    setup(){
        
        const store = useStore();

        const minute = ref(29);
        const second = ref(59);

        const startTimer = ref(false)
        const showLoader = ref(false)

        const onSlideChange = (swiper) => {
            store.commit('changeBookStep', swiper.activeIndex)
            if(swiper.activeIndex == 2){
                startTimer.value = true
                console.log('bbb')
            }
        }

        const handleBtn = () => {
            store.commit('changeStep', 8)
        }

        watch(startTimer, ()=> {
            if(startTimer){
                function countDownTimer(){
                    const interval = setTimeout(()=>{
                        if(minute.value < 0){
                            minute.value = 29;
                            second.value = 59;
                        }
                        if(second.value == 0){
                            minute.value = minute.value - 1;
                            second.value = 60;
                        }
                        second.value = second.value - 1;
                        countDownTimer();
                    }, 1000);
                    if(minute.value < 0){
                        minute.value = 29;
                        second.value = 59;
                        clearInterval(interval)
                    }
                };
                countDownTimer()
            }
        })

        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        return{
            tourPrice: computed(() => store.getters.changePriceToTenge),
            Navigation,
            onSlideChange,
            adultsNum: computed(() => store.state.adultsNum),
            minute,
            second,
            showLoader,
            handleBtn,
            numberWithSpaces
        }
    }
}

</script>