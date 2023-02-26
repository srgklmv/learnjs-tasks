/*
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
 */

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.substr(0, maxlength - 1) + "…";
    }
    else {
        return str;
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хотело…");
console.log(truncate("Всем привет!", 20) == "Всем привет!");
