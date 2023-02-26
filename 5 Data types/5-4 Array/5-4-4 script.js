/*
Напишите функцию sumInput(), которая:

    Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
    Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
    Подсчитывает и возвращает сумму элементов массива.

P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

function sumInput() {
  let arr = [];

  while (true) {
    let input = prompt("Enter value:", "");
    if (input === null ||  input.length == 0 || isFinite(input) == 0) {
      break;
    }
    arr.push(Number(input));
  }

  let summary = 0;
  for (num of arr) {
    summary += num;
  }
  alert(summary);
}

sumInput();
