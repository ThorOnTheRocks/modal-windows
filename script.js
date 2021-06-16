// Selecting DOM elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const body = document.querySelector('body');


// Open Modal Window
const openModal = btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})






