// objects.js

// 1. Creating an object using object literal
let person = {
    name: "Swati",
    age: 30,
    city: "San Francisco",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log("Person Object:", person);
person.greet();

// 2. Accessing object properties
console.log("Name:", person.name);       // Dot notation
console.log("Age:", person["age"]);     // Bracket notation

// 3. Updating object properties
person.age = 31;
person["city"] = "Los Angeles";
console.log("Updated Person:", person);

// 4. Adding new properties
person.profession = "Software Engineer";
console.log("After Adding Profession:", person);

// 5. Deleting properties
delete person.city;
console.log("After Deleting City:", person);

// 6. Nested objects
let student = {
    id: 101,
    name: "John Doe",
    marks: {
        math: 90,
        science: 85,
        english: 88
    }
};

console.log("Student Name:", student.name);
console.log("Math Marks:", student.marks.math);

// 7. Object inside an array
let cars = [
    { brand: "Toyota", model: "Camry", year: 2020 },
    { brand: "Honda", model: "Civic", year: 2022 },
    { brand: "Tesla", model: "Model 3", year: 2023 }
];

cars.forEach(car => {
    console.log(`${car.brand} - ${car.model} (${car.year})`);
});

// 8. Object constructor function
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
    this.speak = function () {
        console.log(`${this.type} says ${this.sound}`);
    };
}

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");

dog.speak();
cat.speak();
