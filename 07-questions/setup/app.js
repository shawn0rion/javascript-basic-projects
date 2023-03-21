//using selectors inside the element
// traversing the dom

// add listener to click events on all .question-btn
// if click,
//  remove show text from all questions 
//  toggle show-text on parent [.question]
// 
const questions = document.querySelectorAll('.question');
let questionBtns = document.querySelectorAll('.question-btn');
questionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let questionTitle = btn.parentElement;
        let question = questionTitle.parentElement;
        if (question.classList.contains('show-text')){
            question.classList.remove('show-text');
        }
        else{
            removeAllShowText();
            question.classList.add('show-text');
        }
        question.classList.toggle('show-text');
    })
})
