// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// Method 1
const reverseAnArray = (arr) => {
  const limit = Math.floor(arr.length / 2);
  for (let i = 0; i < limit; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
};

// Method 2
const reverseAnArray2 = (arr) => {
  arr.reverse();
};

const arr = [1, 2, 3];
// reverseAnArray(arr)
// reverseAnArray2(arr)
// console.log(arr);

// Reverse a String
const firstName = 'Mayur';
firstName[0] = 'A'; // Won't possible, strings are immutable
console.log(firstName);

// Method 1
const reverseAString = (str) => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

// Method 2
const reverseAString2 = (str) => {
  return str.split('').reverse().join('');
};

// const ans = reverseAString(firstName);
// const ans = reverseAString2("abc");
// console.log(ans);
