
<template>
<Modal>
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
        <div class="progress-line-box" :class="{step2: $store.state.bookStep == 2}">
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
        :navigation="{ nextEl: '.book-bottom-btn'}"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
    >
        <swiper-slide>
            <Form :tour="true"/>
            <CheckboxForm />
        </swiper-slide>
        <swiper-slide>
            slide2
        </swiper-slide>
    </swiper>
    <div class="book-bottom-box">
        <div class="book-result-price">
            <p>Итого</p>
            <div class="price-box">
                <p>{{tourPrice}}₸</p>
                <span>{{$store.getters.getTotalPrice}}$</span>
            </div>
        </div>
        <button class="btn btn-1 book-bottom-btn">Продолжить</button>
    </div>
</Modal>
</template>

<script>
import Modal from '../Modal.vue';
import Form from '../Form.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import CheckboxForm from '../CheckboxForm.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation} from 'swiper/modules';

export default{
    name: 'BookPage',
    components:{
        Modal,
        Form,
        CheckboxForm,
        Swiper,
        SwiperSlide
    },
    setup(){
        
        const store = useStore();

        const onSlideChange = () => {
            store.commit('changeBookStep', store.state.bookStep + 1)
        }

        const onSwiper = (swiper) => {
        console.log(swiper);
        };

        return{
            tourPrice: computed(() => store.getters.changePriceToTenge),
            Navigation,
            onSlideChange,
            onSwiper
        }
    }
}

</script>