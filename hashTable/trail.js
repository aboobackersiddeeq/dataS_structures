class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i =0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] == key);
      if (!sameKeyItem) {
        bucket.push([key, value]);
      } else {
        sameKeyItem[1] = value;
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] == key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] == key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
  display(){
    for(let i=0; i< this.size; i++){
        if(this.table[i]){
            console.log(this.table[i]);
        }
    }
  }
}
const table = new HashTable(50)
table.set('name','aboobacker') 
table.set('naem','aboobacker') 
table.set('name','habeeb') 
table.set('age','23') 
table.set('place','malappuram ') 
console.log(table.get('naem'))
console.log(table.get('age'))
table.remove('place')
table.display()
