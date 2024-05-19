const user = {
    name: "John",
    age: 30,
};

const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

// Используем стрелочную функцию для сохранения контекста
person.greet = () => {
    console.log("Hello, my name is " + person.name);
};

const car = new Object();
car.mark = "Toyota";
car.model = "Corolla";
car.year = 2020;

function Book(title, author) {
    this.title = title;
    this.author = author;
}
const book = new Book("Книга", "Автор книги");


console.log(person.name);
person.greet();

console.log(person["age"]);

// Использование цикла for...in для вывода свойств объекта person
for (const key in person) {
    console.log(key + ": " + person[key]);
}
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

const product = {
    "id": 123456,
    "name": "Smartphone",
    "brand": "Samsung",
    "model": "Galaxy S20",
    "price": 799.99,
    "features": {
        "processor": "Exynos",
        "ram": "8 GB",
        "storage": "128 GB",
        "battery": "4000 mAh"
    }
};