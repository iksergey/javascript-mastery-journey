let str = "hello world!";

// >h<
// >e<
// ...

// for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     console.log(`>${element}<`);
// }

for (const e of str) {
    console.log(`[${e}]`);
}
