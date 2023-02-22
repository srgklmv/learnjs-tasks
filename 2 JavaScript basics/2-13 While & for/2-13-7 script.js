let num = 2;
let n = 100000;

// Solution 1
// for (; num < n; num++) {
//     let counter = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             counter++;
//         }
//     }
//     if (counter == 2) {
//         console.log(num);
//     }
// }

// Solution 2
numbers: for (; num < n; num++) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            continue numbers;
        }
    }
    console.log(num);
}
