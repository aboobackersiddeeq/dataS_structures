class TrieNode{
   constructor (){
    this.children = new Map()
   }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
        this.endSymbel = "*"
    }

    insert(str){
        for(let i=0;i<str.length; i++){
          this.insertSubtree(i,str)  
        }
    }
    insertSubtree(index,str){
        let node = this.root
        for(let i= index;i< str.length;i++){
            let letter = str.charAt(i)
            if(!node.children.has(letter)){
                node.children.set(letter,new TrieNode())
            }
            node = node.children.get(letter)
        }
        node.children.set(this.endSymbel,null)
    }
    search(value){
        let node = this.root;
        for(let i=0;i<value.length;i++){
            let letter = value.charAt(i)
            if(!node.children.has(letter)){
                return false;
            }
            node= node.children.get(letter)
        }
        return node.children.has(this.endSymbel)

    }
}

const trie = new Trie()
trie.insert('aboobacker')
console.log(trie.search('ckerd'))