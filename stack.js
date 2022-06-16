class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
    
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp
        }
        return ++this.size;
    }

    pop() {
        if(!this.first) { return null; }
        let temp = this.first;

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* Big O of a stack 
Insertion 0(1)
Deletion O(1)
Access O(N)
Searching O(N)
*/

//LIFO = Last element in First element out
//Are used in redo/undo operations, handle function invocations and routing  such as back and forward
