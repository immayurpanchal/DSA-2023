// Last duplicate element in a sorted array
const arr = [1, 1, 2, 3, 3, 4, 5, 6, 6];

const findLastDuplicate = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i - 1]) {
      return i;
    }
  }
  return -1;
};

console.log(findLastDuplicate(arr));
