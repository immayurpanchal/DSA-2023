// Approach 1
// Without using this.tail property
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
  }

  // Function to add a new node at the end of the circular doubly linked list
  addNodeAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // If the list is empty, make the new node the head and connect it to itself
      this.head = newNode;
      newNode.prev = newNode;
      newNode.next = newNode;
    } else {
      // If the list is not empty, add the new node after the head node
      const tailNode = this.head.prev;

      newNode.next = this.head;
      newNode.prev = tailNode;
      this.head.prev = newNode;
      tailNode.next = newNode;
    }
  }

  // Function to add a new node at a given index in the circular doubly linked list
  addNodeAtIndex(data, index) {
    const newNode = new Node(data);

    if (index === 0) {
      // If the index is 0, make the new node the new head
      newNode.next = this.head;
      newNode.prev = this.head.prev;
      this.head.prev.next = newNode;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let count = 0;

      // Traverse the list to find the node at the given index
      while (currentNode.next !== this.head && count < index - 1) {
        currentNode = currentNode.next;
        count++;
      }

      // Add the new node at the given index
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
    }
  }

  // Function to delete a node with a given data value from the circular doubly linked list
  deleteNode(data) {
    if (this.head === null) {
      // List is empty, nothing to delete
      return;
    }

    let currentNode = this.head;

    // Traverse the list to find the node to delete
    while (currentNode.data !== data && currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }

    // Node to delete found
    if (currentNode.data === data) {
      if (currentNode === this.head && currentNode.next === this.head) {
        // Only one node in the list
        this.head = null;
      } else {
        // Update the links to delete the node
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        if (currentNode === this.head) {
          // Update the head if the deleted node is the head
          this.head = currentNode.next;
        }
      }
    }
  }

  // Function to search for a node with a given data value in the circular doubly linked list
  searchNode(data) {
    if (this.head === null) {
      // List is empty, node not found
      return false;
    }

    let currentNode = this.head;

    // Traverse the list to search for the node
    do {
      if (currentNode.data === data) {
        // Node found
        return true;
      }
      currentNode = currentNode.next;
    } while (currentNode !== this.head);

    // Node not found
    return false;
  }

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
myList.addNodeAtEnd(50);
myList.addNodeAtEnd(10);
myList.addNodeAtEnd(15);

// Add a node at a given index
myList.addNodeAtIndex(20, 1);

// Display the circular doubly linked list
myList.display(); // Output: 50, 20, 10, 15

// Delete a node
myList.deleteNode(10);

// Search for a node
console.log(myList.searchNode(20)); // Output: true
console.log(myList.searchNode(10)); // Output: false
