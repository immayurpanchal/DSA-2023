class Node {
  constructor(ele) {
    this.next = null;
    this.value = ele;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // at the start
  append(ele) {
    const node = new Node(ele);
    if (this.head === null) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  push(ele) {
    const node = new Node(ele);

    if (this.head === null) {
      this.head = node;
      ++this.size;
      return;
    }

    // traverse to the end of the linked list
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    // and add the newly created node
    temp.next = node;
    ++this.size;
  }

  pop() {
    // if list is empty
    if (!this.head) {
      throw Error('Can not delete item from empty LL');
    }

    let temp = this.head;

    // if there is only one item
    if (temp.next === null) {
      this.head = null;
      --this.size;
      return temp;
    }

    // traverse to second last element
    if (temp.next !== null && temp.next.next !== null) {
      temp = temp.next;
    }

    temp.next = null;
    --this.size;
    return temp;
  }

  insertAt(index, ele) {
    // insert outside the limit
    if (index < 0 || index > this.size) {
      throw Error('index out of bound');
    }
    // insert at start
    // when the list is empty
    if (index === 0) {
      const node = new Node(ele);

      if (this.head === null) {
        this.head = node;
        ++this.size;
        return;
      }

      node.next = this.head;
      this.head = node;
      ++this.size;
      return;
    }

    // when there is one item and index is 1
    let temp = this.head;
    if (index === 1 && temp.next === null) {
      const node = new Node(ele);
      temp.next = node;
      ++this.size;
      return;
    }
    // when there are lots of items
    // traverse to the element index - 1

    const node = new Node(ele);
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    node.next = temp.next;
    temp.next = node;
    ++this.size;
  }

  delete(ele) {
    if (!this.head) {
      throw Error('Can not delete from an empty list'); // if the list is empty, return null
    }

    if (this.head.value === ele) {
      this.head = this.head.next; // if the key is at the head node of the list, remove it by updating the head pointer
      --this.size;
      return;
    }

    // Because,  first element is not the value we're searching
    // Hence, start from the second element
    let prevNode = this.head;
    let currNode = prevNode.next;

    while (currNode !== null) {
      if (currNode.value === ele) {
        prevNode.next = currNode.next; // if the key is found at a non-head node, remove it by updating the previous node's next pointer
        // free memory of removed node
        currNode = null;
        --this.size;
        return;
      }

      prevNode = currNode;
      currNode = currNode.next;
    }

    throw Error('Element does not exist'); // if the key is not found in the list, return null
  }

  print() {
    if (this.head === null) {
      console.log('LL is empty');
    }

    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.append(50);
ll.print();

// Method 1
// Storing values in an array and search there
/*
// key to search
const key = 10;

// create copy of head to traverse
let temp = ll.head;

// array to store the keys in the linked list
const v = [];

while (temp !== null) {
  v.push(temp.value);
  temp = temp.next;
}

if (v.includes(key)) {
  console.log('YES');
} else {
  console.log('NO');
}
*/

// Method 2
// Implement search function in class itself that returns boolean
