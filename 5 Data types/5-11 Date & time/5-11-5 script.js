/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
Иногда это 30, 31 или даже февральские 28/29.
Параметры:
    year – год из четырёх цифр, например, 2012.
    month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
 */

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month);
  let lastDate = 0;
  while (true) {
    date.setDate(date.getDate() + 1);
    if (date.getDate() < lastDate) {
      return lastDate;
    } else {
      lastDate = date.getDate();
    }
  }
}
