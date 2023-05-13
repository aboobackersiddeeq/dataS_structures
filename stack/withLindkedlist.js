// stack 
class Node{
    constructor(value){
     this.value = value
     this.next = null
    }
}
class LinkedList{
    constructor(){
        this.top = null;
        this.size =0 
    }
    // prepend 
    push(value){
        const node = new Node(value)
        if(this.head== null){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }
    // deleteFirst
    pop(){
        if(this.head == null){
            return 
        }
        this.head= this.head.next
        this.size--;
    }
    peek(){
        return this.head.value
    }
    print (){
        if(this.head== null){
            return
        }
        let prev = this.head
        let printElement = ''
        while(prev){
            printElement += `${prev.value} `
            prev = prev.next
        }
        return printElement
    }

}

const list = new LinkedList()
list.push(10)
list.push(2)
list.push(30)
list.push(40)
list.pop()
console.log(list.peek())
console.log(list.print())
