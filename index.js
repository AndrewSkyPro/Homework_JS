//Задание 1

let a = 10;
a = 20;
alert(a);

//Задание 2

let firstIphone = 2007;
alert(2007);

//Задание 3

let nameJava = 'Brendan Eich';
alert(nameJava);

//Задание 4

let x = 10;
let y = 2;
alert(`${x + y}, ${x - y}, ${x * y}, ${x / y}`);

//Задание 5

let z = 2;
let result = (z ** 5);
alert(result);

//Задание 6

let c = 9;
let b = 2;
alert(`${c % b}`);

//задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

//задание 8

let age = prompt('Сколько вам лет?');
alert(age);

//Задание 9.0

const user = {
    name: 'Andrew',
    age: 34,
    isAdmin: false
};

//Задание 9.1

user['city of residence'];

//Задание 9.2

user.age = 35
console.log(user.age);

//Задание 9.3

delete user['city of residence'];

//Задание 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10

let userName = prompt('Как ваше имя?');
alert(`Привет, ${userName}!`);