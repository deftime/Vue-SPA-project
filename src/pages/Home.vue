<template>
  <div class="home">
    <div class="main" @click="changeBg">
      <h1>Юридична ONLINE-консультація</h1>
      <h2>Відправ своє запитання та отримай відповідь на пошту!</h2>
      <router-link to="/free" tag="button" class="buttonFree">Задати безкоштовне питання</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    changeBg: function (event) {
      let pageBack = document.querySelector('.innerWrap');
      let open = document.querySelector('.mainMenu');

      if (event.target.tagName == 'BUTTON') {
        pageBack.style.opacity = 0.3;
      }

      open.style.height = '';
    }
  }
}

</script>
