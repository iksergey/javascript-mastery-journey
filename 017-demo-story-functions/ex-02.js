function assistantMin(num1, num2, num3) {
    let tempMin;

    if (num1 < num2 && num1 < num3) {
        tempMin = num1;
    } else {
        if (num2 < num3) {
            tempMin = num2;
        } else {
            tempMin = num3;
        }
    }
    // console.log(tempMax);
    return tempMin;
}

let a1 = 11;
let a2 = 3;
let a3 = 5;

let a4 = 108;
let a5 = 501;
let a6 = 1;

let a7 = 80;
let a8 = -2;
let a9 = 8100;

let min1 = assistantMin(a1, a2, a3);
let min2 = assistantMin(a4, a5, a6);
let min3 = assistantMin(a7, a8, a9);
let result = assistantMin(min1, min2, min3);
console.log(result);