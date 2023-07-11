import { StackLL } from './002';
import { Stack } from './001';

// reverse a string using Stack linked list implementation
function reverseStringStackLL(str) {
  const stack = new StackLL();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = '';
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

function reverseStringStack(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = '';
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

console.log(reverseStringStackLL('hello')); // Output: 'olleh'
console.log(reverseStringStackLL('world')); // Output: 'dlrow'
console.log(reverseStringStack('hello')); // Output: 'olleh'
console.log(reverseStringStack('world')); // Output: 'dlrow'
