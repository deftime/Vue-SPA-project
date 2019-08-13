/* Links to buttons */

var freeButt = document.querySelector('.buttonFree');
var paidButt = document.querySelector('.buttonPaid');

freeButt.addEventListener('click', function(){goToForms(freeButt)});
paidButt.addEventListener('click', function(){goToForms(paidButt)});

function goToForms(butt) {
  if (butt == freeButt) {
    if (window.location.href.indexOf('pages') > -1) {
      window.location.href = 'free.html'
    } else {
      window.location.href = './pages/free.html'
    }
  } else if (butt == paidButt) {
    if (window.location.href.indexOf('pages') > -1) {
      window.location.href = 'paid.html'
    } else {
      window.location.href = './pages/paid.html'
    }
  }
};
