class Node {
    constructor (value){
        this.value =value;
        this.next =null;
    }
}

class LinkedList{
    constructor (){
        this.head =null;
        this.tail =null;
        this.size =0;
    } 
    isEmpty(){
        return this.size == 0
    }
    getSize(){
        console.log(this.size);
    }
    
    prepend(value){
        const node = new Node(value)
          if(this.isEmpty()){
            this.head = node;
            this.tail =node;
          } else{
            node.next =this.head;
            this.head = node
          }
          this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head =node
            this.tail =node
        }else{
            this.tail.next = node
            this.tail =node
        }
        this.size++ 

    }
    removefirst(){
        if(this.isEmpty()){
            return null
        }else{
            let removenode = this.head;
            this.head=this.head.next
            this.size--
            return removenode.value
        }

    }
    removeEnd(){
         if(this.isEmpty()){
            return null
         } let removenode;
         if(this.size === 1){
             removenode = this.head
             this.head= null;
             this.tail =null;
         }else {
            let prev = this.head
            while(prev.next !== this.tail){
                prev=prev.next
            }
            removenode =prev.next
            prev.next= null;
            this.tail = prev

         }
         this.size--
         return removenode.value
    }



    print(){
        if(this.isEmpty()){
            console.log('linked list is empty')
        }else{
            let prev = this.head
            let listofNode =''
            while(prev){
               listofNode +=` ${prev.value}`
               prev = prev.next
            }
            console.log(listofNode);
        }
    }
}
const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.append(9)
list.append(7)
console.log(list.isEmpty());
// list.removefirst()
list.removeEnd()
list.print()
list.append(15)
list.print()
list.getSize()