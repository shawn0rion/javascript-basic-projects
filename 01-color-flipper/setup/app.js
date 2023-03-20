const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// create btn event
//  get color from array with rdm idx 
//  main.background = newColor
//  span.color.innerHTML = newColor
//get btn
// get span
let btn = document.getElementById('btn');
let main = document.querySelector('main');
let colorText = document.querySelector('.color');

btn.addEventListener('click', handleColorSwitch);

function handleColorSwitch() {
    let thisColorIdx = colors.indexOf(main.style.backgroundColor);
    let randomIdx = getRandomNumber(colors.length);
    let newColor = colors[randomIdx];
    main.style.backgroundColor = newColor;
    document.querySelector('.color').innerHTML = newColor;
}

function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
}