class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)

        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
            
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //removes from beginning of list
    shift(){
        if(!this.head){
            return undefined;
        }

        let head = this.head;
        let newHead = this.head.next;
        this.head = newHead;
        this.length--; 
        return head;
    }
    //adds to beginning of list
    unshift(val){
       let node = new Node(val);
       
       if(!this.head){
           this.head = node;
           this.tail = this.head;
       } else{
            node.next = this.head;
            this.head = node;
    }
    this.length++;
    return this;
    }

    get(index){
        let current = this.head;
        let counter = 0;
        if(index < 0 || index > this.length){return null}
        while(counter !== index){
            current = current.next
            counter++;
        }
        return current;
    }

    set(index,val){
        let foundNode = this.get(index);
        
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) {
            return false;
        }

        if(index === this.length){
            this.push(val);
            return true;
        }

        if(index === 0){
            this.unshift(val);
            return true;
        } else {
            this.get(-1)
        }
        let newNode = new Node(val);
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = newNode
        newNode.next = temp;
        this.length++;
        return true;

    }


    traverse() {
        let current = this.head;

        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

/*
A singly linked list a collection of nodes with pointer towards the next node
*/

/* Big O
Insertion O(1)
Deletion O(1) or O(N)
Searching O(N)
Access O(N)

*/

//Efficien deletion and insertion