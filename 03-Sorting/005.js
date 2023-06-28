function quickSort(arr) {
  // Base case: return the array if it has 0 or 1 element
  if (arr.length <= 1) {
    return arr;
  }

  // Select a pivot element (in this case, the middle element)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Initialize left and right arrays
  const left = [];
  const right = [];

  // Partition the array into two sub-arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // Elements smaller than the pivot go to the left sub-array
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      // Elements greater than the pivot go to the right sub-array
      right.push(arr[i]);
    }
    // Ignore elements equal to the pivot
  }

  // Recursively sort the left and right sub-arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log('Quick Original array:', numbers);

const sortedNumbers = quickSort(numbers);
console.log('Sorted array:', sortedNumbers);

// Method 2
function quickSort2(arr, start = 0, end = arr.length - 1) {
  // Base case: return if the array has 0 or 1 element
  if (start >= end) {
    return;
  }

  // Partition the array and get the pivot index
  const pivotIndex = partition(arr, start, end);

  // Recursively sort the left and right sub-arrays
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, start, end) {
  // Select the last element as the pivot
  const pivot = arr[end];

  // Initialize the pivot index as the start
  let pivotIndex = start;

  // Rearrange the elements around the pivot
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      // Swap the element with the element at the pivot index
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  // Swap the pivot element with the element at the pivot index
  [arr[end], arr[pivotIndex]] = [arr[pivotIndex], arr[end]];

  // Return the pivot index
  return pivotIndex;
}

// Example usage:
const numbers2 = [5, 3, 8, 4, 2];
console.log('Quick Sort 2 Original array:', numbers2);

quickSort2(numbers2);
console.log('Sorted array:', numbers2);
