function checkAge(age) {
    // if (age > 18) {
    //     return true;
    // } else {
    //     return confirm('Родители разрешили?');
    // }
    return (age > 18) ? true : console.log('Родители разрешили?');
}

result = checkAge(22);
console.log(result);
