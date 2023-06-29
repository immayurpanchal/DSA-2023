// Insertion Sort Algorithm:
// 1. Iterate through the array.
// 2. For each iteration, select the current element and insert it into its correct position
//    in the sorted portion of the array.
// 3. Shift the elements greater than the current element to the right to make space for the insertion.

function insertionSort(arr) {
  const length = arr.length;

  // Iterate through the array
  for (let i = 1; i < length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Shift elements greater than the current element to the right
    // until the correct position for the current element is found
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log('Insertion Original array:', numbers);

const sortedNumbers = insertionSort(numbers);
console.log('Sorted array:', sortedNumbers);

const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // if element is larger then shift to right
    while (arr[i] > currentElement && j > 0) {
      arr[i + 1] = arr[i];
      j--;
    }

    // insert the element at i + 1 index
    arr[i + 1] = currentElement;
  }
};

const num = [5, 3, 8, 4, 2];
// insertion(num);
console.log(num);
