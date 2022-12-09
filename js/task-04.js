let counterValue = 0

const counter = document.querySelector('#value');

const decreaseBtn = document.querySelector('button[data-action="decrement"]');
console.log(decreaseBtn)

const increaseBtn = document.querySelector('button[data-action="increment"]');
console.log(increaseBtn)

decreaseBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
})

increaseBtn.addEventListener("click", () => {
    counterValue += 1;
    counter.textContent = counterValue;
})