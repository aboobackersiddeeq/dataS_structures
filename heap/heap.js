// min 
class Heap {
  constructor(array) {
    this.heap = array;
    this.buildHeap();
  }
  buildHeap( ) {
     
    for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
      this.shiftDown(i);
    }
  }
  shiftDown(currentIndex) {
    const endIndex = this.heap.length - 1;
    let leftIndex = this.leftChild(currentIndex)
    while (leftIndex <= endIndex) {
      let rightIndex = this.rightChild(currentIndex);
      let indexToShift;
      if ( 
        // == 
        rightIndex <= endIndex &&
        this.heap[rightIndex] < this.heap[leftIndex]
      ) {
        indexToShift = rightIndex;
      } else {
        indexToShift = leftIndex;
      }
      if (this.heap[currentIndex] > this.heap[indexToShift]) {
        [this.heap[currentIndex], this.heap[indexToShift]] = [
          this.heap[indexToShift],
          this.heap[currentIndex]
        ];
        currentIndex = indexToShift;
        leftIndex = this.leftChild(currentIndex);
      } else {
        return ;
      }
    }
  }
  shiftUp(i) {
  let parentIndex = this.parent(i)
  while(i >0 && this.heap[parentIndex] > this.heap[i] ){
    [this.heap[parentIndex],this.heap[i]] = [this.heap[i],this.heap[parentIndex]]
    i = parentIndex;
    parentIndex=this.parent(i)
  }
  }
  peek() {
     return this.heap[0]
  }
  remove() {
    [this.heap[0],this.heap[this.heap.length-1]] =
    [this.heap[this.heap.length-1],this.heap[0]]
    const removeNode = this.heap.pop()
    this.shiftDown(0)
    return removeNode; 
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length-1)
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return (i * 2) + 1;
  }
  rightChild(i) {
    return (i * 2) + 2;
  }
  display() {
    console.log(this.heap);
  }
}
const heap = new Heap([20, 5, 4,3]);
heap.display()
heap.insert(1)
heap.insert(30)
heap.insert(0)
heap.display()

