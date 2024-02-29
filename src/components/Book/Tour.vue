<template>
  <ModalVue>
    <div class="tour-content">
      <InputCity />
      <InputDatePassanger />
      <!-- <div class="no-data">
        <p>Пока ничего не найдено</p>
      </div> -->
      <div class="tour-items">
        <div class="tour-item">
          <carousel :items-to-show="1">
            <slide v-for="slide in 5" :key="slide">
              <img src="@/assets/images/hotel-img.png" alt="">
            </slide>
    
            <template #addons>
              <pagination />
            </template>
          </carousel>
          <div class="tour-item-title">
            <p>Niyet</p>
            <span>от 1650$</span>
          </div>
          <div class="tour-item-descp">
            <p>16 февраля - 23 февраля</p>
            <p>в ₸ по актуальному курсу</p>
          </div>
          <button class="second-btn">
            Выбрать
          </button>
        </div>
      </div>
    </div>
  </ModalVue>
</template>

<script setup>
import InputCity from '../common/InputCity.vue';
import InputDatePassanger from '../common/InputDatePassanger.vue';
import ModalVue from '../Modal.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<style scoped>
.tour-content{
  display: flex;
  flex-direction: column;
}
.no-data{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tour-items{
  margin-top: 24px;
}
.tour-item{
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 12px;

}
.tour-item img{
  width: 100%;
  height: 200px;
}
.carousel__pagination{
  position: relative;
  top: -30px;
  z-index: 10;
}
.tour-item-title, .tour-item-descp{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tour-item-descp{
  margin-top: 8px;
}
.tour-item-descp p{
  color: #767676;
  font-size: 14px;
}
.tour-item-title p{
  font-size: 20px;
  font-weight: 600;
}
.tour-item-title span{
  font-size: 20px;
  font-weight: 400;
}

.second-btn{
  margin-top: 24px;
  background-color: #000;
  color: #fff;
  height: 48px;
  width: 100%;
  border-radius: 12px;
  border: none;
  font-size: 17px;
  font-weight: 500;
}

</style>