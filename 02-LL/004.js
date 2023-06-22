// Node class to represent individual nodes in the circular linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Circular linked list class
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Function to add a new node to the end of the circular linked list
  addNodeAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      // If the list is empty, make the new node the head and tail
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      // If the list is not empty, add the new node after the tail
      newNode.next = this.head;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Function to add a new node at a given index in the circular linked list
  addNodeAtIndex(data, index) {
    const newNode = new Node(data);

    if (index === 0) {
      // If the index is 0, make the new node the new head
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      let count = 0;
      let previousNode = null;

      // Traverse the list to find the node at the given index
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }

      // Add the new node at the given index
      newNode.next = currentNode;
      previousNode.next = newNode;

      // Update the tail if the new node is added at the end
      if (currentNode === this.head) {
        this.tail = newNode;
      }
    }
  }

  // Function to delete a node with a given data value from the circular linked list
  deleteNode(data) {
    if (this.head === null) {
      // List is empty, nothing to delete
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    // Traverse the list to find the node to delete
    while (currentNode.data !== data) {
      if (currentNode.next === this.head) {
        // Reached the end of the list, node not found
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    // Delete the node by updating the links
    if (currentNode === this.head) {
      // If the node to delete is the head, update the head and tail
      this.head = this.head.next;
      this.tail.next = this.head;
    } else if (currentNode === this.tail) {
      // If the node to delete is the tail, update the tail
      previousNode.next = this.head;
      this.tail = previousNode;
    } else {
      // Node to delete is in between two nodes
      previousNode.next = currentNode.next;
    }
  }

  // Function to search for a node with a given data value in the circular linked list
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

  // Function to display the circular linked list
  display() {
    if (this.head === null) {
      console.log('Circular linked list is empty.');
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

// Create a new circular linked list object
const myList = new CircularLinkedList();

// Add nodes to the end of the list
myList.addNodeAtEnd(5);
myList.addNodeAtEnd(10);
myList.addNodeAtEnd(15);

// Add a node at a given index
myList.addNodeAtIndex(20, 3);

// Display the circular linked list
myList.display(); // Output: 5, 20, 10, 15

// Delete a node
myList.deleteNode(10);

// Search for a node
console.log(myList.searchNode(20)); // Output: true
console.log(myList.searchNode(10)); // Output: false
