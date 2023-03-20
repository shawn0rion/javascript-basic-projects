const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let main = document.querySelector('main');
let btn = document.querySelector('#btn');

btn.addEventListener('click', getHex);

function getHex(){
    let code = "#";
    for (let i = 0; i < 6; ++i){
        randIdx = getRandomNumber(hex.length);
        code += hex[randIdx];
    }
    main.style.backgroundColor = code;
    document.querySelector('.color').innerHTML = code;
}

function getRandomNumber(length){
    return Math.floor(Math.random() * length);
}