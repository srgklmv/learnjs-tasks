let number = prompt("Enter number bigger than 100:", "");

while (number < 100) {

    if (number == null) {
        break;
    }

    number = prompt("Enter number bigger than 100:", "");
}
