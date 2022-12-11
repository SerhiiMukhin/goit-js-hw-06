function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]');

const boxContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  amount = input.value;
  for (let index = 0; index < amount; index += 1) {
    const div = document.createElement("div")
    div.classList.add("createdDiv")
    boxContainer.append(div);
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + 10*index}px`;
    div.style.height = `${30 + 10*index}px`;
  }
}

function destroyBoxes(amount) {
  amount = boxContainer.childElementCount;
for (let index = 0; index < amount; index += 1) {
  const divToRemove = document.querySelector(".createdDiv")
  divToRemove.remove()
}
}

createBtn.addEventListener("click", createBoxes)
destroyBtn.addEventListener("click", destroyBoxes)

