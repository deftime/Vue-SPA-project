let blocks = document.querySelectorAll('.block');

// window.onload = () => {
//   if (document.documentElement.clientWidth > 1025) {
//     let maxH = Math.max(blocks[0].offsetHeight, blocks[1].offsetHeight, blocks[2].offsetHeight);
//     blocks[0].style.height = blocks[1].style.height = blocks[2].style.height = `${maxH}px`;
//   }
// }

function equalHeights(...arr) {                     //Функция, которая выравнивает по высоте любые
  let massNum = [];                                 //указанные блоки на странице. В качестве
  let clientW = 1025;                               //аргументов принимает DOM-объекты, которые
  for (let i = 0; i < arr.length; i++) {            //нужно выровнять. Так же, необязательным
    if (typeof(arr[i]) == 'object') {               //аргументом является число, которые задает
      massNum.push(arr[i].offsetHeight);            //ширину браузера, при которой выравнивание
    } else if (typeof(arr[i]) == 'number') {        //выключается. (Например, в моб.версии,
      clientW = arr[i];                             //              по-умолчанию - 1025px)
    } else {
      throw new Error('Функция принимает только DOM-елементы и одно число!');
    }
  }
  let maxH = Math.max.apply(null, massNum);
  console.log(clientW);
  if (document.documentElement.clientWidth > clientW) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof(arr[i]) == 'number') {
        continue;
      }
      arr[i].style.height = `${maxH}px`;
    }
  }
}

window.onload = () => {
  equalHeights(blocks[0], blocks[1], blocks[2]);
}
