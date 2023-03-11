/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

//First version
// function printList(list) {
//   let values = [];
//   while (list.next) {
//     values.push(list.value);
//     list = list.next;
//   }
//   values.push(list.value);
//   values.reverse();
//   for (let value of values) {
//     console.log(value);
//   }
// }

// printList(list);

//Second version
function printList(list) {
  if (list.next) {
    printList(list.next);
    console.log(list.value);
  } else {
    console.log(list.value);
  }
}

printList(list);

