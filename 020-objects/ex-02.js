const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

person.name = "Jane"
person.greet();

person.newLogic = () => console.log("newLogic");
person.newLogic();

console.log(person.age);
console.log(person["age"]);

for (const key in person) {
    // console.log(key);
    const item = person[key];
    if (typeof item === "function") {
        const func = item.bind(person);
        func();
    }
    else {
        console.log(item);
    }
    // console.log(person[key]);
}