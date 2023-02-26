/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
 */

function ucFirst(word) {
    return word ? word[0].toUpperCase() + word.slice(1) : "";
}

console.log(ucFirst("вася") == "Вася");
console.log(ucFirst("hello?"));
console.log(ucFirst("???"));
console.log(ucFirst(""));
console.log(ucFirst("q"));
