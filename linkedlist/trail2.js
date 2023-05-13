class Node {
    constructor (value){
     this.value = value;
     this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    append(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next= node
            this.tail = node
        }
        this.size ++
    }
    prepend(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node;
            this.tail= node
        }else{
            node.next = this.head;
            this.head= node;
        }
        this.size++;
    }
    removefirst(){
        if(this.head == null){
            return 
        }
        if(this.size == 1){
            this.head= null;
            this.tail = null
        }else{
          this.head= this.head.next
        }
        this.size --
    }removeEnd(){
        if(this.head == null){
            return
        }
        if(this.size == 1){
           this.head = null;
           this.tail = null
        }else{
            const prve =this.head;
            while (prve.next != this.tail){
                prev = prev.next
            }
            prev.next= null;
            this.tail = prev
        }
        this.size--;
    }
}