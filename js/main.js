function openMenu(button) {
   const menuID = button.dataset.menu;
   const menuEl = document.querySelector(`.${menuID}`);
 
   button.classList.toggle('open')
   menuEl.classList.toggle('hidden')
 }