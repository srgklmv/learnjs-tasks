/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
 */

function aclean(arr) {
  let sortedLetters = {};
  for (let word of arr) {
    let letters = Array.from(word.toLowerCase());
    sortedLetters[letters.sort()] = word;
  }
  return Object.values(sortedLetters);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
