//MOUSE EVENTLARI

//DOMContentLoaded ->Sayfa yüklendiğinde çalışır
//load
//click
// dblclick
// mouseover
// mouseout
// mouseenter
// mousedown

// document.addEventListener("DOMContentLoaded", run);

// function run() {
//   alert("Sayfa Yüklendi");
// }

// window.addEventListener("load",run);

// function run() {
//   alert("Sayfa Yüklendi");
// }

// const cardTitle = document.querySelectorAll(".card-title")[1];

// cardTitle.addEventListener("click", run);

// function run(e) {
//   console.log(e.type);
// }

const cardTitle = document.querySelectorAll(".card-title")[1];
const cardBody = document.querySelectorAll(".card-body")[1];

cardTitle.addEventListener("mouseover", run);
cardTitle.addEventListener("mouseout", run);
cardTitle.addEventListener("mouseenter", run);
cardTitle.addEventListener("mouseleave", run);

function run(e) {
  console.log(e.type);
}
