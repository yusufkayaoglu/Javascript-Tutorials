/*
İlkel(primitive) veri türleri->String,number,boolean,undefined,null,symbol->Stack bölümünde tutulur
İlkel olmayan(referance) veri türleri->Object,array,function->Heap bölümünde tutulur
*/

// let a = 5;
// let b = a;

// console.log("a : " + a);
// console.log("b : " + b);

// console.log("----------------------");

// b = 10;
// console.log("a : " + a);
// console.log("b : " + b);

// let dizi1 = [1, 2, 3];
// let dizi2 = [1, 2, 3];
// let dizi2 = dizi1;

// if (dizi1 == dizi2) {
//   console.log("esittir");
// } else {
//   console.log("esit degildir");
// }
// console.log(dizi1);
// console.log(dizi2);

/*Değer tiplerde b'de yaptığın değişiklik a'yı etkilemezken;
referans tiplerde dizi2 ile yaptığın değişiklik dizi1'i etkiler!!
*/

let dizi1 = [1, 2, 3];
let dizi2 = dizi1;
let dizi3 = dizi2;

dizi2.push(12);
dizi3.push(23);

console.log(dizi1);
console.log(dizi2);
