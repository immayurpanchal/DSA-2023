// Selection Sort Algorithm:
// 1. Iterate through the array.
// 2. For each iteration, find the minimum element in the unsorted portion of the array.
// 3. Swap the minimum element with the first unsorted element.
// 4. Move the boundary of the sorted portion one element to the right.

function selectionSort(arr) {
  const length = arr.length;

  // Iterate through the array
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted portion
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first unsorted element
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log('Selecion Sort Original array:', numbers);

const sortedNumbers = selectionSort(numbers);
console.log('Sorted array:', sortedNumbers);

/* const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const selection = (arr) => {
  let unsortedIndex = 0;

  for (let j = 0; j < arr.length; j++) {
    // This loop will give the min in the arr
    let minIndex = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }

    // swap value of min with unsortedIndex value
    swap(arr, unsortedIndex, minIndex);

    // move the cursor to the next element
    unsortedIndex++;
  }
};

const num = [5, -1, 3, 8, 4, 2];
selection(num);
console.log(num);
 */
