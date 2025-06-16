//Callback nedir ?

//timing - event - http istekleri
//callback - promise - async await

//Callback : bir fonksiyonu bir fonksiyona parametre olarak geçerek
//asenkron bir yapıyı senkrona çeviririz.
function getName(callback) {
  setTimeout(() => {
    //Servisten ismini getirdi
    let name = "Enes"; //web servisten geldi
    callback(name);
  }, 1000);
}

function getSurname(name, callback) {
  setTimeout(() => {
    let surname = "Bayram"; //name'e göre soyismi buldu
    callback(surname);
  }, 500);
}

function getAge(name, surname, callback) {
  setTimeout(() => {
    let age = 23; //İsmi Enes ve soyismi Bayram olanı servisten yaşını getirdi
    callback(age);
  }, 300);
}

// getName(getSurname);
getName((name) => {
  getSurname(name, (surname) => {
    getAge(name, surname, (age) => {
      console.log(name, surname, age);
    });
  });
});

// getName();
// getSurname();
