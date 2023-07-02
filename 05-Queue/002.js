// Queue using LL
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  // Add an item to the back of the queue
  enqueue(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }
    this.back = newNode;
    this.size++;
  }

  // Remove and return the front item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedNode = this.front;
    this.front = dequeuedNode.next;
    if (this.isEmpty()) {
      this.back = null;
    }
    this.size--;
    return dequeuedNode.value;
  }

  // Return the front item from the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the queue
  getSize() {
    return this.size;
  }

  // Clear the queue
  clear() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
}

const queue = new Queue();

// Test enqueue method
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // Output: 1
console.log(queue.getSize()); // Output: 3

// Test dequeue method
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.getSize()); // Output: 2

// Test isEmpty method
console.log(queue.isEmpty()); // Output: false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true

// Test clear method
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.getSize()); // Output: 2
queue.clear();
console.log(queue.getSize()); // Output: 0
console.log(queue.isEmpty()); // Output: true