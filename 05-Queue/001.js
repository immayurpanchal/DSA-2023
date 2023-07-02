// Queue using Array
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an item to the back of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Remove and return the front item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Return the front item from the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

const queue = new Queue();

// Test enqueue method
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // Output: 1
console.log(queue.size()); // Output: 3

// Test dequeue method
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2

// Test isEmpty method
console.log(queue.isEmpty()); // Output: false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true

// Test clear method
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.size()); // Output: 2
queue.clear();
console.log(queue.size()); // Output: 0
console.log(queue.isEmpty()); // Output: true
