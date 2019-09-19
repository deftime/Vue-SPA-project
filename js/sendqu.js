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
var form = document.forms.quForm;
var msg = document.querySelector('#sendMsg');

form.addEventListener('submit', sendQu);

function sendQu(event) {
  event.preventDefault();
  let name = form.quName.value;
  let email = form.quMail.value;
  let qu = form.qu.value;
  let objQu = new QuObject(name, email, qu);

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
}


function QuObject(name, email, qu) {
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
