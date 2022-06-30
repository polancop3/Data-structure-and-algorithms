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
   **/
  dfsPreOrder() {
    let visited = [];
    let current = this.root;
    
    function helper(node){
      visited.push(node.value);
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    }
    helper(current)
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

console.log(tree.dfsPreOrder())

/** BST
 * A sorted data structure consisting of nodes with a parent,child and sibling relationship.
 * values less than the root are kept in the left pointer and greater than the root at the right pointer.
 * -----------
 * Big O
 * Insertion - O(log n)
 * Searching - O(log n)
 */