let burger = document.querySelector('.burger');
let open = document.querySelector('.mainMenu');

burger.addEventListener('click', openMenu);

function openMenu(event) {
  if (open.style.height) {
    open.style.height = '';
  } else {
    open.style.height = '450px';
  }
}
