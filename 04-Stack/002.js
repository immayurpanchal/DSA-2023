// Stack using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add an item to the top of the stack
  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Remove and return the top item from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedNode = this.top;
    this.top = poppedNode.next;
    this.size--;
    return poppedNode.value;
  }

  // Return the top item from the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the stack
  getSize() {
    return this.size;
  }

  // Clear the stack
  clear() {
    this.top = null;
    this.size = 0;
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
