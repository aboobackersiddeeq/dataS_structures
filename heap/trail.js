class MaxHeap {
  constructor(array) {
    this.heap = array;
    this.buildHeap();
  }
  buildHeap() {
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }
  shiftDown(currentIndex) {
    let endIndex = this.heap.length - 1;
    let leftIndex = this.leftChild(currentIndex);
    while (leftIndex <= endIndex) {
      let rightIndex = this.rightChild(currentIndex);
      let shiftIndex;
      if (
        rightIndex <= endIndex &&
        this.heap[rightIndex] > this.heap[leftIndex]
      ) {
        shiftIndex = rightIndex;
      } else {
        shiftIndex = leftIndex;
      }
      if (this.heap[shiftIndex] > this.heap[currentIndex]) {
        [this.heap[shiftIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[shiftIndex],
        ];
        currentIndex = shiftIndex;
        leftIndex = this.leftChild(currentIndex);
      } else {
        return;
      }
    }
  }
  shiftup(currentIndex) {
    let parentIndex = this.parent(currentIndex);
    while (
      currentIndex >= 0 &&
      this.heap[parentIndex] < this.heap[currentIndex]
    ) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftup(this.heap.length - 1);
  }
  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] =
     [this.heap[this.heap.length - 1],this.heap[0], ];

     let removeNode = this.heap.pop()
     this.shiftDown(0)
     return removeNode;
  }
  peek() {
    return this.heap[0];
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return i * 2 + 1;
  }
  rightChild(i) {
    return i * 2 + 2;
  }
  display(){
    console.log(this.heap)
  }
  heapSort() {
    // create a MaxHeap from the input array
    const maxHeap = new MaxHeap(this.heap);
  
    const sortedArray = [];
    // remove the maximum element from the heap and append to the sorted array
    while (maxHeap.heap.length > 0) {
      sortedArray.push(maxHeap.remove());
    }
    //  this.heap = sortedArray
    return sortedArray;
  }
}


const heap = new MaxHeap([12,4,2,8])
heap.display()
heap.insert(10)
heap.insert(1)
heap.display()
heap.remove()
console.log(heap.heapSort())  
heap.display()
