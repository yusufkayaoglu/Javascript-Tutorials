//Asenkron Problemi

//HTTP İstekleri

const users = [
  {
    userId: 5,
    post: "Enes Post 1",
  },
  {
    userId: 5,
    post: "Enes Post 2",
  },
  {
    userId: 5,
    post: "Ali Post 1",
  },
  {
    userId: 6,
    post: "Enes Post 1",
  },
  {
    userId: 7,
    post: "Betül Post 1",
  },
];

//user id
//post by user id

//Asenkronu-->senkrona çevireceğiz.
//callback - promise - async await

// setTimeout(() => {}, 2000);

function getUserId(callback) {
  setTimeout(() => {
    //Servise gittik ve cevabı aldık
    let userId = 7;
    callback(userId);
  }, 1000);
}

function getPostByUserId(userId) {
  //Gerçek bir rest apiye istek atacaksınız.
  setTimeout(() => {
    users.forEach((user) => {
      if (user.userId == userId) {
        console.log(user.post);
      }
    });
  }, 500);
}

//Şuanda bu iki fonksiyon da asenkron çalışıyor(aynı anda).Dolayısıyla userId undefined oluyor.
// let userId = getUserId();
// getPostByUserId(userId);

//Eğer birbiriyle bağımlı işler yapıyorsan senkron yapman lazım,ama eğer işler bağımsızsa o zaman asenkron kullanılır!!!

getUserId(getPostByUserId);
