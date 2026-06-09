<template>
  <div class="mainAbout">
    <h1>Про Нас</h1>
    <div class="about">
      <a href="https://weareukrainians.com/" target="_blank" class="logo-link">
        <img src="../images/weareukr.png" alt="we_are_ukr_logo" width="300px">
      </a>
      <div class="aboutText">
        <p>Головним ідеологом проекту є <b>Міжнародне гуманітарне об’єднання «Ми Українці»</b>, яке створене 24 квітня 2007 року.</p>
        <p>Основним завданням <b>МГО «Ми Українці»</b> є сприяння забезпеченню та правового захисту конституційних прав та свобод кожної людини. Проект створено у співпраці з юридичною компанією <b>&quot;Правова група &quot;ЮСТА-ЕКСПЕРТ&quot;</b>. Великий досвід роботи адвокатів та юристів в різних напрямках юридичної практики дозволяє нам ефективно захищати інтереси та права людини у будь-якій ситуації.</p>
        <p>Ми створили цей проект спільно з нашими партнерами, щоб у наш цифровий час кожна людина, яка потребує допомоги, змогла її отримати прямо біля свого комп’ютера. Не потрібно телефонувати, записуватися на прийом, шукати та чекати спеціальних заходів з правової допомоги. Достатньо просто зайти на наш спеціальний сайт та в онлайн-режимі оформити своє запитання, щоб згодом отримати відповідь на свою поштову скриньку.</p>
        <p>Наші учасники проекту це адвокати та юристи, які працюють переважно на волонтерській основі, відповідаючи на безкоштовні запитання. Також у нас є окремий режим для тих, хто хоче терміново та якісно отримати відповідь від досвідченого юриста у потрібній сфері. Для цього необхідно оформити своє запитання через окрему форму <b>&quot;Питання PRO&quot;</b>. Для відповіді на таке питання ми залучаємо досвідчених адвокатів наших партнерів.</p>
      </div>
    </div>
    <hr>
    <h2>Наші партнери</h2>
    <div class="partners">
      <a href="https://pravozahist.com/" target="_blank" class="partner">
        <img src="../images/lawprot.png" alt="pkg_law_group">
      </a>
      <a href="https://justa.com.ua/" target="_blank" class="partner">
        <img src="../images/justa.png" alt="justa_company">
      </a>
      <div class="partner">
        <img src="../images/vivates.jpg" alt="advocat_law_firm">
      </div>
    </div>
    <hr>
    <h2>Зв'язатися з нами</h2>
    <form class="feedbackForm" name="formMsg" @submit="sendMsg">
      <label for="ff-mail">Ваш E-Mail:</label><br>
      <input type="email" id="ff-mail" name="ffmail" required><br>
      <label for="ff-text">Ваше повідомлення:</label><br>
      <textarea name="fftext" id="ff-text" rows="8" cols="80" required></textarea><br>
      <div id="okLine"></div>
      <input type="submit" name="ff-button" value="Надіслати"><div class="loader-mini"></div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'about',
  methods: {
    sendMsg: function (event) {
      document.querySelector('.loader-mini').style.display = 'inline-block';
      event.preventDefault();
      let email = document.forms.formMsg.elements.ffmail.value;
      let msg = document.forms.formMsg.elements.fftext.value;

      document.querySelector('.loader-mini').style.display = 'none';
      document.querySelector('#okLine').innerHTML = `Форма тимчасово не працює, вибачаємося за незручності. Для зв'язку з нами пишіть - <strong>deftime@gmail.com</strong>`;


      // let sendObj = {
      //   from: 'info@justa.com.ua',
      //   to: ['deftime@gmail.com'],
      //   subject: 'Повідомлення зі сторінки Контактів',
      //   html_body: `<p>Повідомлення з сайту Онлайн-допомоги</p><p>Від: ${email}</p><hr><p>${msg}</p>`
      // }
      //
      // fetch('https://api.mailhandler.ru/message/send/', {
      //   method: 'POST',
      //   headers: {
      //     'X-Secure-Token': '4666a172-9424-414c-89a7-31e8a103a807',
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(sendObj)
      // }).then(response => {
      //   console.log(response.status);
      //   document.querySelector('.loader-mini').style.display = 'none';
      //   document.querySelector('#okLine').innerHTML = `Ваше повідомлення надіслано!`;
      // }).then(() => {
      //   document.forms.formMsg.reset();
      // }).catch(error => {
      //   document.querySelector('.loader-mini').style.display = 'none';
      //   document.querySelector('#okLine').innerHTML = `Надіслати не вдалося!`;
      //   document.querySelector('#okLine').style.color = 'red';
      //   console.log(error.message);
      // })
    }
  }
}
</script>
