console.log('002 Arr');
// Input:
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// Output: 5 6 7 1 2 3 4

// Method 1
// Using temp arr
/* 
Illustration
-----------
Suppose the give array is arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2.

First Step:
    => Store the elements from 2nd index to the last.
    => temp[] = [3, 4, 5, 6, 7]

Second Step: 
    => Now store the first 2 elements into the temp[] array.
    => temp[] = [3, 4, 5, 6, 7, 1, 2]

Third Steps:
    => Copy the elements of the temp[] array into the original array.
    => arr[] = temp[] So arr[] = [3, 4, 5, 6, 7, 1, 2] 

Time complexity: O(N) 
Auxiliary Space: O(N)
*/
const rotationD = (arr, d) => {
  // Handle Edge Case when d > arr.length

  const temp = [];
  // first step
  for (let i = d; i < arr.length; i++) {
    temp.push(arr[i]);
  }

  // second step
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }

  // third step
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// rotationD(arr, 2);
// console.log(arr);

// Method 2
/*
Let us take arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2.

First Step:
        => Rotate to left by one position.
        => arr[] = {2, 3, 4, 5, 6, 7, 1}

Second Step:
        => Rotate again to left by one position
        => arr[] = {3, 4, 5, 6, 7, 1, 2}

Rotation is done by 2 times.
So the array becomes arr[] = {3, 4, 5, 6, 7, 1, 2}

- Rotate the array to left by one position. For that do the following:
-- Store the first element of the array in a temporary variable.
-- Shift the rest of the elements in the original array by one place.
-- Update the last index of the array with the temporary variable.
- Repeat the above steps for the number of left rotations required.

Time Complexity: O(N * d)
Auxiliary Space: O(1)
*/

const rotationD2 = (arr, d) => {
  for (let j = 0; j < d; j++) {
    // step 1
    const temp = arr[0];
    // step 2
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    // step 3
    arr[arr.length - 1] = temp;
  }
};

// const arr = [1, 2, 3, 4, 5, 6, 7];
// rotationD2(arr, 2);
// console.log(arr);

// Method 3
/*
Use inbuilt methods of JS 

Time Complexity: O(N * d)
Auxiliary Space: O(1)
*/
const rotationD3 = (arr, d) => {
  for (let i = 0; i < d; i++) {
    const element = arr.shift();
    arr.push(element);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
rotationD3(arr, 2);
console.log(arr);

// Method 4
/*
Juggling Algorithm
*/
