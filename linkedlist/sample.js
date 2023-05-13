class Node {
    constructor(value){
        this.value=value
        this.next =null
    }
}
class LinkedList{
     constructor(){
        this.head =null;
        this.tail =null
        this.size =0
     }

    isEmpty(){
        return this.size == 0
    }
   getSize(){
    return this.size
   } 
//    o(1)
   prepend(value){
    const node =new Node(value) 
    if(this.isEmpty()){
        this.head=node
    }else{
        node.next =this.head
        this.head=node
    }
    this.size++
   }
   print(){
    if(this.isEmpty()){
        console.log('linked list is empty')
    }else{
        let current =this.head;
        let listvalues = ''
        while(current){
            listvalues += `${current.value} `
            current = current.next
        }
        console.log(listvalues)
    }

   }
//    o(n)
   append(value){
    const node =new Node(value)
    if(this.isEmpty()){
        this.head = node 
    }else{
        let prev =this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next= node
        this.size++
    }
   }

   insert(value,index){
    if( index <0 || index > this.size ){
        return null
    }
    if(index === 0){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0; i< index-1; i++){
            prev=prev.next
        }
        node.next =prev.next
        prev.next = node
        this.size++
    }
   }
   removeFrom(index){
     if(index < 0 || index > this.size){
        return null
     }
     let removeNode;
     if(index === 0 ){
     removeNode =this.head;
        this.head =this.head.next
     }else{
      let prev =this.head
      for(let i=0;i<index-1; i++){
        prev =prev.next
      }
      removeNode =prev.next
      prev.next =removeNode.next

     }
     this.size--
     return removeNode.value;
   }
   removeValue(value){
    if(this.isEmpty()){
        return null
    }let removeNode;
    if(this.head.value == value){
        this.head =this.head.next
        this.size --
        return value
    }else{
        let prev =this.head
        while (prev.next && prev.next.value != value){
           prev = prev.next;
        }
        if(prev.next){
            removeNode =prev.next
            prev.next =removeNode.next
            this.size--
            return removeNode.value
        }
    }
    return null
   }
   search(value){
    if(this.isEmpty()){
        return -1
    }
    let current =this.head
    for(let i=0;i< this.size; i++){
      if(current.value == value){
        return `${i} ${value}`
      }  
      current = current.next
    }
    return -1
   }
   reverse(){
    if(this.isEmpty()){
        return -1
    }
    let prev = null
    let curr = this.head
     while(curr){
        let next =curr.next
        curr.next = prev
        prev= curr
        curr =next
     }
    this.head = prev
   }

}

const list =new LinkedList()
list.prepend(10)
list.prepend(30)
list.prepend(40)
list.append(5)
list.insert(2,3)
list.insert(2,0)
list.print()
// console.log(list.removeFrom(3));
// console.log(list.removeValue(100));
list.reverse()

list.print()
// console.log(list.search(40));
// console.log(list.getSize());