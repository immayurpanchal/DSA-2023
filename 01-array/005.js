console.log('hello from 5');

const findMin = (arr) => {
  let min = 1000000000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const findMax = () => {
  let max = -1000000000;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const arr = [-10, 5, 8, 4, 50, 9];
// console.log(findMin(arr));
console.log(findMax(arr));
