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

function mergeSort(arr) {
  // Base case: return if the array has 0 or 1 element
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const mid = Math.floor(arr.length / 2);

  // Divide the array into two halves
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted left and right halves
  return mergeArr(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      // Add the smaller element to the result array
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from the left array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // Add the remaining elements from the right array
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  // Return the merged and sorted array
  return result;
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log('Merge Sort Original array:', numbers);

const sortedNumbers = mergeSort(numbers);
console.log('Sorted array:', sortedNumbers);

const arr = [9, 7, 5, 3, 1, 2, 4, 8, 6];
// mergeSort(arr, 0, arr.length - 1)
console.log(arr);
