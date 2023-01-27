//Задание 1

let password = 'пароль';
let answerUser = prompt('Введите пароль');
if (answerUser === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неверно");
}

//Задание 2 (доделать с другими значениями переменной с)

let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3

let d = 200;
let e = 50;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4

let a = 2;
let b = 3;
alert(a + b);

//Задание 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('В году всего 12 месяцев');
        break;
}