// Basics of Recursion
// Function call itself is called recursion
// Recursion can be done only in a function and not file level or outside function

// How does normal function works
/* const sum = (a, b) => {
  return a + b;
};

console.log('before sum call');
console.log(sum(10, 20));
console.log('after sum call'); */

// Function callling other function that calls another function
const test4 = () => {
  console.log('inside test4');
  return 10;
};
const test3 = () => {
  console.log('inside test3');
  const ans = test4();
  console.log('test4 ans is ', ans);
  return ans;
};

const test2 = () => {
  console.log('inside test2');
  const ans = test3();
  console.log('test3 ans is ', ans);
  return ans;
};
const test1 = () => {
  console.log('inside test1');
  const ans = test2();
  console.log('test2 ans is ', ans);
  console.log('I am adding 20 in the ans');
  const newAns = ans + 20;
  console.log(
    "I'm also doing other console log as long as I want and also run other logic"
  );
  return newAns;
};

// console.log(test1());

// Print * N times without loop
const printStar = (n) => {
  if (n < 1) return;
  console.log('*');
  printStar(n - 1);
};

// printStar(5)

// Print n to 1 without using loop
const printToN = (n) => {
  // base condition
  if (n < 1) return;

  console.log(n);
  printToN(n - 1);
};

// printToN(10);

// Print 1 to N without loop
const print1ToN = (n) => {
  if (n < 1) return;
  print1ToN(n - 1);
  console.log(n);
};

// print1ToN(10)

const binarySearchRecursion = (arr, ele, low, high) => {
  const middle = Math.floor((high + low) / 2);

  if (high < low) {
    return -1;
  } else if (arr[middle] === ele) {
    return middle;
  } else if (arr[middle] < ele) {
    // go to right
    return binarySearchRecursion(arr, ele, middle + 1, high);
  }
  // go to left
  return binarySearchRecursion(arr, ele, low, middle - 1);
};

const binarySearch = (arr, ele) => {
  debugger;
  const low = 0;
  const high = arr.length - 1;
  return binarySearchRecursion(arr, ele, low, high);
};

// const arr = [10, 50, 63, 68, 79, 95, 98, 99];
// const ele = 5;
// const index = binarySearch(arr, ele);
// console.log(index);

// Method 1
const insertSorted = (arr, ele, low, high) => {
  const middle = Math.floor((high + low) / 2);
  if (high === low) {
    if (arr[low] > ele) {
      // 10 > 5
      // add value in the left
      return arr.splice(low, 0, ele);
    }
    // if both are same means, we need to insert value here
    return arr.splice(low + 1, 0, ele);
  } else if (arr[middle] < ele) {
    // go to right
    return insertSorted(arr, ele, middle + 1, high);
  }
  // go to left
  return insertSorted(arr, ele, low, middle);
};

// const arr = [10, 50, 63, 68, 79, 95, 98, 99];
// const ele = 97;
// const low = 0;
// const high = arr.length - 1;

// insertSorted(arr, ele, low, high);
// console.log(arr);

// Method 2
// As the arr is already sorted, iterate one by one and insert the value
const insertSorted2 = (arr, ele) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] >= ele) break;
    i++;
  }
  arr.splice(i, 0, ele);
};

// const arr = [10, 50, 63, 68, 79, 95, 98, 99];
// const ele = 97;
// insertSorted2(arr, ele);
// console.log(arr);
