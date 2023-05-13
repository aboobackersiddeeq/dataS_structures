class Node {
 constructor(value){
    this.value = value
    this.next = null
    this.size = 0
 }
 
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail =null;
        this.size = 0
    }
    isEmpty(){
        return this.size == 0
     }
     prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
            
        }else{
            node.next = this.head
            this.head =node
        }
        this.size++
     }
     append(value){
        const node =new Node(value)
        if (this.isEmpty()){
            this.head = node;
            this.tail = node 
        }else{
            this.tail.next = node;
            this.tail =node
        }
        this.size++
     }
     removeFirst (){
        if(this.isEmpty()){
            return null
        }
        else{
            this.head = this.head.next 
        }
        this.size --
     }
     removeEnd(){
        if(this.isEmpty()){
            return null
        } 
        if(this.size === 1){
            this.head =null;
            this.tail =null
        } else{
            let prev;
            while (prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size --
     } print (){
        if(this.isEmpty()){
            return null
        } else{
            let prev =this.head;
            let nodelist = ''
            while (prev){
              nodelist +=`${prev.value} `
              prev= prev.next
            }
            console.log(nodelist);
        } 
     }
     reverse(){
        if(this.isEmpty()){
            return null
        }else {
            let prev =null;
            let curr = this.head
            while (curr){
                let next =curr.next;
                curr.next = prev;
                prev = curr
                curr = next
            }
            this.head = prev
        }
     }
     deleteDuplicate(){
        if(this.isEmpty()){
            return null
        }else {
            let prev =this.head;
            while( prev.next){
                if(prev.value === prev.next.value ){
                    prev.next = prev.next.next
                    this.size --
                }
                else{
                    prev= prev.next
                }
            }
           
        }
     
     }

}

const list = new LinkedList()
list.prepend(20)
list.prepend(20)
list.prepend(30)
list.append(10)
list.append(10)
list.append(5)
list.print()
list.reverse()
list .deleteDuplicate()
list.print()
console.log(list.isEmpty());