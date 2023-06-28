// Merge Sort

// Merge Already sorted 2 arrays
const mergeArr = (arr1, arr2) => {
  const newArr = [];
  let i = (j = 0);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);
      j++;
    } else {
      newArr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
};

const left = [2, 4, 6];
const right = [1, 3, 5, 7, 9];

const left2 = [20, 40, 60];
const right2 = [1, 3, 5, 7, 9];

const left3 = [2, 4, 6];
const right3 = [10, 30, 50, 70, 90];

const left4 = [20, 40, 60];
const right4 = [10, 30, 50, 70, 90];

const left5 = [20, 30, 40, 60];
const right5 = [20, 30, 50, 70, 90];

const ans = mergeArr(left, right);
// console.log(ans);

// Merge 2 sorted sub parts of a single arr
const merge = (arr, start, mid, end) => {
  const leftSize = mid - start + 1;
  const rightSize = end - mid;

  // Create temporary arrays to store the left and right halves
  const left = new Array(leftSize);
  const right = new Array(rightSize);

  // Copy data from the original array to the temporary arrays
  for (let i = 0; i < leftSize; i++) {
    left[i] = arr[start + i];
  }
  for (let j = 0; j < rightSize; j++) {
    right[j] = arr[mid + 1 + j];
  }

  let i = 0; // Index for the left subarray
  let j = 0; // Index for the right subarray
  let k = start; // Index for the merged subarray

  // Merge the left and right subarrays in-place
  while (i < leftSize && j < rightSize) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements from the left subarray
  while (i < leftSize) {
    arr[k] = left[i];
    i++;
    k++;
  }

  // Copy the remaining elements from the right subarray
  while (j < rightSize) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

const mergeSort = (arr, start, end) => {
  const middle = Math.floor((start + end) / 2);
  if (start > end) {
    return;
  }

  mergeSort(arr, 0, middle);
  mergeSort(arr, middle + 1, end);

  merge(arr, 0, middle, end);
};

const arr = [9, 7, 5, 3, 1, 2, 4, 8, 6];
// mergeSort(arr, 0, arr.length - 1)
