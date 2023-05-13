class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value <= root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder(root) {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
     return this.max(root.right);
    }
  }
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  removeNode(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.removeNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.removeNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        root.value = this.min(root.right);
        root.right = this.removeNode(root.right, root.value);
      }
    }
    return root;
  }
  findClosest(target){
    let current = this.root;
    let closest = this.root.value 
    while(current!== null){
     if (current.value == target){
        return current.value
     }
     if((Math.abs(current.value - target))< Math.abs(closest - target)){
        closest = current.value
     }
     if(target <current.value){
        current = current.left
     }else{
        current = current.right 
     }
    }
    return closest 
  }
  isBST(root,min = -Infinity,max = Infinity){
    if(root == null){  
        return true;
    }
    if(root.value <= min || root.value >= max){
        return false;
    }
    return this.isBST(root.left, min ,root.value) && this.isBST(root.right, root.value,max)
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);
tree.insert(18);
tree.insert(5);
tree.insert(4);
tree.insert(6);
tree.remove(5)
tree.levelOrder(tree.root);
console.log(tree.findClosest(2),'closest')
console.log(tree.isBST(tree.root))
// console.log(tree.min(tree.root))
// console.log(tree.max(tree.root))

