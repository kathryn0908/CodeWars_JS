function isValidWalk(walk) {
    if(walk.length != 10){
      false
    }
    else if(walk.length == 10){
         let n = walk.filter(a => a =='n').length;
         let s = walk.filter(a => a=='s').length;
         let w = walk.filter(a => a=='w').length;
         let e = walk.filter(a => a=='e').length;
    
          return n == s && w == e ? true : false
    }
  }

function highAndLow(numbers){
    const numArray = numbers.split(' ');
    const n = numArray.map(num => {
        return parseInt(num, 10)
    })

    return Math.max(...n) + ' '+  Math.min(...n)
}

function findShort(s){
    let wordArray = s.split(' ');
    const nums = wordArray.map(word => {
        return word.length
    })
    return Math.min(...nums)
}

function solution(str){
    return str.split('').reverse().join('');
}


function filter_list(l) {
    return l.filter(l => Number.isInteger(l));
}

var uniqueInOrder=function(iterable){
    const result = [ ]
  
    for(let i = 0; i < iterable.length; i++){
      if(iterable[ i ] !== iterable[i + 1]){
        result.push(iterable[ i ])
      }
    }
    return result
}

function isTriangle(a,b,c){
    return (a+b > c && a+c > b && b+c > a) ? true : false
}

function findOdd(A) {
    var counts = {};
    A.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    const val = Object.values(counts)
    const n = val.find(c => c%2 != 0)
    const i = (val.indexOf(n))
    const key = Object.keys(counts)
    return parseInt(key[i], 10)
}


function deleteNth(arr,n){
    let newArr = [];
    function duplicates(item) {
      let count = 0;
      
      for (let i = 0; i < newArr.length; i++) {
        if (item === newArr[i]) {
          console.log(item)
          count++;
        }
      console.log(count)
        
      }
      return count;
    }
   
    for(let i=0; i < arr.length; i++){
      if(duplicates(arr[i]) < n){
        newArr.push(arr[i]);
      }
    }
   return newArr;
    
}

function findNextSquare(sq) {

    return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq)+1, 2) : -1
  
}