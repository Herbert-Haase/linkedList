import { Node } from "./llNode.js";

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
  append(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let size = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      size = ++size;
    }
    return size;
  }
  get tail() {
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail;
  }

  at(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      if (index === i) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  insertAt(value, index) {
    const newNode = new Node(value);
    newNode.next = this.at(index);
    this.at(index - 1).next = newNode;
  }
  removeAt(index) {
    this.at(index - 1).next = this.at(index + 1);
  }

  pop() {
    if (this.size() === 1) {
      this.head = null;
    } else {
      const prelastNode = this.at(this.size() - 2);
      prelastNode.next = null;
    }
  }
  find(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
    }
  }
  contains(value) {
    if (this.find(value) !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    const arrayOfNodes = [];
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      arrayOfNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return "( " + arrayOfNodes.join(" ) -> ( ") + " ) -> null";
  }
}

export { LinkedList };
