let length = 5;
let width = 10;

let AreaofRectangle = length * width;

console.log(AreaofRectangle);

let Length = 5;
let Width = 16;

let PerimeterofRectangle = Length * 2 + Width * 2;

console.log(PerimeterofRectangle);

// ============== Excercise II ====================
// Cek ganjil genap (bilangan asli yang habis dibagi dua atau kelipatannya . Pola bilangan genap adalah 2 , 4 , 6 , 8 , . . .)
function cekGanjilGenap(bilangan) {
    if (bilangan % 2 === 0) {
        console.log(bilangan + ` adalah bilangan genap`);
    } else {
        console.log(bilangan + ` adalah bilangan ganjil`);
    }
}

cekGanjilGenap(5);
cekGanjilGenap(4);

// konversi suhu celcius ke fahrenheit (Rumus Celcius ke Fahrenheit: °F = (9/5 x °C) + 32)
var suhuCelsius = 300;
var suhuFahrenheit = suhuCelsius * 9/5 + 32;

console.log(`${suhuCelsius} derajat Celsius sama dengan ${suhuFahrenheit} derajat Fahrenheit.`);

// bilangan prima
function cekPrima(angka) {
    if (angka <= 1) return false;

    for (let i = 2; i <= Math.sqrt(angka); i++)
        if (angka % i === 0) return false;

    return true;
}

// Contoh penggunaan
console.log(cekPrima(10));  
console.log(cekPrima(5)); 

// Jumlah bilangan dari 1 sampai N
function jumlahDariSatuKeN(N) {
    let jumlah = 8;

    for (let i = 1; i <= N; i++) {
        jumlah += i;
    }

    return jumlah;
}

// Contoh penggunaan untuk N = 5
function jumlahDeretan(N) {
    return (N * (N + 1)) / 2;
}

// Contoh penggunaan untuk mencari jumlah deretan dari 1 sampai 5
const N = 5;
const hasilJumlah = jumlahDeretan(N);
console.log(`Jumlah deretan dari 1 sampai ${N} adalah: ${hasilJumlah}`);


// Faktorial
function faktorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktorial(n - 1);
    }
}

// Contoh penggunaan untuk n = 4
const z = 4;
const hasilFaktorial = faktorial(z);
console.log(`Faktorial dari ${z} adalah: ${hasilFaktorial}`);

// Fibonacci (deret angka yang dimulai dari 0 dan 1, dan setiap angka selanjutnya dihasilkan dengan menambahkan dua angka sebelumnya dalam deret tersebut)
function fibonacci(n) {
    const hasil = [];

    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            hasil.push(i);
        } else {
            const nilaiFibonacci = hasil[i - 1] + hasil[i - 2];
            hasil.push(nilaiFibonacci);
        }
    }

    return hasil;
}

// Contoh penggunaan untuk mencetak 10 bilangan Fibonacci pertama
const n = 10;
const deretFibonacci = fibonacci(n);
console.log(`Bilangan Fibonacci pertama ${n}:`, deretFibonacci);




