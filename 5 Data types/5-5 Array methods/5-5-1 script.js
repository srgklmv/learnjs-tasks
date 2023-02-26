/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
потом переделайте всё как нужно и методом join соедините обратно.
 */

function firstLetterUpperCase(word, index) {
  if (index > 0) {
    return word.at(0).toUpperCase() + word.slice(1);
  } else {
    return word;
  }
}

function camelize(str) {
  let words = str.split("-");
  let newWords = words.map(firstLetterUpperCase);
  return newWords.join("");
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
