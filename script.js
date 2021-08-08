// function to change header hq colour
const header_message = 'Welcome to my projects gallery';
const header_des =
  'This is a showcase of my 12 weeks FAC22 pre-course learning journey';

let header = document.querySelector('header');

window.addEventListener('load', getHeader);

let text = header_message.split('');

function getHeader(random) {
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  h1.textContent = header_message;
  p.textContent = header_des;
  header.append(h1);
  header.append(p);
}
setInterval(() => {
  let random_colour = Math.floor(Math.random() * 16777215).toString(16);

  document.querySelector('h1').style.color = `#${random_colour}`;
}, 800);

setInterval(() => {
  let random_colour = Math.floor(Math.random() * 16777215).toString(16);

  document.querySelector('h1').style.color = `#${random_colour}`;
  document.querySelector('header > p').style.color = `#${random_colour}`;
}, 1083);

// function for like btn

const like_btn = document.querySelectorAll('.fa-thumbs-up');

like_btn.forEach((e) => {
  let count = 0;
  e.addEventListener('click', () => {
    count++;
    e.nextElementSibling.innerHTML = `${count}`;
    console.log(e.nextElementSibling);
    console.log('clicked');
  });
});
