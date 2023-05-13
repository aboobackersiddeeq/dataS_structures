 class Heap {
    constructor(arr){
        this.heap = arr;
        this.buildHeap()
    }
    buildHeap(){
        for(let i = this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(currentIndex){
        let endIndex = this.heap.length-1
        let leftIndex = this.leftChild(currentIndex)
        while(leftIndex <= endIndex){
            let rightIndex = this.rightChild(currentIndex)
            let shiftIndex ;
            if(rightIndex <= endIndex && this.heap[rightIndex]< this.heap[leftIndex]){
                shiftIndex = rightIndex
            }else{
                shiftIndex = leftIndex
            }
            if(this.heap[shiftIndex]< this.heap[currentIndex]){
                [this.heap[shiftIndex],this.heap[currentIndex]] = [this.heap[currentIndex],this.heap[shiftIndex]]
                currentIndex = shiftIndex;
                leftIndex = this.leftChild(currentIndex)
            }else
            {
                return;
            }
        }
    
    }
    display(){
        console.log(this.heap)
    }
    shiftUp(currentIndex){
        let parentIndex = this.parent(currentIndex)
        while(currentIndex >0 && this.heap[parentIndex] > this.heap[currentIndex]){
            [this.heap[currentIndex],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[currentIndex]]
         currentIndex = parentIndex;
         parentIndex = this.parent(currentIndex)
        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
        let removeNode = this.heap.pop()
        this.shiftDown(0)
        return removeNode;
    }
    heapSort( ){
        const minHeap = new Heap(this.heap)
        let sortedArry =[]
        while(minHeap.heap.length){
         sortedArry.push(minHeap.remove())   
        }
        return sortedArry;
    }
    parent(i){
        return Math.floor((i-1)/2)
    }leftChild(i){
        return i*2+1
    }
    rightChild(i){
        return i*2 + 2
    }
 }
 const heap = new Heap([4,3,11,6,7,5,8,2])
 heap.insert(1)
 heap.remove()
 heap.display()
 console.log(heap.heapSort())

