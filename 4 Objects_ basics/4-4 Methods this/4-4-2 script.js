/*
Создайте объект calculator (калькулятор) с тремя методами:
    read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
    sum() (суммировать) возвращает сумму сохранённых значений.
    mul() (умножить) перемножает сохранённые значения и возвращает результат.
 */

let calculator = {

    read(x, y) {
        this.x = x;
        this.y = y;
    },

    sum() {
        return this.x + this.y;
    },

    mul() {
        return this.x * this.y;
    }
};

calculator.read(1, 2);
console.log( calculator.sum() );
console.log( calculator.mul() );
