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
    const numA = []
    l.filter(l => {
        if(Number.isInteger(l)){
        numA.push(l)
        }
        })
        return numA
}