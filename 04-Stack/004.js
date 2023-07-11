import { StackLL } from './002';
import { Stack } from './001';

// Method 1.1
// Reverse a string using a Stack implemented with a singly linked list
function reverseStringStackLL(str) {
  // Create a new StackLL instance
  const stack = new StackLL();

  // Push each character of the input string onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  // Pop each character off the stack and construct the reversed string
  let reversedStr = '';
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  // Return the reversed string
  return reversedStr;
}

// Method 1.2
// Reverse a string using a Stack implemented with a singly linked list
function reverseStringStack(str) {
  // Create a new StackLL instance
  const stack = new Stack();

  // Push each character of the input string onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  // Pop each character off the stack and construct the reversed string
  let reversedStr = '';
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  // Return the reversed string
  return reversedStr;
}

console.log(reverseStringStackLL('hello')); // Output: 'olleh'
console.log(reverseStringStackLL('world')); // Output: 'dlrow'
console.log(reverseStringStack('hello')); // Output: 'olleh'
console.log(reverseStringStack('world')); // Output: 'dlrow'

// Method 2
const str = 'Hello';
const ans = str.split('').reverse().join('');
console.log(ans);
