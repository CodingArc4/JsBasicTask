const box1 = document.getElementById('box-1');
// box1.innerHTML = 'Hello World!';

box1.style.backgroundColor = 'red';

const boxes = document.getElementsByClassName('box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('round-border');
} 

box1.classList.remove('round-border');

const newParagraph =  document.createElement('p');
newParagraph.innerHTML = 'This is brand new paragraph';
newParagraph.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newParagraph);