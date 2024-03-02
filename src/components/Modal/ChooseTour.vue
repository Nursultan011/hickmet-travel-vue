<template>
    <Modal>
        <Form :tour="true"/>
        <!-- <div class="no-data-box">
            <p>Пока ничего не найдено</p>
        </div> -->

        <div class="tour__content">
            <div class="tour__content-item" v-for="(item, id) in hotel_list" :key="id">
                <div class="tour__content-item__img">
                    <swiper
                        :slides-per-view="1"
                        :pagination="{ clickable: true }"
                        :modules="[Pagination]"
                    >
                        <swiper-slide><img src="@/assets/images/1.jpeg" alt=""></swiper-slide>
                        <swiper-slide><img src="@/assets/images/2.jpeg" alt=""></swiper-slide>
                    </swiper>
                </div>
                <div class="tour__content-item__text">
                    <div class="text-item">
                        <p>{{ item.name }}</p>
                        <span>от {{item.price}}$</span>
                    </div>
                    <div class="text-item text-item-date">
                        <p>16 февраля - 23 февраля</p>
                        <p>в ₸ по актуальному курсу</p>
                    </div>
                </div>
                <button class="btn btn-2">Выбрать</button>
            </div>
        </div>

    </Modal>
</template>

<script>
import Modal from '../Modal.vue';
import Form from '../Form.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {hotel_list} from '@/content/index.js'

export default{
    name: 'ChooseTour',
    components:{
        Modal,
        Form,
        Swiper,
         SwiperSlide,
    },
    setup(){
        return{
            Pagination,
            Thumbs,
            hotel_list
        }
    }
}
</script>