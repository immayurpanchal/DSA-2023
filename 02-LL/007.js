// https://www.geeksforgeeks.org/header-linked-list-in-c/
// Node class to represent individual nodes in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Header Linked List class
class HeaderLinkedList {
  constructor() {
    this.head = new Node(null); // Header node
  }

  // Function to add a new node at the end of the linked list
  addNode(data) {
    const newNode = new Node(data);

    let currentNode = this.head;

    // Traverse the list to reach the last node
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    // Add the new node at the end
    currentNode.next = newNode;
  }

  // Function to delete a node with a given data value from the linked list
  deleteNode(data) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        // Node found, update the links to delete the node
        prevNode.next = currentNode.next;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // Function to search for a node with a given data value in the linked list
  searchNode(data) {
    let currentNode = this.head.next; // Start from the first actual node, skipping the header

    while (currentNode !== null) {
      if (currentNode.data === data) {
        // Node found
        return true;
      }
      currentNode = currentNode.next;
    }

    // Node not found
    return false;
  }

  // Function to insert a new node at a given index in the linked list
  insertAt(data, index) {
    const newNode = new Node(data);

    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Insert the new node at the given index
    prevNode.next = newNode;
    newNode.next = currentNode;
  }

  // Function to append a new node at the start of the linked list
  append(data) {
    const newNode = new Node(data);

    newNode.next = this.head.next; // Make the new node point to the current first node
    this.head.next = newNode; // Make the header node point to the new node
  }

  // Function to display the linked list
  display() {
    let currentNode = this.head.next; // Start from the first actual node, skipping the header

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// Create a new Header Linked List object
const myList = new HeaderLinkedList();

// Add nodes to the list
myList.addNode(5);
myList.addNode(10);
myList.addNode(15);

// Display the linked list
console.log('Original Linked List:');
myList.display(); // Output: 5, 10, 15

// Delete a node
myList.deleteNode(10);

// Search for a node
console.log('Search Result:', myList.searchNode(15)); // Output: true

// Insert a node at a given index
myList.insertAt(20, 1);

// Append a node at the start
myList.append(3);

// Display the updated linked list
console.log('Updated Linked List:');
myList.display(); // Output: 3, 5, 20, 15
