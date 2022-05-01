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
var auth = firebase.auth();

let form = document.forms.quForm;
let clientName = document.querySelector('#clientName');
let clientMail = document.querySelector('#clientMail');
let simpleMsg = document.querySelector('#simpleMsg');
let proMsg = document.querySelector('#proMsg');
let save = document.querySelector('#saveQu');
let send = document.querySelector('#sendButt');
let del = document.querySelector('#delButt');
let rezMsg = document.querySelector('#rezSave');
let paidCheck = document.querySelector('#ansPaid');

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// Check log-in user and enable relevant permissions
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = 'index.html';
  } else {
    if (auth.currentUser.email == 'deftime@gmail.com' || auth.currentUser.email == 'lmgorbunova@gmail.com') {
      send.disabled = false;
      paidCheck.disabled = false;
      del.disabled = false;
    }
  }
})

// Get URL for take id of question
let url = new URL(window.location.href);
let id = url.search.slice(4);

// Take question from base
document.addEventListener('DOMContentLoaded', () => {
  let objObj;
  db.ref('Questions').once('value')
    .then(snap => {
      document.querySelector('.loadWrap').hidden = true;
      objObj = snap.val();
      for (let key in objObj) {
        if (key == id) {
          clientName.innerText = objObj[key].name;
          clientMail.innerText = objObj[key].email;
          form.qu.value = objObj[key].question;
          form.ans.value = objObj[key].answer;
          if (objObj[key].type == 'paid') {
            proMsg.hidden = false;
            if (objObj[key].paidflag == true) {
              paidCheck.checked = true;
              form.ans.disabled = false;
            } else {
              paidCheck.checked = false;
              form.ans.disabled = true;
            }
          } else {
            simpleMsg.hidden = false;
            document.querySelector('.form-check').hidden = true;
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

// Save answer to base
form.addEventListener('submit', (event) => {
  event.preventDefault();
})

save.addEventListener('click', () => {
  let upObj = {};
  upObj.answer = form.ans.value;
  if (upObj.answer != '') {
    upObj.answerflag = true;
  } else {
    upObj.answerflag = false;
  }
  if (paidCheck.checked == true) {
    upObj.paidflag = true;
  } else {
    upObj.paidflag = false;
  }

  db.ref('Questions').child(id).once('value')
    .then(snap => {
      let currQu = snap.val();
      if (!currQu.author) {
        upObj.author = auth.currentUser.email.slice(0, auth.currentUser.email.indexOf('@'));
      }
    })
    .then(() => {
      db.ref('Questions').child(id).update(upObj)
        .then(() => {
          rezMsg.innerText = 'Відповідь записана';
          rezMsg.style.color = 'green';
          setTimeout(() => {rezMsg.innerText = ''}, 2000);
        })
        .catch(err => {
          rezMsg.innerText = 'Зберегти не вдалося!';
          rezMsg.style.color = 'red';
          setTimeout(() => {rezMsg.innerText = ''}, 2000);
          console.log(err.message);
        })
    })
})

// Send ready question to client
send.addEventListener('click', () => {

    let toClientSend = {
        email: {
            html: btoa(encodeURIComponent('Декодированный проверочный кусок')),
            text: "Обычный проверочный кусок",
            subject: "ТЕСТ отправки!",
            from: {
                name: "ПРАВОВА ГРУПА ЮСТА-ЕКСПЕРТ",
                email: "info@justa.com.ua"
            },
            to: [
                {
                    name: "Client name",
                    email: "deftime@gmail.com"
                }
            ]
        }
    }

    let authData = {
        grant_type: 'client_credentials',
        client_id: '64157bc95ada7581f6643401eee578eb',
        client_secret: 'a85f32be55baeb5c43daf4cfeb6cd4fc'
    }

    let apiToken = getCookie('SPtoken');

    if (!apiToken) {
        console.log('Try to get new token...');
        fetch('https://api.sendpulse.com/oauth/access_token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        }).then(resp => {
            return resp.json();
        }).then(data => {
            console.log('New token have taken! Check cookies.');
            apiToken = data.token_type + ' ' + data.access_token;
            setCookie('SPtoken', apiToken, {path: '/', 'max-age': 3600});
        }).catch(err => {
            console.log(err);
        })
    }

    fetch('https://api.sendpulse.com/smtp/emails', {
        method: 'POST',
        headers: {
            'Authorization': apiToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toClientSend)
    }).then(resp => {
        return resp.json();
    }).then(data => {
        console.log('Result: ' + data.result + ', ID: ' + data.id);
    }).catch(err => {
        console.log(err);
    })

})

// Delete question from base!
del.addEventListener('click', () => {
  if (confirm('Realy DELETE this question?')) {
    db.ref('Questions').child(id).remove();
    window.location.href = 'manage.html';
  }
})

// let toClientSend = {
//     from: 'info@justa.com.ua',
//     to: [clientMail.innerText],
//     subject: 'Відповідь на Ваше питання',
//     html_body: `<p><strong>Вас вітає "Правова група ЮСТА-ЕКСПЕРТ"!</strong></p><p>Дякуємо, що скористалися нашим сервісом юридичної онлайн-допомоги! Ми підготували відповідь на ваше питання у відповідності з типом обраної відповіді.</p><p>Майте на увазі, що це відповідь, яка сформована на основі ваших слів. Для отримання більш детальної консультації - будь ласка зверніться до нашого офісу з усіма необхідними документами та максимально детальним обсягом інформації про вашу ситуацію.</p><p>Якщо ви помітили помилки або незручності у роботі нашого сервісу - будь ласка повідомте нас листом на цю адресу deftime@gmail.com або надішліть повідомлення через форму зворотнього зв'язку у розділі "Про нас".</p><p><em><strong>Ваше питання:</strong></em></p><p>${form.qu.value}</p><p><em><strong>Відповідь:</strong></em></p><p>${form.ans.value}</p>`
// }
//
// fetch('https://api.mailhandler.ru/message/send/', {
//     method: 'POST',
//     headers: {
//         'X-Secure-Token': '4666a172-9424-414c-89a7-31e8a103a807',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(toClientSend)
// }).then(resp => {
//     console.log(resp.status);
//     rezMsg.innerText = 'Відповідь надіслано!';
//     rezMsg.style.color = 'green';
//     setTimeout(() => {rezMsg.innerText = ''}, 2000);
//     db.ref('Questions').child(id).update({sendflag: true});
// }).catch(err => {
//     console.log(err.message);
//     rezMsg.innerText = 'Надіслати не вдалося!';
//     rezMsg.style.color = 'red';
// })

// if (confirm('Really SEND this question to customer?')) {
//
//     window.open(`mailto:${clientMail.innerText}?subject=Відповідь на ваше питання&body=Вас вітає Правова група ЮСТА-ЕКСПЕРТ! Ми підготували відповідь на ваше питання. ПИТАННЯ: ${form.qu.value} ВІДПОВІДЬ: ${form.ans.value}`);
//
//     db.ref('Questions').child(id).update({sendflag: true});
// }
