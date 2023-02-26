/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0».
 */

function getMaxSubSum(arr) {
  let sum = 0;
  let newSum = 0;

  for (num of arr) {
    if (num > sum) {
      sum = num;
    }
    if (newSum + num > 0) {
      newSum += num;
      if (newSum > sum) {
        sum = newSum;
      }
    } else {
      newSum = 0;
    }
  }
  return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) == 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) == 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) == 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) == 100);
console.log(getMaxSubSum([1, 2, 3]) == 6);
