/*
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600

P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(
    today.getFullYear(), today.getMonth(), today.getDate() + 1
  );
  return (Math.round((tomorrow - today) / 1000));
}

console.log(getSecondsToTomorrow());
