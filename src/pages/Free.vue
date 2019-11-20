<template>
  <div class="free mainQu">
    <div class="descQu">
      <h3>Умови Послуги</h3>
      <p>На цій сторінці ви можете скористатися сервісом у <strong>загальному режимі</strong> та надіслати безкоштовне юридичне запитання.</p>
      <p>Запитання у загальному режимі обробляються у порядку черги, а час очікування відповіді залежить від завантаження сервісу. Отримання відповіді не гарантовано.</p>
      <p>Заповніть форму праворуч, вказавши ваше ім'я, адресу електронної пошти та сформуйте запитання. Суть питання описуйте лаконічно, стисло та максимально конкретно, уникаючи непотрібних та неважливих деталей.</p>
      <p><strong>Усі поля є обов'язковими для заповнення.</strong></p>
      <p>Зверніть увагу на електронну пошту! Саме на неї ви отримаєте відповідь. Вказуйте діючу пошту та перед відправкою перевірте на відсутність помилок.</p>
    </div>
    <div class="formQu">
      <form class="formFree" id="formFree" name="quForm" @submit="sendQu">
        <label for="free-name">Ваше ім'я:</label><br>
        <input type="text" id="free-name" name="quName" value="" required><br>
        <label for="free-mail">Ваша електронна пошта:</label><br>
        <input type="email" id="free-mail" name="quMail" value="" required><br>
        <label for="free-qu">Сформуйте ваше запитання:</label><br>
        <textarea name="qu" id="free-qu" rows="8" cols="55" required></textarea><br>
        <input type="checkbox" name="quCheck" value="agree" required><span>Я погоджуюсь з Умовами послуги</span><br>
        <div id="sendMsg"></div>
        <button type="submit">Надіслати безкоштовне питання</button><div class="loader-mini"></div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'free',
  methods: {
    sendQu: function(event) {
      document.querySelector('.loader-mini').style.display = 'inline-block';
      event.preventDefault();
      var db = firebase.database();
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
          document.querySelector('.loader-mini').style.display = 'none';
          if (window.location.href.indexOf('free') > -1) {
            msg.innerHTML = `Питання надіслано!<br>Чекайте відповідь на вказаний Вами e-mail.`;
          } else {
            let sendObj = {
            from: 'info@justa.com.ua',
            to: [email],
            subject: 'Сплата Питання PRO',
            html_body: `<p><strong>Вітаємо!</strong></p>Дякуємо, що скористалися нашим сервісом. Ви вибрали пріоритетне питання PRO, відповідь на яке є платною. Для отримання відповіді будь ласка здійсніть оплату на карту - 5168 7422 2090 3607.</p><p>ВАЖЛИВО! Щоб ми могли ідентифікувати ваш платіж проводьте оплату від того самого імені, яким ви підписали запитання. Або, якщо здійснюєте оплату від іншого імені - напишіть нам його у відповідь на цей лист. Якщо ви сплачуєте через термінал вказуйте прізвище та ім'я у коментарях до транзакції. (Також бажано зберегти квитанцію до того моменту, поки ви не отримаєте відповідь).</p>`
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
              msg.innerHTML = `Питання надіслано!<br>Інструкції по оплаті відправлено на вказаний Вами e-mail.`;
              console.log(response.status);
            }).catch(error => {
              msg.innerHTML = `Виникла помилка. Спробуйте ще раз або зверніться до адміністратора, вказавши цю помилку:<br>${error.message}`;
              console.log(`НЕ отправлено письмо с инструкциями! ${error.message}`);
            })
          }

        })
        .then(() => {
          form.reset();
        })
        .catch(error => {
          document.querySelector('.loader-mini').style.display = 'none';
          msg.innerHTML = `Виникла помилка. Спробуйте ще раз або зверніться до адміністратора, вказавши цю помилку:<br>${error.message}`;
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
      this.newflag = true;
      this.author = '';
      this.date = (new Date().getDate()) + '.' + (new Date().getMonth()+1) + '.' + (new Date().getFullYear());
    }
  }
}
</script>
