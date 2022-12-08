const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

const partTwo = document.querySelectorAll('ul#categories > .item');
partTwo.forEach(item => {
    const title = item.querySelector('h2');
    const elements = item.querySelectorAll('li')
    console.log(`Category: ${title.textContent}`)
    console.log(elements.length)
})

// const title = document.querySelectorAll('.item > h2');
// for (let index = 0; index < title.length; index += 1) {
//   console.log(`Category: ${title[index].textContent}`);
// }

// const elements = document.querySelectorAll('#categories > li.item > ul')
// for (let index = 0; index < elements.length; index += 1) {
//     console.log(`Elements: ${elements[index].childElementCount}`);   
// }

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
