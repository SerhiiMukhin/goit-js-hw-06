function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const text = document.querySelector('.color');

const changeColorBtn = document.querySelector('.change-color');

function changeBodyColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  text.textContent = newColor;
}

changeColorBtn.addEventListener('click', changeBodyColor);
