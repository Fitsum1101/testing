// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("after rejected");
//   }, 1000);
//   reject("error");
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

// const newPromise = new Promise((resolve, reject) => {
//   reject("something is wrong");
//   resolve(() => {
//     return new Promise((innerResolve) => {
//       innerResolve("inner resolve");
//     });
//   });
// });

// newPromise
//   .then((result) => {
//     return result();
//   })
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((err) => console.log(err));

// Promise.all([1, 2, Promise.reject("rejected for some reason!!")])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

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
