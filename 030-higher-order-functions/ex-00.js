const numbers = [1, 2, 3, 4];

const div2 = el => el % 2 === 0;

function getItems(items, checkItem) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (checkItem(item)) {
            result.push(item);
        }
    }
    return result;
}

const result1 = getItems(numbers, div2);
const result2 = getItems(numbers, e => e % 2 === 0);
const result3 = getItems(numbers, e => e % 5 === 0);
const result4 = getItems(numbers, e => e < 0);
const result5 = getItems(numbers, e => e > 0);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);


const resFilter = numbers.filter(e => e % 2 === 0);
console.log(resFilter);


function select(items, logic) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        result.push(logic(element));
    }
    return result;
}

// const resSelect = select(numbers, e => e + 1);
const resSelect = numbers.map(e => e ** 2);
console.log(resSelect);

