/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)

Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */

function getSecondsToday() {
  let today = new Date();
  let todayOnlyDate = new Date(
    today.getFullYear(), today.getMonth(), today.getDate()
  );
  return (Math.round((today - todayOnlyDate) / 1000));
}

console.log(getSecondsToday());
