import React from 'react'

const newPromise = new Promise((resolve, reject) => {
  reject("something is wrong");
  resolve(() => {
    return new Promise((innerResolve) => {
      innerResolve("inner resolve");
    });
  });
});
