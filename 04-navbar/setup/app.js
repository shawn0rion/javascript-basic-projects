// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
// --
// .nav-center > .nav-header / .links > li / .social-media > li
// document 800 px threshold, if less than, then links move
// looking for nav button and links
// what is height of links

let links = document.querySelector('.links');
let toggleBtn = document.querySelector('.nav-toggle');

toggleBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
});