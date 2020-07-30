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