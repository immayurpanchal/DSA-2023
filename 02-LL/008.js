// Find the length of the linked list
// Iterative Approach
// Node class to represent individual nodes in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to add a new node at the end of the linked list
  addNode(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      // Traverse the list to reach the last node
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      // Add the new node at the end
      currentNode.next = newNode;
    }
  }

  // Function to find the length of the linked list
  findLength() {
    let currentNode = this.head;
    let length = 0;

    // Traverse the list and increment the length for each node
    while (currentNode !== null) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  // Function to get the length of the linked list recursively
  findLengthRecursive(node) {
    // Base case: if node is null, the length is 0
    if (node === null) {
      return 0;
    }

    // Recursively call the function on the next node and add 1 to the result
    return 1 + this.findLengthRecursive(node.next);
  }
}

// Create a new Linked List object
const myList = new LinkedList();

// Add nodes to the list
myList.addNode(5);
myList.addNode(10);
myList.addNode(15);

// Find the length of the linked list
const length = myList.findLength();
console.log('Length of the linked list iterative approach:', length); // Output: 3
const recursiveLength = myList.findLengthRecursive(myList.head);
console.log('Length of the linked list recursive approach:', recursiveLength); // Output: 3
