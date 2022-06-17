class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
        //[1/-> [2/ ->]]
    enqueue(value) {
        let node = new Node(value)
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return this.length++;
    }

    dequeue() {
        if(!this.first){
            return null;
        }

        let temp = this.first;

        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;

        return temp.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/** 
 * FIFO = First In Last Out
 * Big O
 * iNSERTION O(1)
 * REMOVAL O(1)
 * ACCESS O(N)
 * SEARCHING O(N)
 */