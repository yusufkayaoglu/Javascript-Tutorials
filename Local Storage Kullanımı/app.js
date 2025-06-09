//Local Storage Kullanımı

//Değer Ekleme
localStorage.setItem("motion1", "Push up");
localStorage.setItem("motion2", "Barfix");
localStorage.setItem("motion3", "Burpee");
localStorage.setItem("motion4", "Squad");

//Değeri Almak

// let value = localStorage.getItem("motion1");
// console.log(value);

//Değer Silmek
localStorage.removeItem("motion4");

//Tümünü Temizle
// localStorage.clear();

// localStorage.clear();
let motions = ["Push up", "Barfix", "Burpee", "Squad", "Chin up"];

localStorage.setItem("motions", JSON.stringify(motions));

let value = JSON.parse(localStorage.getItem("motions"));
value.forEach(function (motion) {
  console.log(motion);
});
