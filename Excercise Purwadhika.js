"use strict";
const prompt = require("prompt-sync") ({sigint:true});

let length = parseFloat(prompt("5 :"));
let width = parseFloat(prompt("10 : "));

let area = length * width;
let perimeter = (length + width) * 2;

console.log('Area : $[area]');
console.log('Perimeter : ${perimeter}');

