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
  
  /*
  visit every node horizontally checkinh siblings first
  */
  bfs() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node)
    
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
  /** Depth search first
   * visit one side of the tree first
   * useful to copy or export a tree
   **/
  dfsPreOrder() {
    let visited = [];
    let current = this.root;
    
    function traverse(node){
      visited.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(current)
    return visited;
  }

  //traverse from the bottom
  dfsPostOrder() {
    let visited = [];
    let current = this.root;
    
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(current)
    return visited;
  }

  //traverse all left node first, meaning you get nodes in ascending order
  dfsInOrder() {
    let visited = [];
    let current = this.root;
    
    function traverse(node){
      if(node.left) traverse(node.left);
        visited.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(current)
    return visited;
  }
}


/**
 * Trees are non lineanr data structures with a root node and children node
 *  BST
 * A sorted data structure consisting of nodes with a parent,child and sibling relationship.
 * values less than the root are kept in the left pointer and greater than the root at the right pointer.
 * We can search trees using BFS AND DFS
 * -----------
 * Big O
 * Insertion - O(log n)
 * Searching - O(log n)
 */