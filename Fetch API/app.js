//? -----------FETCH API--------------

//CALLBACK-->PROMİSE
//AJAX(XMLHTTPREQUEST)-->FETCH APİ

//Promise<Response>
//Promise
// function getStudents(url) {
//   const promise = fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getStudents("students.json");

function getData(url) {
  return fetch(url);
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
}

getData("https://jsonplaceholder.typicode.com/albums")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
