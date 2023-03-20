// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// reviews [OBJ] sorted by
//  id / name / job / img.jpeg / text per IDX
//     / #author #job #person-img #info
let currentID = 1;

// all reviews need to be identified by their id
let img = document.getElementById('person-img');
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');

let prev = document.querySelector('.prev-btn');
let next = document.querySelector('.next-btn');
let suprise = document.querySelector('.random-btn');
next.addEventListener('click', () => {
  currentID += 1;
  containID();
  let review = reviews.find(x => x.id === currentID);
  editUI(review);
})

prev.addEventListener('click', () => {
  currentID -= 1;
  containID();
  let review = reviews.find(x => x.id === currentID)
  editUI(review);
})

suprise.addEventListener('click', () => {
  getRandomID();
  let review = reviews.find(x => x.id === currentID);
  editUI(review);
})

function containID(){
  if (currentID < 1){
    currentID = reviews.length;
  } 
  if (currentID > reviews.length){
    currentID = 1;
  }
}

function editUI(review){
  img.src = review.img;
  author.innerHTML = review.name;
  job.innerHTML = review.job;
  info.innerHTML = review.text;
}

function getRandomID() {
  currentID = Math.floor(Math.random() * reviews.length) + 1;
}

editUI(reviews[0]);