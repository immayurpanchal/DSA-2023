class Node {
  constructor(ele) {
    this.next = null;
    this.value = ele;
    this.size = 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(ele) {
    const node = new Node(ele);

    if (this.head === null) {
      this.head = node;
      ++this.size;
      return;
    }

    // traverse to the end of the linked list
    const temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    // and add the newly created node
    temp.next = node;
    ++this.size;
  }

  pop() {
    // if list is empty
  }
  insertAt() {}
  delete() {}
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
ll.push(10);
ll.push(20);
ll.push(30);
console.log(this.size);
ll.print();
