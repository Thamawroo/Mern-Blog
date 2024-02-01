// ==== string build in method =====

const string = "HELLO";
const numbers = 5;
console.log(string.slice(0,3));
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.replace('L', 1));
//console.log(Hello)

const strings = `${string} world this is purwadhika ${numbers}`;

console.log(typeof numbers);
console.log(strings); 

//const numbers = 5.1234;
// console.log(numbers.);

console.log(parseInt("12345"));
console.log(String(12345));

const js = "1" + "1";
console.log(js);

console.log(Boolean(3));
console.log(Boolean(""));

let dateNow = new Date();
let customDate = new Date("2024-01-01");
console.log(dateNow);
console.log(customDate);
let add0Day = new Date(0);
console.log(add0Day);
let add1Day = new Date(24 * 3600 * 1000);
console.log(add1Day);

let add1DayFromNow = new Date(dateNow.getTime() + 24 * 3600 * 1000);
console.log(add1DayFromNow);

let newDate = "2023-02-01";
let newDate1 = new Date("2023-02-01");
console.log(typeof newDate);
console.log(typeof newDate1);

console.log(newDate1.getFullYear());
console.log(newDate1.getDate());
// dalam Javascript jika ingin mendapatkan bulan yang diinginkan
//harus ditambah 1 karena bulan dalam Javascript dimulai dari 0
console.log(newDate1.getMonth() + 1);

// let value = "1.2";
// let newValue = Number(value) + 1;
// console.log(newValue);
//console.log(value);

// value = 2;
// console.log(value);

// console.log("Hello" + "World");

const nums = 1 + (1 * 1) / 1;
console.log(nums);

// 5 adalah Operand pertama
// 2 adalah operand kedua
// jika ada 2 operand maka disebut binary
const operand = 5 * 2;

// jika hanya ada 1 operand maka disebut unary
let x = 2;
x = ++x; // x = 1, x = 2 + 1 // x = x + x;
//x = --x; // x = 2, x = 2 - 1 // x = x - x;
console.log(x);


let kalimat = "Hello";
let kalimat2 = "World!";
let angka1 = 1234;
// const newKalimat = kalimat + " " + kalimat2;
const newKalimat = `${kalimat} ${kalimat2} ${angka1}`;
console.log(newKalimat);
console.log(123 + true);

let n = 2;
// n += 5; // n = 2 + 5 / n = n + 5
n *= 2; // n = 2 * 2 / n = n * 5
console.log(n);

let y = 5;
// prefix form
console.log(++y); // 5 + 1

// postfix form
console.log(y++); // 6 + 1
console.log(y);

let num1 = 1;
let num2 = "1";

// pengecekan value tanpa memperdulikan tipe data
console.log(num1 == num2);
console.log(num1 != num2);

// pengecekan value yang memperdulikan tipe data
console.log(num1 === num2);
console.log(num1 !== num2);

console.log(num1 > num2);

