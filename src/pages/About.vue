<template>
  <div class="about mainAbout">
    <h1>Про Нас</h1>
    <p><img src="../images/justa.png" alt="justa_law_company" width="300px">Головним творцем та ідеологом проекту є юридична компанія "Правова група "ЮСТА-ЕКСПЕРТ", яка здійснює свою діяльність з грудня 2010 року. Великий досвід роботи наших фахівців в різних напрямках юридичної практики дозволяє нам ефективно захищати інтереси та права людини у будь-якій ситуації. Ми створили цей проект спільно з нашими партнерами, шоб у наш цифровий час кожна людина, яка потребує допомоги, змогла її отримати прямо біля свого компьютера. Не потрібно телефонувати, записуватися на пройом, шукати та чекати спеціальних заходів з правової допомоги. Достатньо просто зайти на наш спеціальний сайт та в онлайн-режимі оформити своє запитання, щоб згодом отримати відповідь на свою поштову скриньку. Наші юристи-учасники проекту це молоді люди, які працюють переважно на волонтерській основі, відповідаючі на безкоштовні запитання. Цим самим вони не лише допомагають людям, а й практикують своє знання юриспруденції. Також у нас є окремий режим для тих, хто хоче терміново та якісно отримати відповідь від досвідченого юриста у потрібній сфері. Для цього необхідно оформити своє запитання через окрему форму "Питання PRO". Для відповіді на таке питання ми залучаємо наших досвідчених адвокатів та спеціалістів наших партнерів.</p>
    <hr>
    <h2>Наші партнери</h2>
    <div class="partners">
      <div class="partner"><a href="http://weareukrainians.com/" target="_blank"><img src="../images/weareukr.png" alt="weareukrainians"></a></div>
      <div class="partner"><a href="http://www.pravozahist.com/" target="_blank"><img src="../images/lawprot.png" alt="pkg_law_group"></a></div>
      <div class="partner"><a href="http://vivates.com.ua" target="_blank"><img src="../images/vivates.jpg" alt="advocat_law_firm"></a></div>
    </div>
    <hr>
    <h2>Зв'язатися з нами</h2>
    <form class="feedbackForm" name="formMsg" @submit="sendMsg">
      <label for="ff-mail">Ваш E-Mail:</label><br>
      <input type="email" id="ff-mail" name="ffmail" required><br>
      <label for="ff-text">Ваше повідомлення:</label><br>
      <textarea name="fftext" id="ff-text" rows="8" cols="80" required></textarea><br>
      <div id="okLine"></div>
      <input type="submit" name="ff-button" value="Надсілати"><div class="loader-mini"></div>
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
        document.querySelector('.loader-mini').style.display = 'none';
        document.querySelector('#okLine').innerHTML = `Ваше повідомлення надіслано!`;
      }).then(() => {
        document.forms.formMsg.reset();
      }).catch(error => {
        document.querySelector('.loader-mini').style.display = 'none';
        document.querySelector('#okLine').innerHTML = `Надіслати не вдалося!`;
        document.querySelector('#okLine').style.color = 'red';
        console.log(error.message);
      })
    }
  }
}
</script>
