

class Node {
    constructor (value){
        this.value= value;
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail =null
        this.size =0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        console.log(this.size);
    }
    append(value){
        const node =new Node(value)
        if (this.isEmpty()){
            this.head = node;
            this.tail =node;
        }else{
            this.tail.next =node;
            this.tail = node
        }
        this.size++;
    }
    prepend(value){
        const node =new Node (value)
        if(this.isEmpty()){
            this.head =node;
            this.tail =node
        }else{
            node.next = this.head
            this.head = node;
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('it is empty');
            return null
        }
        if(this.size == 1){
            console.log(this.head);
        }else{
            let prev =this.head;
             let nodeList =""
            while(prev){
             nodeList +=`${prev.value} ` 
             prev= prev.next 
            }

            console.log(nodeList);
        }
    }
    removeFirst(){
        if(this.isEmpty()){
            return null
        }else {
            let remove =this.head
            this.head =this.head.next;
            this.size--
            return remove;
        }
    }
    removeLast (){
        if(this.isEmpty()){
            return null
        }
        else if(this.size === 1){
            this.head =null;
            this.tail =null;
            this.size --
        }else {
            let prev =this.head
            while(prev.next !== this.tail){
                prev=prev.next
            }
            prev.next =null
            this.tail =prev
            this.size--
            
            return ;
        }   
    }
    insert(value,index){
        const node =new Node(value)
     if(index<0 || index> this.size){
        console.log('oops');
        return
     } 
     if(index == 0){
        return this.prepend(value)
     }
     else{
        let prev = this.head
        for(let i=0;i<index-1 ;i++){
            prev= prev.next
        }
        node.next = prev.next
        prev.next  =node
     } 
     this.size++
    }
    reverse(){
        if(this.isEmpty()){
            return -1
        }else{
            let prev =null;
            let curr =this.head;
            while (curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
}

const list =new LinkedList()
list.prepend(10)
list.append(20)
list.append(40)
list.prepend(30)
list.insert(45,2)
// list.removeFirst()
// list.removeLast()
list.reverse()
list.print()
  console.log(list.isEmpty());
list.getSize();
