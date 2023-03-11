/*
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

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

Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
Ответ: конкретно в этом примере можно комфортно использовать оба варианта. В общей практике рекурсия обычно предпочтительнее из-за
простоты чтения кода, хотя может быть гораздо менее производительной, чем конструкция из циклов и условных операторов.
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
function printList(list) {
  let obj = list;
  console.log(obj.value);
  while (obj.next) {
    obj = obj.next;
    console.log(obj.value);
  }
}

printList(list);

//Second version
function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

printList(list);


