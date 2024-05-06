// Основы ООП в JavaScript

// 1. Объекты и классы
// В JavaScript объект — это отдельная сущность со свойствами и типом.

class Animal {
 constructor(name) {
 this.name = name;
 }
speak() {
 console.log(`${this.name} издает звук.`);
 }
}
let animal = new Animal('Cat');
animal.speak(); 


// 2. Инкапсуляция
// Инкапсуляция означает, что внутреннее представление объекта скрыто снаружи.

class Car {
 constructor(brand) {
 this._brand = brand;
 }
get brand() {
 return this._brand;
 }
set brand(newBrand) {
 this._brand = newBrand;
 }
}
let myCar = new Car('Ford');
console.log(myCar.brand); // Ford
myCar.brand = 'BMW';
console.log(myCar.brand); // BMW


// 3. Наследование
// Наследование позволяет классу наследовать свойства и методы другого класса.

class Animal {
 constructor(name) {
 this.name = name;
 }
speak() {
 console.log(`${this.name} издает звук.`);
 }
}
class Cat extends Animal {
 speak() {
 console.log(`${this.name} мяукает.`);
 }
}
let cat= new Cat('Felix');
cat.speak(); 



// 4. Полиморфизм
// Полиморфизм позволяет рассматривать объекты разных классов как объекты одного суперкласса.

class Animal {
 speak() {
 console.log('Животное издает звук');
 }
}
class Cat extends Animal {
 speak() {
 console.log('Meow');
 }
}
class Dog extends Animal {
 speak() {
 console.log('Woof');
 }
}
function AnimalSpeak(animal) {
 animal.speak();
}
makeAnimalSpeak(new Cat()); 
makeAnimalSpeak(new Dog()); 


// 5. Абстракция
// Абстракция предполагает создание простых моделей, представляющих сложные объекты реального мира.

class Vehicle {
 startEngine() {
 console.log('Двигатель включен');
 }
stopEngine() {
 console.log('Двигатель остановлен');
 }
}
class Car extends Vehicle {
 startEngine() {
 console.log('Двигатель машины включен');
 }
}
let myCar = new Car();
myCar.startEngine(); 



// 6. Конструкторы и новое ключевое слово
// Конструкторы — это специальные функции, которые создают и инициализируют объекты.

class Person {
 constructor(name, age) {
 this.name = name;
 this.age = age;
 }
}
let person = new Person('Alice', 25);
console.log(person); // Person { name: 'Alice', age: 25 }



// 7. Методы — методы экземпляра, статические и прототипные.
// Методы в классах JavaScript могут быть методами экземпляра, статическими или прототипами.

class Rectangle {
 constructor(width, height) {
 this.width = width;
 this.height = height;
 }
// Экземпляр
 getArea() {
 return this.width * this.height;
 }
// Статичный
 static compareArea(rect1, rect2) {
 return rect1.getArea() - rect2.getArea();
 }
}
let rect1 = new Rectangle(2, 3);
let rect2 = new Rectangle(4, 6);
console.log(Rectangle.compareArea(rect1, rect2)); 


// 8. Геттеры и сеттеры
// Геттеры и сеттеры позволяют определять средства доступа к объектам.


class Person {
 constructor(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
 }
get fullName() {
 return `${this.firstName} ${this.lastName}`;
 }
set fullName(name) {
 [this.firstName, this.lastName] = name.split(' ');
 }
}
let person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe
person.fullName = 'Jane Smith';
console.log(person.fullName); // Jane Smith
