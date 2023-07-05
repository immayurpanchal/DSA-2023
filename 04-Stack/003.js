import { Stack } from './001';

function increasing(arr) {
  const stack = new Stack();

  arr.forEach((item) => {
    while (!stack.isEmpty() && stack.peek() > item) {
      stack.pop();
    }
    stack.push(item);
  });

  console.log(stack);
}

function decreasing() {}

const arr = [1, 4, 5, 3, 12, 10]; // OP: 1, 3, 10
const arr2 = [17, 14, 10, 5, 1]; // OP: 17, 14, 10

increasing(arr);
// decreasing(arr2)
