const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("after rejected");
  }, 1000);
  reject("error");
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => {
    console.log(err);
  });
