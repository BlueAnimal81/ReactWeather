/*
function addPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number') {
      reject(`${a} is not a number`);
    }
    if (typeof b !== 'number') {
      reject(`${b} is not a number`);
    }
    var ret = a + b;
    resolve(ret);
  });
}

addPromise(1, 2).then(
  (ret) => {
    console.log('success:', `The answer is ${ret}`);
  },
  (err) => {
    console.log('error:', err);
  }
);

addPromise(1, 'blah').then(
  (ret) => {
    console.log('success:', `The answer is ${ret}`);
  },
  (err) => {
    console.log('error:', err);
  }
);
*/
