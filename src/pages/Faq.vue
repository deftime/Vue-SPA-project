<template>
  <div class="faq mainFaq">
    <p>На цій сторінці Ви знайдете відповіді на найбільш поширені питання. Якщо ви не знайшли тут необхідну Вам відповідь - ви можете звернутися до нас через форму зворотнього зв'язку, яка розміщена на сторінці "Хто ми?"</p>
    <div class="faqQu">
      <input type="checkbox" id="check">
      <label for="check" class="faqPlus plus"></label>
      <label for="check" class="faqMinus minus"></label>
      <div class="quWrapper">
        <label for="check" class="question">
          Це безкоштовно?
        </label>
        <div class="ask open">
          Так, використання сервісу у звичайному режимі абсолютно безкоштовне. Вам лише потрібно дочекатися відповіді на вашій електронній скринці.
        </div>
      </div>
    </div>
    <div class="faqQu">
      <input type="checkbox" id="check1">
      <label for="check1" class="faqPlus plus1"></label>
      <label for="check1" class="faqMinus minus1"></label>
      <div class="quWrapper">
        <label for="check1" class="question">
          Як довго чекати відповідь?
        </label>
        <div class="ask open1">
          Це залежить від завантаженності сервісу. Якщо нам надходить багато питань, юристи не встигають їх обробляти і час очікування може значно зростати.
        </div>
      </div>
    </div>
    <div class="faqQu">
      <input type="checkbox" id="check2">
      <label for="check2" class="faqPlus plus2"></label>
      <label for="check2" class="faqMinus minus2"></label>
      <div class="quWrapper">
        <label for="check2" class="question">
          Чи гарантовано я отримаю відповідь?
        </label>
        <div class="ask open2">
          На жаль, у звичайному режимі ми не можемо Вам гарантувати отримання відповіді. Наші юристи працюють у проекті на волонтерській основі і відповідають на питання у вільний від роботи час. Особливо це стосується під час великого навантаження сервісу.
        </div>
      </div>
    </div>
    <div class="faqQu">
      <input type="checkbox" id="check3">
      <label for="check3" class="faqPlus plus3"></label>
      <label for="check3" class="faqMinus minus3"></label>
      <div class="quWrapper">
        <label for="check3" class="question">
          Чи можна швидко та гарантовано отримати відповідь?
        </label>
        <div class="ask open3">
          Так, звичайно, така можливість є, для цього Вам потрібно скористатися послугою <strong>Питання PRO</strong>!
        </div>
      </div>
    </div>
    <div class="faqQu">
      <input type="checkbox" id="check4">
      <label for="check4" class="faqPlus plus4"></label>
      <label for="check4" class="faqMinus minus4"></label>
      <div class="quWrapper">
        <label for="check4" class="question">
          Що таке Питання PRO?
        </label>
        <div class="ask open4">
          Це спеціальний пріоритетний режим отримання відповіді. У цьому режимі ви <strong>гарантовано</strong>, у <strong>найкоротші строки</strong> отримаєте <strong>розширену</strong> відповідь на ваше запитання. Такі питання обробляються поза чергою, до них можуть долучатися більш кваліфіковані юристи, а відповідь виходить більш об'ємнішою ніж у звичайному режимі. Більше інформації ви можете дізнатися на сторінці <strong>Питання PRO</strong>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'faq'
}
</script>
