let count = 0;

let value = document.getElementById('value');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        let styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        }
        if (styles.contains('reset')){
            count = 0;
        }
        if (styles.contains('increase')){
            count++;
        }
        if (count > 0){
            value.style.color = "#00ff00";
        }
        if (count === 0){
            value.style.color = "#222";
        }
        if (count < 0) {
            value.style.color = '#ff0000'
        }
        value.innerHTML = count;
    })
});