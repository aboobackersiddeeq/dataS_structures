class HashTable{
    constructor (size){
        this.table = new Array(size)
        this.size =size
    }
    hash(key){
        let total = 0
        for (let i = 0; i < key.length; i++) {
          total += key.charCodeAt(i)  
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index];
        if(!bucket){
            this.table[index]= [[key,value]]
        }else{
            const samekey= bucket.find(item => item[0]== key)
            if(samekey){
                samekey[1] =value;
            }else{
            bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash (key);
        const bucket = this.table[index]
        if(bucket){
            const samekey = bucket.find(item => item[0] == key)
            if(samekey){
                return samekey
            }
        }
      return undefined
    }
    remove(key){
        const index = this.hash(key)
        const bucket =this.table[index]
        if(bucket){
            const samekey = bucket.find(item => item[0] == key)
            if(samekey){
                bucket.splice(bucket.indexOf(samekey),1)
            }
        }

    }
    print (){
        for(let i=0;i<this.size; i++){
            if(this.table[i]){
             console.log(this.table[i]);
            }
        }
    }
}
const table = new HashTable(50)
table.set('name','aboobacker')
table.set('name','aboobacker')
table.set('naem','aboobacker')
table.set('age','34')
table.remove('name')
table.remove('age')
console.log( table.get('name'))
table.print()