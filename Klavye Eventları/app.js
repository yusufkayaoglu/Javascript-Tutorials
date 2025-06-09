//KLAVYE EVENTLARI

//keypress-->harf ve sayılarda tetiklenen eventtır.

//keydown-->klavyedeki her şey ile çalışır

//keyup-->tuştan elini kaldırdığında çalışan event

// document.addEventListener("keypress", run);

// function run(e) {
//   console.log(e.key);
//   console.log(e.keyCode);
//   console.log(e.which);

//   if (e.keyCode == 116) {
//     alert("Sayfa yenileme engellendi");
//   }

//   e.preventDefault();
// }

const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup", run);
function run(e) {
  cardTitle.textContent = e.target.value;
}
