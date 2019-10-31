<template>
  <div class="how mainInfo">
    <div class="infoGraph">
      <div class="block">
        <img src="../images/question.png" alt="Задаєте питання" width="100px">
        <h3>Задаєте питання</h3>
        <p>Надсилаєте питання через форму на цьому сайті, вказавши свою електронну пошту.</p>
      </div>
      <div class="arrow">
        <img src="../images/right.png" alt="rightArrow" width="100px">
      </div>
      <div class="block">
        <img src="../images/computer.png" alt="Опрацювання" width="100px">
        <h3>Опрацювання...</h3>
        <p>Юристи-учасники проекту беруть у роботу питання у порядку черги та формують відповідь. (Хочете отримати розширену відповідь поза чергою? Скористайтесь Питанням Pro!)</p>
      </div>
      <div class="arrow">
        <img src="../images/right.png" alt="rightArrow" width="100px">
      </div>
      <div class="block">
        <img src="../images/mail.png" alt="Отримуєте відповідь" width="100px">
        <h3>Отримуєте відповідь!</h3>
        <p>Ви отримуєете готову відповідь на електронну адресу, яку вказали при надсиланні питання.</p>
      </div>
    </div>
    <p>Швидкість відповіді залежить від загальної кількості надісланних питань від усіх користувачів у певний період часу, а також від завантаженності юристів. Якщо хочете гарантовано отримати відповідь у найкортший термін - скористайтесь Питанням PRO.</p>
    <div class="buttonBlock">
      <router-link to="/free" tag="button" class="buttonFree">Задати безкоштовне питання</router-link>
      <router-link to="/paid" tag="button" class="buttonPaid">Задати питання PRO</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'how'
}
</script>
