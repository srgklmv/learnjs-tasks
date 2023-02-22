/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false
 */

function isEmpty(object) {
    let propertyCounter = 0;
    for (let property in object) {
        propertyCounter++;
    }
    return propertyCounter === 0;
}

let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false
