// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
let overlay = document.querySelector('.modal-overlay');
let modalBtn = document.querySelector('.modal-btn');
let closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    overlay.classList.add('open-modal');
})

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open-modal');
})