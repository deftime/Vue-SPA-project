<template>
  <div class="wrapper" id="app">
    <div class="innerWrap"></div>
    <nav class="mainMenu">
      <div class="burger" @click="mobilemenu">
        <hr>
        <hr>
        <hr>
      </div>
      <ul>
        <li class="mainP" @click="changeBg"><router-link to="/">Головна</router-link></li><li class="otherP" @click="changeBg">
        <router-link to="/how" active-class="activeLink">Як це працює?</router-link></li><li class="otherP" @click="changeBg">
        <router-link to="/faq" active-class="activeLink">FAQ</router-link></li><li class="otherP" @click="changeBg">
        <router-link to="/pro" active-class="activeLink">Питання PRO</router-link></li><li class="otherP" @click="changeBg">
        <router-link to="/about" active-class="activeLink">Хто ми?</router-link></li>
      </ul>
    </nav>
    <transition name="rout" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    changeBg: function (event) {
      let pageBack = document.querySelector('.innerWrap');
      let open = document.querySelector('.mainMenu');

      if (event.currentTarget.classList.contains('mainP')) {
        pageBack.style.opacity = 1;
      } else {
        pageBack.style.opacity = 0.3;
      }

      open.style.height = '';
    },
    mobilemenu: function(event) {
      let open = document.querySelector('.mainMenu');

      if (open.style.height) {
        open.style.height = '';
      } else {
        open.style.height = '450px';
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/main.scss";

</style>
