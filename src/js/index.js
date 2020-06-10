import moment from 'moment';

/* place your code below */

console.log(
  `Hello! My name is Daniel and I was born ${moment(
    '19961117',
    'YYYYMMDD'
  ).fromNow()}. Imma frontend dev. It is nice to see you in the console.`
);
console.log(`Make yourself at home. Mi casa, es tu casa.`);

// Look for .hamburger
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
  // Toggle class "is-active"
  hamburger.classList.toggle('is-active');
  // Do something else, like open/close menu
});

/*
const visitorName = prompt(
  'Hello! You can left your name here for something really cool.'
);
const sad = `I'm really sad that I don't know your name :c.`;
if (visitorName != '') {
  const welcomeText = document.querySelector('.welcome__text--js');
  if(welcomeText !== null){
    welcomeText.innerHTML = visitorName;
  }
  console.log(`Nice to meet you ${visitorName}!`)
} else if (visitorName === null) {
  console.log(sad);
} else {
  console.log(sad);
};
*/

const button = document.querySelector('.hamburger--js');
button.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--available');
});
console.log(`It is ${moment().format('dddd')} today.`);
