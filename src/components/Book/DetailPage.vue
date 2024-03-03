
<template>
<div class="detail-page-wrapper">
    <div class="detail-page-wrapper">
       <div class="main__modal-content">
           <div class="container">
               <div class="modal-header-box">
                   <div class="back-box" @click="changeStepVal(3)">
                       <img src="@/assets/images/left-arrow.svg" alt="left-arrow">
                       <p>Назад</p>
                   </div>
                   <div class="modal-header-text">
                       <h1>{{ tourName }}</h1>
                   </div>
                   <div class="img-box">
                       <img src="@/assets/images/download.svg" alt="left-arrow">
                   </div>
               </div>
   
               <section class="detail-tab-title">
                   <div class="detail-tab-box">
                       <div class="detail-tab-item">
                           <img src="@/assets/images/mekka-img.png" alt="">
                           <div class="text-box">
                               <p>Мекка</p>
                               <span>3 дня, 2 ночи</span>
                           </div>
                       </div>
                       <div class="detail-tab-item">
                           <img src="@/assets/images/medina-img.png" alt="">
                           <div class="text-box">
                               <p>Медина</p>
                               <span>4 дня, 3 ночи</span>
                           </div>
                       </div>
                   </div>
               </section>
   
               <section class="detail-slider">
                   <div class="detail-slider-title">
                       <h3 class="detail-section-title">Отели</h3>
                       <div class="slider-tab">
                           <div class="slider-tab-item active">
                               <p>Swissotel Makkah - Меке</p>
                           </div>
                           <div class="slider-tab-item">
                               <p>Jayden Hotel - Медина</p>
                           </div>
                       </div>
                   </div>
                   <div class="detail-slider-swiper">
                       <swiper
                       :slides-per-view="1.5"
                       :space-between="8"
                   >
                       <swiper-slide><img src="@/assets/images/1.jpeg" alt=""></swiper-slide>
                       <swiper-slide><img src="@/assets/images/2.jpeg" alt=""></swiper-slide>
                       <swiper-slide><img src="@/assets/images/1.jpeg" alt=""></swiper-slide>
                       <swiper-slide><img src="@/assets/images/2.jpeg" alt=""></swiper-slide>
                   </swiper>
                   </div>
                   <div class="detail-slider-footer">
                       <div class="container">
                           <div class="detail-slider-footer-box">
                               <p>Swissotel Makkah</p>
                               <img src="@/assets/images/star.svg" alt="">
                           </div>
                       </div>
                   </div>
               </section>
   
               <section class="detail-about">
                   <div class="detail-about-title">
                       <p class="detail-section-title">Детали</p>
                   </div>
                   <div class="detail-about-box">
                       <div class="detail-about-item">
                           <img src="@/assets/images/hajj2.svg" alt="">
                           <div class="text-box">
                               <h3>Hajj package</h3>
                               <p>Фирменный жилет, поясной ремень-сумка,
                                   рюкзак, абайя, платок, справочник</p>
                               <div class="img-box">
                                   <img src="@/assets/images/hajj-img1.png" alt="">
                                   <img src="@/assets/images/hajj-img2.png" alt="">
                                   <img src="@/assets/images/hajj-img3.png" alt="">
                                   <img src="@/assets/images/hajj-img4.png" alt="">
                               </div>
                           </div>
                       </div>
                       <div class="detail-about-item">
                           <img src="@/assets/images/visa2.svg" alt="">
                           <div class="text-box">
                               <h3>Visa</h3>
                               <p>Оформление визы и разрешения на въезд</p>
                           </div>
                       </div>
                       <div class="detail-about-item">
                           <img src="@/assets/images/medicine.svg" alt="">
                           <div class="text-box">
                               <h3>Медицинская страховка</h3>
                               <p>Обязательное медицинское страхование</p>
                           </div>
                       </div>
                       <div class="detail-about-item">
                           <img src="@/assets/images/location2.svg" alt="">
                           <div class="text-box">
                               <h3>Экскурсии</h3>
                               <p>Трансфер внутри Саудии на комфортабельных автобусах</p>
                           </div>
                       </div>
                       <div class="detail-about-item">
                           <img src="@/assets/images/service2.svg" alt="">
                           <div class="text-box">
                               <h3>Услуги гида</h3>
                               <p>Медина - Мекка</p>
                           </div>
                       </div>
                       <div class="detail-about-item">
                           <img src="@/assets/images/pr-service2.svg" alt="">
                           <div class="text-box">
                               <h3>Premium service</h3>
                               <p>Высокое качество сервиса</p>
                           </div>
                       </div>
                   </div>
               </section>

               <section class="detail-feedback">
        <div class="container">
            <div class="detail-feedback-title">
                <p class="detail-section-title">Отзывы (10)</p>
            </div>
            <div class="detail-feedback-box">
                <div class="detail-feedback-item">
                    <div class="item-title">
                        <img src="@/assets/images/avatar1.svg" alt="">
                        <div class="item-title-text">
                            <p>Адиль</p>
                            <span>Октябрь 2023 г.</span>
                        </div>
                    </div>
                    <p>Очень классная поездка, улкен рахмет организаторам, 
                        все прошло хорошо и без происшествии. Добавил бы бесплатные завтраки все таки немалые деньги платим. 
                        А в целом все хорошо. </p>
                </div>
                <div class="detail-feedback-item">
                    <div class="item-title">
                        <img src="@/assets/images/avatar2.svg" alt="">
                        <div class="item-title-text">
                            <p>Алмен</p>
                            <span>Октябрь 2023 г.</span>
                        </div>
                    </div>
                    <p>Очень классная поездка, улкен рахмет организаторам, 
                        все прошло хорошо и без происшествии. Добавил бы бесплатные завтраки все таки немалые деньги платим. 
                        А в целом все хорошо. </p>
                </div>
                <div class="detail-feedback-item">
                    <div class="item-title">
                        <img src="@/assets/images/avatar3.svg" alt="">
                        <div class="item-title-text">
                            <p>Салтанат</p>
                            <span>Октябрь 2023 г.</span>
                        </div>
                    </div>
                    <p>Очень классная поездка, улкен рахмет организаторам, 
                        все прошло хорошо и без происшествии. Добавил бы бесплатные завтраки все таки немалые деньги платим. 
                        А в целом все хорошо. </p>
                </div>
            </div>
            <button class="btn btn-3 detail-feedback-btn">Показать еще</button>
        </div>
    </section>
           
               
               <div class="modal__btn-box bottom-btn-box">
                   <button class="btn btn-2" @click="changeStepVal(7)">Забронировать</button>
               </div>
           </div>
       </div>
   </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { computed } from 'vue'
import { useStore } from 'vuex';

export default{
    name: 'DetailPage',
    components:{
        Swiper,
        SwiperSlide
    },
    setup(){
        const store = useStore();
        const changeStepVal = (val) => {
            store.commit('changeStep', val)
        }
        return{
            tourName: computed(() => store.state.detailTourName),
            changeStepVal
        }
    }
}
</script>