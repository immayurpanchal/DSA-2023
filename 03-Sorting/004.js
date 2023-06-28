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
console.log("Quick Original array:", numbers);

const sortedNumbers = quickSort(numbers);
console.log("Sorted array:", sortedNumbers);
