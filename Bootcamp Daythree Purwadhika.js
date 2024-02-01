// ============ Else, if, Else if =============

let age = 18;
let status = "Fresh Graduate";
let gender = "Women";


if (age > 17 && age < 20) {
    // block of code if
    console.log("bisa membuat KTP");
    console.log("masih bisa membuat KTP");
} else if (age > 20 || age == 20) {
    // block code "else if"
    console.log("sudah memiliki KTP");
} else {
    // block of code else
    console.log("belum bisa membuat KTP");
}

console.log("if sudah selesai");

if (age > 21 && status == "Fresh Graduate" && gender == "Men") {
    console.log("bisa kerja");
} else {
    console.log("bisa kerja")
}


if (age > 14) {
    if (gender == "Men") {
        console.log("kamu laki-laki");
    } else if (gender == "Women") {
        console.log("kamu perempuan");
    } else {
        console.log("Dirahasiakan")
    }
}

// ============= SWITCH =================

let buah = "Apple";

switch (buah) {
    case "Oranges":
        console.log("Harga oranges adalah Rp 5000");
        break;
      case "Manggoes":
        console.log("Harga manggoes adalah Rp 10.000");
        break;
      case "Apple":
        console.log("Harga apple adalah Rp 15.000")
        break;
      case "Papayas":
        console.log("Harga papayas dan apple adalah Rp 12.000");
        break;

}

//============Truthy Or Falsy==========
console.log(Boolean(0));
console.log(Boolean("bla2"));

let inputuser = " ";

if (inputuser) {
   console.log("Input sudah dimasukan");
} else {
  console.log("Input belum dimasukan");  
}

console.log(
    inputuser 
    ? console.log ("input sudah dimasukan")
    : console.log ("input belum dimasukan")
);
    
let bool = true;
let angka = 2;

if (!(angka === 2)) {
    console.log("masuk");
}

// ======= LOOP ================

const numberToCheck = 10;
let isEven;

if (numberToCheck % 2 === 0) {
    isEven = `${numberToCheck} is an even number`;
} else {
    isEven = `${numberToCheck} is not an even number`;
}


console.log(isEven);
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }

}

//=========== LOOP, "While"============
let i = 0;
let bools = true;
while (bools) {
if (i == 6) { bools = false;}
   console.log(i);
   i++;

}

//=========== LOOP, "Do.. While"============
i = 0;
do {
   if (i == 6) {
    break;
   }
   console.log(i);
   i++;
} while (bools);

console.log("next line");

// ====== Continue; penggunaannya seperti Break; ======
for (let i = 0; i < 10; i++) {
    if (i == 5 || i == 6 || i == 7) {
        continue;
    }
    console.log(i);
}
console.log("next line");