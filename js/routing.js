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

window.onload = function() {
  window.location.href = '#/';
}

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

    // Templates (target pages) of routing and methods inside this templates
    var how = { template: howPage,
      methods: {
        buttLinks: function(event) {
          if (event.target.classList.contains('buttonFree')) {
            window.location.href = '#/free';
          } else {
            window.location.href = '#/paid';
          }
        }
      }
    };
    var faq = { template: faqPage };
    var pro = { template: proPage,
      methods: {
        buttLinks: function(event) {
          if (event.target.classList.contains('buttonFree')) {
            window.location.href = '#/free';
          } else {
            window.location.href = '#/paid';
          }
        }
      }
    };
    var about = { template: aboutPage,
      methods: {
        sendMsg: function (event) {
          event.preventDefault();
          let email = document.forms.formMsg.elements.ffmail.value;
          let msg = document.forms.formMsg.elements.fftext.value;

          let sendObj = {
            from: 'info@justa.com.ua',
            to: ['deftime@gmail.com'],
            subject: 'Повідомлення зі сторінки Контактів',
            html_body: `<p>Повідомлення з сайту Онлайн-допомоги</p><p>Від: ${email}</p><hr><p>${msg}</p>`
          }

          fetch('http://api.mailhandler.ru/message/send/', {
            method: 'POST',
            headers: {
              'X-Secure-Token': '4666a172-9424-414c-89a7-31e8a103a807',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendObj)
          }).then(response => {
            console.log(response.status);
            document.querySelector('#okLine').innerHTML = `Ваше повідомлення надіслано!`;
          }).then(() => {
            document.forms.formMsg.reset();
          }).catch(error => {
            document.querySelector('#okLine').innerHTML = `Надіслати не вдалося!`;
            document.querySelector('#okLine').style.color = 'red';
            console.log(error.message);
          })
        }
      }
     };
    var main = { template: mainPage,
      methods: {
        buttLinks: function(event) {
          document.querySelector('.innerWrap').style.opacity = 0.3;

          if (event.target.classList.contains('buttonFree')) {
            window.location.href = '#/free';
          } else {
            window.location.href = '#/paid';
          }
        }
      }
    };
    var free = { template: freePage,
      methods: {
        sendQu: function(event) {
          event.preventDefault();
          var form = document.forms.quForm;
          var msg = document.querySelector('#sendMsg');
          let name = form.quName.value;
          let email = form.quMail.value;
          let qu = form.qu.value;
          let objQu = new this.QuObject(name, email, qu);

          if (window.location.href.indexOf('free') > -1) {
            objQu.type = 'free';
          } else {
            objQu.type = 'paid';
          }

          let randNum = parseInt(Math.random()*100000);
          db.ref('Questions').child(`Qu-${randNum}`).set(objQu)
            .then(() => {
              if (window.location.href.indexOf('free') > -1) {
                msg.innerHTML = `Питання надіслано!<br>Чекайте відповідь на вказаний Вами e-mail.`;
              } else {
                msg.innerHTML = `Питання надіслано!<br>Інструкції по оплаті відправлено на вказаний Вами e-mail.`;
              }

            })
            .then(() => {
              form.reset();
            })
            .catch(error => {
              msg.innerHTML = `Виникла помилка. Спробуйте ще раз.<br>${error.message}`;
              msg.style.color = 'red';
            });
        },
        QuObject: function(name, email, qu) {
          this.name = name;
          this.email = email;
          this.question = qu;
          this.answer = '';
          this.type = '';
          this.answerflag = false;
          this.sendflag = false;
          this.author = '';
          this.date = (new Date().getDate()) + '.' + (new Date().getMonth()+1) + '.' + (new Date().getFullYear());
        }
      }
    };
    var paid = { template: paidPage,
      methods: {
        sendQu: function(event) {
          event.preventDefault();
          var form = document.forms.quForm;
          var msg = document.querySelector('#sendMsg');
          let name = form.quName.value;
          let email = form.quMail.value;
          let qu = form.qu.value;
          let objQu = new this.QuObject(name, email, qu);

          if (window.location.href.indexOf('free') > -1) {
            objQu.type = 'free';
          } else {
            objQu.type = 'paid';
          }

          let randNum = parseInt(Math.random()*100000);
          db.ref('Questions').child(`Qu-${randNum}`).set(objQu)
            .then(() => {
              if (window.location.href.indexOf('free') > -1) {
                msg.innerHTML = `Питання надіслано!<br>Чекайте відповідь на вказаний Вами e-mail.`;
              } else {
                msg.innerHTML = `Питання надіслано!<br>Інструкції по оплаті відправлено на вказаний Вами e-mail.`;
              }

            })
            .then(() => {
              form.reset();
            })
            .catch(error => {
              msg.innerHTML = `Виникла помилка. Спробуйте ще раз.<br>${error.message}`;
              msg.style.color = 'red';
            });
        },
        QuObject: function(name, email, qu) {
          this.name = name;
          this.email = email;
          this.question = qu;
          this.answer = '';
          this.type = '';
          this.answerflag = false;
          this.sendflag = false;
          this.author = '';
          this.date = (new Date().getDate()) + '.' + (new Date().getMonth()+1) + '.' + (new Date().getFullYear());
        }
      }
    };

    // Routes
    const routes = [
      { path: '/how', component: how },
      { path: '/faq', component: faq },
      { path: '/pro', component: pro },
      { path: '/about', component: about },
      { path: '/free', component: free },
      { path: '/paid', component: paid },
      { path: '', component: main }
    ]

    const router = new VueRouter({
      routes
    });

    // Vue-instance ONLY for index page WITHOUT templates
    new Vue({
      router,
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
    }).$mount('#vueblock')

  })
  .catch(err => {
    console.log('НЕ удалось получить данные с базы: ' + err.message);
})
