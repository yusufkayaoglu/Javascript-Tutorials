//? ASYNC AWAIT

//PROMISE THEN ZİNCİRİ

// then(){
//     then(){
//         then(){
//             console.log("dsfasdfasdf")
//         }
//     }
// }

//Fonksiyonun önüne async yazdığımızda hello() promise döner
// async function hello() {
//   return "Hello World";
// }

// console.log(hello());
// hello().then((res) => console.log(res));

// document.querySelector("#button").addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => {
//       console.log(post);
//       fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments));
//     });
// });

//Yukarıdakilerin async await ile yapılışı
//Sen bir yerde await kullanıyorsan kullanmış olduğun fonksiyonun başında async keyword'ü olmalıdır!!
//Bir yerde promise dönüyorsa bunu awaitle beklemek zorundasın!!
document.querySelector("#button").addEventListener("click", async () => {
  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  const comments = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    )
  ).json();

  console.log(comments);
});
