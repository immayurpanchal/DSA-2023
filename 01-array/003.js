console.log('Hello from 003');
// How to search, insert, and delete in an unsorted array

// Search
// Method 1
const findElement = (arr, eleToFind) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === eleToFind) return i;
  }
  return -1;
};

// const arr = [10, 20, 30, 40, 50, 60, 70];
// const index = findElement(arr, 50);
// console.log(index);

// Method 2

const findElement2 = (arr, eleToFind) => {
  return arr.indexOf(eleToFind);
};

// const arr = [10, 20, 30, 40, 50, 60, 70];
// const index = findElement2(arr, 60);
// console.log(index);

// Insert at the end
const insert1 = (arr, ele) => {
  arr.push(ele);
};

// const arr = [1,2,3,4]
// const ele = 10
// insert1(arr, ele)
// console.log(arr)

// Insert at any position
// Method 1
const insert2 = (arr, ele, pos) => {
  // step 1 - create temp arr
  const temp = [];

  // step 2 - copy from 0 to pos index in temp arr
  for (let i = 0; i < pos; i++) {
    temp.push(arr[i]);
  }

  // step 3 - add new elem in temp arr
  temp.push(ele);

  // step 4 - copy remaining in temp arr
  for (let i = pos; i < arr.length; i++) {
    temp.push(arr[i]);
  }

  // step 5 - copy till the arr size
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }

  // step 6 - copy remaining by pushing in the arr
  arr.push(temp[temp.length - 1]);
};

// const arr = [1, 2, 3, 4];
// const ele = 10;
// const pos = 2;

// Method 2
const insert3 = (arr, ele, pos) => {
  arr.splice(pos, 0, ele);
};

// insert2(arr, ele, pos);
// insert3(arr, ele, pos);
// console.log(arr);

// Delete in Unsorted Arr
// Method 1
const delete1 = (arr, ele) => {
  // step 1 - find element index
  const index = arr.indexOf(ele);
  // step 2 - create temp arr
  const temp = [];
  // step 3 - copy from 0 to index - 1
  for (let i = 0; i < index; i++) {
    temp.push(arr[i]);
  }
  // step 4 - copy from index + 1 to length
  for (let i = index + 1; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  // step 5 - copy temp values into arr
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  // step 5 - change arr length to current size - 1
  arr.length = arr.length - 1;
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const ele = 3;
// delete1(arr, ele);
// console.log(arr);

// Method 2
/*
- Find the index 
- move the elements of the right to one left 
- reduce the arr size by -1 
*/
const delete2 = (arr, ele) => {
  const index = arr.indexOf(ele);

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const ele = 4;
// delete2(arr, ele);
// console.log(arr);

// Method 3
// inbuilt js - splice
const delete3 = (arr, ele) => {
  const index = arr.indexOf(ele);
  arr.splice(index, 1);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const ele = 4;
delete3(arr, ele);
console.log(arr);
