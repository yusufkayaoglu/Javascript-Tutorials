//Koşul Yapıları

// let not = 65;

// if (not > 50) {
//   console.log("Geçtiniz , notunuz : " + not);
// } else {
//   console.log("Kaldınız , notunuz : " + not);
// }

let yas = Number(prompt("Yaşınız : "));
console.log(typeof yas);
let para = Number(prompt("Bütçeniz : "));

if (yas >= 18 && para >= 3000) {
  alert("Ehliyet Sınavına Katılabilirsiniz");
} else {
  alert("Ehliyet Sınavına Katılamazsınız");
}
