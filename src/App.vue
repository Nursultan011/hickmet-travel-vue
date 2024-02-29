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
          <form action="">
           <InputCity />
           <InputDatePassanger />
          </form>
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
  </div>
    <Transition name="tray">
      <ModalVue v-if="store.state.step == 2">
        <InputCity />
      </ModalVue>
    </Transition>
    <Tour v-if="store.state.step == 3" />
    <PassangersModal v-if="store.state.step == 5"/>
</template>

<script>
import { onMounted, ref } from 'vue'
import { main_lists } from './content/index.js'
import Loader from './components/Loader.vue'
import InputCity from './components/common/InputCity'
import ModalVue from './components/Modal.vue'
import { useStore } from 'vuex'
import InputDatePassanger from './components/common/InputDatePassanger.vue'
import Tour from './components/Book/Tour.vue'
import PassangersModal from './components/PassangersModal.vue'

export default {
  name: 'App',
  components: {
    Loader,
    InputCity,
    ModalVue,
    InputDatePassanger,
    Tour,
    PassangersModal
  },
  setup(){
    const isLoading = ref(true);
    const store = useStore();

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000)
    })

    return{
      isLoading,
      main_lists,
      store
    }
  }
}
</script>

<style>

</style>