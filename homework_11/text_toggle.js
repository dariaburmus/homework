const paragraph = document.querySelector('p');
const hideTextButton = document.getElementById('hide_text');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');

const hideableElements = [paragraph, increaseButton, decreaseButton];

let isTextHidden = false;
let fontSize = 15;

paragraph.style.fontSize = `${fontSize}px`;

hideTextButton.addEventListener('click', () => {
  if (isTextHidden) {
    hideableElements.forEach((el) => {
      el.style.visibility = 'visible';
    });
    hideTextButton.innerText = 'Hide text';

    isTextHidden = false;
  } else {
    hideableElements.forEach((el) => {
      el.style.visibility = 'hidden';
    });
    hideTextButton.innerText = 'Show text';

    isTextHidden = true;
  }
});

increaseButton.addEventListener('click', () => {
  fontSize += 1;

  paragraph.style.fontSize = `${fontSize}px`;
});

decreaseButton.addEventListener('click', () => {
  fontSize -= 1;

  paragraph.style.fontSize = `${fontSize}px`;
});