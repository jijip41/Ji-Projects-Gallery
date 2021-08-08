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
  console.log('s');
}, 800);
