// Find the length of the linked list
// Iterative & Recursive Approach
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

  // Function to reverse a LinkedList
  reverseLinkedList(head) {
    let prevNode = null;
    let currentNode = head;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.next; // Save the next node
      currentNode.next = prevNode; // Reverse the pointer

      prevNode = currentNode; // Move the pointers to the next nodes
      currentNode = nextNode;
    }

    // Change original linked list head
    this.head = prevNode;

    // OR Return the new head of the reversed LinkedList
    // return prevNode;
  }

  // Function to find the middle of a linked list
  findMiddle() {
    if (this.head === null) {
      return null;
    }

    let slowPtr = this.head;
    let fastPtr = this.head;

    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }

    return slowPtr;
  }

  // print Nth node from last
  printNthFromLast(start, n){
    if(start === null){
      return;
    }

    const ans = printNthFromLast(start.next, --n)

  }
  // Function to display the linked list
  display() {
    let currentNode = this.head;

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// Create a new Linked List object
const myList = new LinkedList();

// Add nodes to the list
myList.addNode(5);
myList.addNode(100);
myList.addNode(15);
myList.addNode(20);
myList.addNode(25);

// Find the length of the linked list
const length = myList.findLength();
console.log('Length of the linked list iterative approach:', length); // Output: 3
const recursiveLength = myList.findLengthRecursive(myList.head);
console.log('Length of the linked list recursive approach:', recursiveLength); // Output: 3

console.log('Before Reverse');
myList.display();

console.log('After Reverse');
myList.reverseLinkedList(myList.head);
myList.display();

// Find the middle of the linked list
// Approach 1 - Create an array and store the elements in array of Linked List
// then return size / 2 item of the array

// Approach 2 - iterate through entire list to get the size
// then iterate again but now size / 2 and return the element

// Approach 3 - slow and fast pointers
console.log(myList.findMiddle());
