<template>
  <div class="pro mainPro">
    <p><strong>Питання PRO</strong> - це спеціальна приоритетна платна послуга відповіді на запитання для тих, кому терміново потрібна допомога кваліфікованого юриста. Ви отримаеєте відповідь найближчим часом. Відповідь буде значно більшою, ніж у звичайному режимі. У пріоритетному режимі усі питання обробляються поза чергою і юристи фактично надають вам послугу, на відміну від звичайного режиму, де відповідь іде на волонтерській основі. Обриючи Питання PRO Ви можете бути впевнені, що гарантовано отримаєте якісну юридичну допомогу онлайн.</p>
    <div class="proTab">
      <table border="1" width="100%">
        <tr>
          <th>Переваги питань</th>
          <th>Звичайне</th>
          <th>PRO</th>
        </tr>
        <tr>
          <td>Отримання відповіді на електронну пошту</td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Необмежена кількість запитань</td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Безкоштовно</td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
          <td><img src="../images/cross.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Гарантована відповідь</td>
          <td><img src="../images/cross.png" alt="check" width="30px"></td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Відповідь найближчим часом (поза чергою, 1-2 доби)</td>
          <td><img src="../images/cross.png" alt="check" width="30px"></td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Розширена відповідь</td>
          <td><img src="../images/cross.png" alt="check" width="30px"></td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Залучення до відповіді досвітченого юриста спеціального напрямку</td>
          <td><img src="../images/cross.png" alt="check" width="30px"></td>
          <td><img src="../images/check.png" alt="check" width="30px"></td>
        </tr>
        <tr>
          <td>Вартість</td>
          <td>Безкоштовно</td>
          <td>100 грн.</td>
        </tr>
      </table>
    </div>
    <div class="buttonBlock">
      <router-link to="/paid" tag="button" class="buttonPaid">Задати Питання PRO</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'pro'
}
</script>
