let user = prompt("Кто там?", "");

if (+user == 0) {
    alert("Отменено");
}
else if (user == "Админ") {

    let password = prompt("Пароль?", "");

    if (password == "Я главный") {
        alert("Здравствуйте!");
    }
    else if (+password == 0) {
        alert("Отменено");
    }
    else {
        alert("Неверный пароль")
    }

}
else {
    alert("Я вас не знаю");
}
