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
      document.querySelector('#preloader').remove();
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
        if (objObj[key].newflag == true) {
          var newD = true;
        } else {
          var newD = false;
        }
        let autD = objObj[key].author;
        let datD = objObj[key].date;

        createRow(numD, titD, typeD, answD, sendD, autD, datD, quid, newD);

      }
    })
    .then(() => {
      let massRows = Array.from(table.rows);
      let sortedRows = massRows.sort((rowA, rowB) => {
        let a = Date.parse(rowA.cells[6].innerText.split('.').reverse().join('-'));
        let b = Date.parse(rowB.cells[6].innerText.split('.').reverse().join('-'));
        return b - a;
      });
      for (let i = 0; i < sortedRows.length; i++) {
        sortedRows[i].cells[0].innerText = i + 1;
      }
      table.append(...sortedRows);
    })
    .catch(error => {
      console.log(`Ошибка в блоке(х) then! ${error.message}`);
    });
}


function createRow(num, title, type, answer, send, author, date, id, newly) {
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

  if (newly == true) {
    row.style.fontWeight = 'bold';
  }

  row.style.cursor = 'pointer';
  row.setAttribute('quid', id);

  row.addEventListener('click', editQu);
}

function editQu(event) {
  let attrQuId = this.getAttribute('quid');
  let upObj = {
    newflag: false
  };
  db.ref('Questions').child(attrQuId).update(upObj)
    .catch(error => {
      console.log('НЕ удалось обновить флаг! '+error.message);
    });
  window.location.href = 'answer.html' + '?id=' + attrQuId;
}

// Filters

let filterForm = document.forms.filterForm;
let tabForFilter = document.getElementsByTagName('tr');


filterForm.addEventListener('change', sortList);

function sortList(event) {
  let curr = event.target.value;
  let filterId;

  if (event.target.name == 'ansFilter') {
    filterId = 3;
  } else if (event.target.name == 'typeFilter') {
    filterId = 2;
  } else {
    filterId = 4;
  }

  for (let key of tabForFilter) {
    // console.log(key.children[1].innerText);
    if (key.children[filterId].innerText == curr || key == document.querySelector('.thead-light > tr') || curr == 'all') {
      key.hidden = false;
    } else {
      key.hidden = true;
      for (let key of filterForm.elements) {
        if (key.name != event.target.name) {
          key.value = 'all';
        }
      }
    }
  }
}
