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
</template>

<script>
import { onMounted, ref } from 'vue'
import { main_lists } from './content/index.js'
import Loader from './components/Loader.vue'

export default {
  name: 'App',
  components: {
    Loader
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