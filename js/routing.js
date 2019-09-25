(function () {
    var firebaseConfig = {
    apiKey: "AIzaSyBawyMlw9goyn7uidGy7-jrdjDw9H2X5_w",
    authDomain: "studyproject-1bd76.firebaseapp.com",
    databaseURL: "https://studyproject-1bd76.firebaseio.com",
    projectId: "studyproject-1bd76",
    storageBucket: "",
    messagingSenderId: "364892152064",
    appId: "1:364892152064:web:021ce04c6ebf43d02093e5"
  };
  firebase.initializeApp(firebaseConfig);
})();

var db = firebase.database();

let howPage;
let faqPage;
let proPage;
let aboutPage;
let mainPage;
let freePage;
let paidPage;

db.ref('Pages').once('value')
  .then(snap => {
    howPage = snap.val().how;
    faqPage = snap.val().faq;
    proPage = snap.val().pro;
    aboutPage = snap.val().about;
    mainPage = snap.val().main;
    freePage = snap.val().free;
    paidPage = snap.val().paid;
  })
  .then(() => {
    // Components (target page) of routing
    var how = { template: howPage };
    var faq = { template: faqPage };
    var pro = { template: proPage };
    var about = { template: aboutPage };
    var main = { template: mainPage };
    var free = { template: freePage };

    // Routes
    const routes = [
      { path: '/how', component: how },
      { path: '/faq', component: faq },
      { path: '/pro', component: pro },
      { path: '/about', component: about },
      { path: '/free', component: free },
      { path: '', component: main }
    ]

    const router = new VueRouter({
      routes
    });

    new Vue({
      router
    }).$mount('#vueblock')
  })
  .catch(err => {
    console.log('НЕ удалось получить данные с базы: ' + err.message);
})

// Events for change backgrounds

let pageBack = document.querySelector('.innerWrap');
let mainBack = document.querySelector('.mainP');
let otherBack = document.querySelectorAll('.otherP');

mainBack.addEventListener('click', () => {
  pageBack.style.opacity = 1;
})

for (let key of otherBack) {
  key.addEventListener('click', () => {
    pageBack.style.opacity = 0.3;
  })
}
