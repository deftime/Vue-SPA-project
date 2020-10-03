import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/database'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBawyMlw9goyn7uidGy7-jrdjDw9H2X5_w",
  authDomain: "studyproject-1bd76.firebaseapp.com",
  databaseURL: "https://studyproject-1bd76.firebaseio.com",
  projectId: "studyproject-1bd76",
  storageBucket: "",
  messagingSenderId: "364892152064",
  appId: "1:364892152064:web:021ce04c6ebf43d02093e5"
};

firebase.initializeApp(firebaseConfig);

window.onload = function() {
  if (window.location.href !== 'http://localhost:8080/' && window.location.host !== 'qu.justa.com.ua') {
    document.querySelector('.innerWrap').style.opacity = '0.3';
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
