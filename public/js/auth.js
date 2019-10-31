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


var auth = firebase.auth();

let form = document.forms.logForm;
let msg = document.querySelector('#authMsg');
let userInfo = document.querySelector('#usrInfo');
let logOutButt = document.querySelector('#logOut');

if (form) {
  form.addEventListener('submit', logIn);
}

if (logOutButt) {
  logOutButt.addEventListener('click', logOut);
}


function logIn(event) {
  event.preventDefault();

  let email = form.log.value;
  let pass = form.pass.value;

  auth.signInWithEmailAndPassword(email, pass)
    .catch(() => {
      msg.innerHTML = 'Користувача не існує!';
      msg.style.color = 'red';
    })
}

function logOut(event) {
  auth.signOut();
}

auth.onAuthStateChanged(user => {
  if (user) {
    if (window.location.href.indexOf('manage') < 0) {
      window.location.href = 'manage.html';
    }
    if (userInfo) {
      userInfo.innerHTML = `Вхід виконано. Користувач - ${auth.currentUser.email} |`;
    }
  } else {
    if (window.location.href.indexOf('index') < 0) {
      window.location.href = 'index.html';
    }

  }
})
