// Approach 2
// Using this.tail property
// Node class to represent individual nodes in the circular doubly linked list
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Circular Doubly Linked List class
class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Function to add a new node at the end of the circular doubly linked list
  addNodeAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // If the list is empty, make the new node the head and tail, and connect it to itself
      this.head = newNode;
      this.tail = newNode;
      newNode.prev = newNode;
      newNode.next = newNode;
    } else {
      // If the list is not empty, add the new node after the tail node
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  // Rest of the methods remain the same...

  // Function to display the circular doubly linked list
  display() {
    if (this.head === null) {
      console.log('Circular doubly linked list is empty.');
    } else {
      let currentNode = this.head;

      // Traverse the list starting from the head node
      do {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      } while (currentNode !== this.head);
    }
  }
}

// Create a new circular doubly linked list object
const myList = new CircularDoublyLinkedList();

// Add nodes to the end of the list
myList.addNodeAtEnd(5);
myList.addNodeAtEnd(1);
myList.addNodeAtEnd(15);

// Display the circular doubly linked list
myList.display(); // Output: 50, 20, 10, 15
