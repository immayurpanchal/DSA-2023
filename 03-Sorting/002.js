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
