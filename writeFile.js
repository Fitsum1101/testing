// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("after rejected");
//   }, 1000);
//   reject("error");
// });







const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo")
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status))
);

setTimeout((greeting) => console.log(greeting), 5000, "hi");
function heelo() {
  console.log("hi");
}
