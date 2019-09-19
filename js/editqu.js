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

let db = firebase.database();

let form = document.forms.quForm;
let clientName = document.querySelector('#clientName');
let clientMail = document.querySelector('#clientMail');
let simpleMsg = document.querySelector('#simpleMsg');
let proMsg = document.querySelector('#proMsg');

let url = new URL(window.location.href);
let id = url.search.slice(4);

document.addEventListener('DOMContentLoaded', () => {
  let objObj;
  db.ref('Questions').once('value')
    .then(snap => {
      objObj = snap.val();
      for (let key in objObj) {
        if (key == id) {
          clientName.innerText = objObj[key].name;
          clientMail.innerText = objObj[key].email;
          form.qu.value = objObj[key].question;
          form.ans.value = objObj[key].answer;
          if (objObj[key].type == 'paid') {
            proMsg.hidden = false;
          } else {
            simpleMsg.hidden = false;
          }
        } else {
          continue;
        }
      }
    })
    .catch(error => {
      console.log('Не удалось получить данные с базы: ' + error.message);
    })
})
