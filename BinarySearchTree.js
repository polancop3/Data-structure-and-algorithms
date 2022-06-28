class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let node = new Node(value)
    if(this.root === null){
      this.root = node;
      return this;
    }

      let current = this.root;
      if(value === current.value) return undefined;
      while(true) {
        if(value < current.value) {
            if(current.left === null) {
              current.left = node;
              return this;
            } else {
              current = current.left
            }
        } else if(value > current.value){
            if(current.right === null) {
              current.right = node;
              return this;
            } else {
              current = current.right;
            }
        }
      } 
  }

  find(value) {
    if(this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value) {
        current = current.left; 
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

  contains(value) {
    if(this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while(current && !found){
      if(value < current.value) {
        current = current.left; 
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

/**
 * A sorted data structure consisting of nodes with a parent,child and sibling relationship.
 * values less than the root are kept in the left pointer and greater than the root at the right pointer.
 * -----------
 * Big O
 * Insertion - O(log n)
 * Searching - O(log n)
 */