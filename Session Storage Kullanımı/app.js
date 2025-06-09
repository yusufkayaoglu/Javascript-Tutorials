//Session storage --> Tarayıcı kapatıldığı anda silinir
//Local storage --> Tarayıcı kapatılsa bile silinmez
//Her ikisi de window objesinin içinde olduğundan başında window olmadan çağırılabilir

//Değer Ekleme
sessionStorage.setItem("350", "Yusuf");
sessionStorage.setItem("216", "Bilal");
sessionStorage.setItem("154", "Enes");
sessionStorage.setItem(552, 37);

//Değer Silme
// sessionStorage.removeItem("154");

// let value = sessionStorage.getItem("350");
// console.log(value);

// let value = sessionStorage.getItem("350");
// if (value == null) {
//   console.log("Değer bulunamadı");
// } else {
//   console.log("Değer bulundu : " + value);
// }

//Hepsini silme
// sessionStorage.clear();

// let value = sessionStorage.getItem(552);
// console.log(typeof value);

//Session Storage - Array Yazdırma
let names = ["Ali", "Enes", "Kübra", "Adem", "Ayşenur"];
sessionStorage.setItem("names", JSON.stringify(names)); //Elimizdeki array'i sanki oraya arraymış gibi yazdırmayı sağlar

let value = JSON.parse(sessionStorage.getItem("names")); //Array'e çevirme
value.forEach(function (name) {
  console.log(name);
});
console.log(value);
