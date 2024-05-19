const person = {
    firstName: "Сергей",
    lastName: "Ка.",
    age: 33,
    gender: "мужской",
    occupation: "Наставник",
    address: {
        street: "123 Главная улица",
        city: "Какой-то город",
        country: "Россия"
    },
    hobbies: ["чтение", "бег", "готовка"],
    greet: function () {
        console.log(`Привет, меня зовут ${this.firstName} ${this.lastName}`);
    }
};

const product = {
    name: "Смартфон",
    brand: "Samsung",
    price: 599.99,
    inStock: true,
    specifications: {
        screenSize: "6.5 дюймов",
        RAM: "8 ГБ",
        storage: "128 ГБ"
    },
    displayDetails: function () {
        console.log(`Товар: ${this.brand} ${this.name}, Цена: $${this.price}`);
    }
};

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "синий",
    mileage: 5000,
    owner: {
        firstName: "Евгения",
        lastName: "Иванова",
        age: 35
    },
    drive: function () {
        console.log("Машина движется...");
    }
};

const bankAccount = {
    accountNumber: "1234567890",
    balance: 5000,
    currency: "Руб",
    owner: {
        firstName: "Василий",
        lastName: "Пупкин",
        age: 40
    },
    deposit: function (amount) {
        this.balance += amount;
        console.log(`Внесено $${amount}. Новый баланс: $${this.balance}`);
    },
    withdraw: function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Снято $${amount}. Новый баланс: $${this.balance}`);
        } else {
            console.log("Недостаточно средств.");
        }
    }
};
