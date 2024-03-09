<template>
  <div class="container">
    <loader v-if="isLoading" />
    <main v-else class="main">
      <header class="header">
          <div class="language">
            <img class="icon" src="./assets/images/lang-icon.png" alt="">
          </div>
          <div class="logo">
            <img src="./assets/images/Logo.png" alt="">
          </div>
          <div class="setting">
            <img class="icon" src="./assets/images/Help.png" alt="">
          </div>
      </header>
      <div class="main__search">
          <h1 class="white--text text--center">
            Умра в 3 клика
          </h1>
          <p class="white--text text--center">
            Мы помогаем осуществить главную поездку в Вашей жизни с максимальным комфортом.
          </p>
          <Form />
      </div>
      <div class="main__lists">
          <h2 class="black--text text--center">
            Что вам дает путешествие с 
            <span class="brand--text">
              Hickmet Premium
            </span>
          </h2>
          <ul>
            <li v-for="(item, i) in main_lists" :key="i">
              <img :src="require(`./assets/images/${item.icon}`)" alt="">
              <div>
                <p class="black--text" v-if="item.title">
                  {{ item.title }}
                </p>
                <span class="grey--text" v-if="item.description">
                  {{ item.description }}
                </span>
              </div>
            </li>
          </ul>
      </div>
    </main>
    <transition>
      <ChooseCity v-if="$store.state.step == 2"/>
    </transition>
    <transition>
      <ChooseTour v-if="$store.state.step == 3"/>
    </transition>
    <transition>
      <Dates v-if="$store.state.dateModal"/>
    </transition>
    <transition>
      <ChoosePassangers v-if="$store.state.passangerModal"/>
    </transition>
    <transition>
      <DetailPage v-if="$store.state.step == 6"/>
    </transition>
    <transition>
      <BookPage v-if="$store.state.step == 7"/>
    </transition>
    <transition>
      <EnterNumberPage v-if="$store.state.step == 8"/>
    </transition>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { main_lists } from './content/index.js'
import Loader from './components/Loader.vue'
import Form from './components/Form.vue'
import Modal from './components/Modal.vue'
import ChooseCity from './components/Modal/ChooseCity.vue'
import ChooseTour from './components/Modal/ChooseTour.vue'
import ChoosePassangers from './components/Modal/ChoosePassangers.vue'
import DetailPage from './components/Book/DetailPage.vue'
import BookPage from './components/Book/BookPage.vue'
import EnterNumberPage from './components/Book/EnterNumberPage.vue'
import Dates from './components/Book/Dates.vue'

export default {
  name: 'App',
  components: {
    Loader,
    Form,
    ChooseCity,
    ChooseTour,
    ChoosePassangers,
    DetailPage,
    BookPage,
    EnterNumberPage,
    Dates
  },
  setup(){
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000)
    })

    return{
      isLoading,
      main_lists
    }
  }
}
</script>