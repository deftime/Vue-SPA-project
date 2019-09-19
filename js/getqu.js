// let butt = document.querySelector('.create');
// butt.addEventListener('click', () => {
//   createRow(1, 'Question', 'PRO', 'No', 'No', 'Lawer', 'today');
// });


let table = document.querySelector('tbody');

var db = firebase.database();

document.addEventListener('DOMContentLoaded', buildList);

function buildList() {
  let objObj;
  db.ref('Questions').once('value')
    .then(snap => {
      objObj = snap.val();
      let counter = 0;
      for (let key in objObj) {
        let quid = key;
        let numD = ++counter;
        let titD = objObj[key].question;
        if (objObj[key].type == 'free') {
          var typeD = 'Звичайне';
        } else {
          var typeD = 'PRO';
        }
        if (objObj[key].answerflag == true) {
          var answD = 'Так';
        } else {
          var answD = 'Ні';
        }
        if (objObj[key].sendflag == true) {
          var sendD = 'Відправлено';
        } else {
          var sendD = 'Ні';
        }
        let autD = objObj[key].author;
        let datD = objObj[key].date;

        createRow(numD, titD, typeD, answD, sendD, autD, datD, quid);

      }
    })
    .catch(error => {
      console.log(`Получить данные не удалось: ${error.message}`);
    });
}


function createRow(num, title, type, answer, send, author, date, id) {
  let row = document.createElement('tr');
  let th = document.createElement('th');
  let titleEl = document.createElement('td');
  let blockIn = document.createElement('div');
  let typeEl = document.createElement('td');
  let answerEl = document.createElement('td');
  let sendEl = document.createElement('td');
  let authorEl = document.createElement('td');
  let dateEl = document.createElement('td');

  th.innerText = num;
  blockIn.innerText = title;
  typeEl.innerText = type;
  answerEl.innerText = answer;
  sendEl.innerText = send;
  authorEl.innerText = author;
  dateEl.innerText = date;

  row.append(th);
  row.append(titleEl);
  titleEl.append(blockIn);
  blockIn.classList.add('blInTable');
  row.append(typeEl);
  row.append(answerEl);
  row.append(sendEl);
  row.append(authorEl);
  row.append(dateEl);
  table.append(row);

  if (typeEl.innerText == 'PRO') {
    typeEl.style.color = 'green';
    typeEl.style.fontWeight = 'bold';
  }

  row.style.cursor = 'pointer';
  row.setAttribute('quid', id);

  row.addEventListener('click', editQu);
}

function editQu(event) {
  let attrQuId = this.getAttribute('quid');
  window.location.href = 'answer.html' + '?id=' + attrQuId;
}
