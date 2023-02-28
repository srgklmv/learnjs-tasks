/*
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
    Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
    В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
    В противном случае, если меньше часа, вывести "m мин. назад".
    В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
  let now = new Date();
  if (now - date < 1000) {
    return "прямо сейчас";
  } else if (now - date < 60 * 1000) {
    return `${Math.round((now - date) / 1000)} сек. назад`;
  } else if (now - date < 3600 * 1000) {
    return `${Math.round((now - date) / (60 * 1000))} мин. назад`;
  } else {
    let d = [YY , MM, DD, HH, mm] = [
      '0' + date.getFullYear(),
      '0' + date.getMonth(),
      '0' + date.getDate(),
      '0' + date.getHours(),
      '0' + date.getMinutes(),
    ];
    return `${DD.slice(-2)}.${MM.slice(-2)}.${YY.slice(-2)} ${HH.slice(-2)}:${mm.slice(-2)}`; //"DD.MM.YY HH:mm"
  }
}
