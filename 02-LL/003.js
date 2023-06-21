class Node {
  constructor(ele) {
    this.next = null;
    this.prev = null;
    this.value = ele;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(ele) {
    const node = new Node(ele);

    // when LL is empty
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  pop() {
    // If LL is empty
    if (!this.head) throw Error('LL is empty');

    // When there is only one item
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  print() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  printReverse() {
    let temp = this.tail;
    while (temp) {
      console.log(temp.value);
      temp = temp.prev;
    }
  }

  append(ele) {
    const node = new Node(ele);

    // if the LL is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
}

const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.append(30);
ll.push(40);
ll.print();
