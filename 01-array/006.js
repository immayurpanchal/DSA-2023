console.log('hello from 6');

const lastDuplicate = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      return i;
    }
  }
  return -1;
};

// const arr = [1, 5, 5, 6, 6, 7];
// const arr = [1, 2, 3];
const arr = [1, 2, 3, 3, 4, 4];
console.log(lastDuplicate(arr)); // index 4
