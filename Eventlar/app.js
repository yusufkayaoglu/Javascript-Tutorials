//Event (Olay)
//addEventListener()

const clearButton = document.querySelector("#todoClearButton");

//Tavsiye edilir
clearButton.addEventListener("click", changeTitle);

//Tavsiye edilmez
// clearButton.addEventListener("click", function () {
//   document.querySelectorAll(".card-title")[1].textContent =
//     "Todo Başlığını Değişti";
// });

// function changeTitle() {
//   document.querySelectorAll(".card-title")[1].textContent =
//     "Todo Başlığını Değişti";
// }

function changeTitle(e) {
  //event objesini gösterir = e parametresi
  console.log(e.type); //event tipini belirtir
  console.log(e.target); //etkilenmiş olan html etiketini verir
  console.log(e.target.textContent);
  console.log(e.target.className);
}
