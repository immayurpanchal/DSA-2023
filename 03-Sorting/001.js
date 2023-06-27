const bubbleSort = (arr) => {
  const length = arr.length;

  // Iterate through the array
  for (let i = 0; i < length - 1; i++) {
    // Perform comparisons for each pair of adjacent elements
    for (let j = 0; j < length - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap the elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

// Example usage:
const numbers = [5, 3, 8, 4, 2];
console.log('Original array:', numbers);

const sortedNumbers = bubbleSort(numbers);
console.log('Sorted array:', sortedNumbers);
