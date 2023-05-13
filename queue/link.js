// queue 

class Node{
    constructor (value){
        this.value =value;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.rear= null;
        this.tail = null;
        this.size = 0
    }

    append(value){
        const node= new Node(value)
        if(this.rear === null){
            this.rear = node;
            this.tail =node;
        }else{
          this.tail.next = node;
          this.tail = node;
        }
        this.size++
    }
    removeFirst(){
       if(this.rear === null){
        return ;
       }else {
        this.rear = this.rear.next;
       }
    }
    print(){
        let prev = this.rear;
        let printlist=''
        while(prev){
            printlist += prev.value
            prev=prev.next
        }
        console.log(printlist);
    }
    peek(){
        console.log(this.rear.value)
    }

}

const list =new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.peek()
list.removeFirst()
list.print()