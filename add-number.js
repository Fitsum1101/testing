import React from 'react'

const number = () => {
  return (
    <div>add-number</div>
  )
}

export default add-number


const newPromise = new Promise((resolve, reject) => {
  reject("something is wrong");
  resolve(() => {
    return new Promise((innerResolve) => {
      innerResolve("inner resolve");
    });
  });
});