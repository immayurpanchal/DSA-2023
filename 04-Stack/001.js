// Stack using Array
export class Stack {
  constructor() {
    this.items = [];
  }

  // Add an item to the top of the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the top item from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // Return the top item from the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Get the size of the stack
  getSize() {
    return this.items.length;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

const stack = new Stack();

// Test push method
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.getSize()); // Output: 3

// Test pop method
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.getSize()); // Output: 2

// Test isEmpty method
console.log(stack.isEmpty()); // Output: false
stack.pop();
stack.pop();
console.log(stack.isEmpty()); // Output: true

// Test clear method
stack.push(4);
stack.push(5);
console.log(stack.getSize()); // Output: 2
stack.clear();
console.log(stack.getSize()); // Output: 0
console.log(stack.isEmpty()); // Output: true
