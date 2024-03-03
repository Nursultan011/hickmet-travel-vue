<template>
    <Modal>
        <Form :tour="true"/>
        <div class="tour__content" v-if="$store.state.adultsNum > 0 || $store.state.childNum > 0">
            <div class="tour__content-item" v-for="(item, id) in hotel_list" :key="id" @click="goDetail(item.name, item.price)">
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
        <div class="no-data-box" v-else>
            <p>Пока ничего не найдено</p>
        </div>


    </Modal>
</template>

<script>
import Modal from '../Modal.vue';
import Form from '../Form.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {hotel_list} from '@/content/index.js'
import { useStore } from 'vuex'

export default{
    name: 'ChooseTour',
    components:{
        Modal,
        Form,
        Swiper,
        SwiperSlide,
    },
    setup(){
        const store = useStore();
        const goDetail = (name,price)=>{
            store.commit('changeStep', 6)
            store.commit('changeTourName', name)
            store.commit('handleTourPrice',price)
        }
        return{
            Pagination,
            hotel_list,
            goDetail
        }
    }
}
</script>