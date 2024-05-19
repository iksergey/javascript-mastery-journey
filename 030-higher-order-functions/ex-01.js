const select = (items, employee) => {
    const temp = [];

    for (const item of items) {
        temp.push(employee(item));
    }
    return temp;
}

const where = (items, logic) => {
    const temp = [];

    for (const item of items) {
        if (logic(item)) {
            temp.push(item);
        }
    }
    return temp;
}

const mark = (value) => {
    return value * 2;
}

const alex = (value) => {
    return value * 10;
}

let numbers = [1, 2, 3, 4, 5];
let res = select(numbers, mark);
console.log(res);

const logic = (el) => {
    return el % 2 === 0;
}

res = where(numbers, e => e % 3 === 0);
console.log(res);

