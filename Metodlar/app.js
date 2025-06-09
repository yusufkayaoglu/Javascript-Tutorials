//Parametresiz ve geriye değer döndürmeyen metot tanımlamak

// function yazdir(){
//     debugger;
//     console.log("Yusuf");
// }
// debugger;
// yazdir();
// yazdir();

// function topla() {
//   console.log(5 + 7);
// }

// topla();

//Parametreli metot tanımlamak

// function yazdir(isim, soyisim) {
//   debugger;
//   console.log(isim + "" + soyisim);
// }

// debugger;
// yazdir("Yusuf", "Kayaoğlu");

// cube(5);
// cube(3);

// function cube(sayi) {
//   console.log(sayi * sayi * sayi);
// }

// let yas = Number(prompt("Yaşınızı giriniz"));
// kontrolEt(yas);

// function kontrolEt(yas) {
//   if (yas > 18) {
//     console.log("Ehliyeti alabilirsiniz");
//   } else {
//     console.log("Ehliyeti alamazsınız");
//   }
// }

//Geriye değer döndüren metot tanımlamak

let donenDeger = cube(3);
kareAl(donenDeger);

/*
    Bir değeri metodun dışarısına çıkarmak , taşımak için kullanılır.
    Bir metodu bitiren anahtar kelimedir.
*/
// function cube(sayi) {
//   let sonuc = sayi * sayi * sayi;
//   return sonuc;
//   console.log(sonuc);
// }

// function kareAl(sayi) {
//   let sonuc = sayi * sayi;
//   console.log(sonuc);
// }

// function yazdir(){
//     console.log("Yusuf");
//     void : geriye değer döndürmeyen
// }
