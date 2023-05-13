const stack = [];

stack.push(20)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)
stack.pop()
const mid = Math.floor(stack.length/2)
for(i= mid;i<stack.length-1;i++){
    stack[i] =stack[i+1]
}
// middle
// console.log(stack[Math.floor(stack.length/2)]);
console.log(stack);


if(3<3){
    console.log(true)
}else{
    console.log(false)
}



class Trie { 
        constructor(str) { 
          this.root = new TrieNode(); 
          this.endSymbol = '*'; 
          this.populateSuffixTrie(str); 
        } 
     
        populateSuffixTrie(str) { 
          for (let i = 0; i < str.length; i++) { 
            this.insertSubstringStartingAt(i, str); 
          } 
        } 
       
        insertSubstringStartingAt(index, str) { 
          let TrieNode = this.root; 
          for (let i = index; i < str.length; i++) { 
            const letter = str.charAt(i); 
            if (!node.children.has(letter)) { 
              node.children.set(letter, new TrieNode()); 
            } 
            node = node.children.get(letter); 
          } 
          node.children.set(this.endSymbol, null); 
        } 
       
        contains(str) { 
          let node = this.root; 
          for (let i = 0; i < str.length; i++) { 
            const letter = str.charAt(i); 
            if (!node.children.has(letter)) { 
              return false; 
            } 
            node = node.children.get(letter); 
          } 
          return node.children.has(this.endSymbol); 
        } 
      } 
      const trie = new Trie("arun") 
      console.log(trie.contains("run"))