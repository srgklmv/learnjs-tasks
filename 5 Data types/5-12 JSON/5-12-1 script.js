/*
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
 */

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
console.log(json);
user = JSON.parse(json);
console.log(typeof user);
console.log(user);
