function iqTest(numbers){
    numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
    var odd = numbers.filter(function(el){ return el % 2 === 1});
    var even = numbers.filter(function(el){ return el % 2 === 0});
    
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

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

function removeSmallest(numbers) {

  let min = Math.min(...numbers);
  let i = numbers.indexOf(min);
  return numbers.slice(0, i).concat(numbers.slice(i +1))
  throw "TODO: removeSmallest";
}

function getCount(str) {
const array = str.split('');

const vowelA = array.filter(a => a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')

return vowelA.length;

}

function getCount(str) {
return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

function XO(str) {
const x = str.toLowerCase().split('').filter(s => s == 'x')
const o = str.toLowerCase().split('').filter(s => s == 'o')
console.log(str)
console.log(x, o)
return x.length === o.length ? true : false                            
}

const binaryArrayToNumber = arr => {
return parseInt(arr.join(''), 2);
};

function reverseWords(str) {
let string = str.split(' ').map(s => s.split('').reverse().join(''));
return string.join(' ');
}

function tribonacci(signature,n){
const t = signature
for(let i = 3; i < n; i++){
 t.push((t[i-1]+t[i-2]+t[i-3]))
}
return t.slice(0, n)
}


function printerError(s) {
const alphabet = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97)
obj = {}
const alpha = alphabet.slice(13,26)
console.log(s.indexOf('nopqrstuvwxyz') > -1)
const array = s.split('')
array.forEach(s => {
  if(s == 'n'|| s == 'o'|| s == 'p'|| s=='q' || s=='r' || s=='s' || s=='t' || s=='u'|| s=='v' || s=='w' || s=='x' || s=='y' || s=='z'){
    obj[s] ? obj[s] += 1 : obj[s] = 1;
  }
})
const add = function(num, sum){
  return num + sum;
}
const val = Object.values(obj)

if(val.length > 0){
  const sum = val.reduce(add)
  return `${sum}/${s.length}`
}
else{
  return `0/${s.length}`
}

}

function printerError(s) {
// your code
var count = 0;
for(var i = 0; i < s.length; i++) {
  if (s[i] > "m") {
    count++;
  }
}
return count+"/"+s.length;
}


function printerError(s) {
return s.match(/[^a-m]/g).length + "/" + s.length;
}


//Review:

function encrypt(text, n=0) {
return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
}

function decrypt(text, n) {
return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
}

var text='I Like Coding!'
function encrypt(text, n) {
if (!text) {
  return text;
}
var chars = text.split('');
while (n-- > 0) {
  var oddChars = chars.filter((c, i) => i & 1);
  var evenChars = chars.filter((c, i) => !(i & 1));
  chars = oddChars.concat(evenChars);
}
return chars.join('');
}


function likes(names) {
  return names.length == 0 ? 'no one likes this' 
  : names.length == 1 ? names.map(n => n+' likes this').join('') 
  : names.length <= 2 ? names.map((n,i) => names[i] +' and ' + names[i+1]).slice(0, names.length-1).join('') +' like this'
  : names.length == 3 ? names[0] +', ' + names[1] +' and ' + names[2] +' like this'  
  : names.length > 3 ?  names[0] +', ' + names[1] +' and ' + (names.length-2) +' others like this'
  : null
}

function count (string) {  
  var obj = {};
  !string ? {} : string.split('').forEach(l => obj[l] ? obj[l]+=1 : obj[l]=1)
   return obj;
}


var str = 'This is is a test test string'

function removeDuplicates(str){
 let unique = [...new Set(str.split(' '))].join(' ');
 console.log(unique);
  console.log(str.split(' ').filter((s, i) => str.split(' ').indexOf(s) === i).join(' '))
}



var arr = [1,2,3,4,5]
function flatten(arr){
  let newA = arr.join(',').split(',');
  console.log(newA.map(n => parseInt(n,10)))

}

function findUniq(arr) {
  let unique = {}
  
  arr.forEach(a => {
    unique[a] ? unique[a] += 1 : unique[a] = 1
  })
  
  const val = Object.values(unique)
  
  const i = val.indexOf(1)
  
  const key = Object.keys(unique)
  
  return parseFloat(key[i]);
}

var maxSequence = function(arr){
  const neg = (arr) => {
    nArr = []
    arr.forEach(a => nArr.push(Math.sign(a)))
    return nArr.every(e => e == -1)
  }
  
  const sum = (arr) => {
  
    let maxSum = 0;
    let partialSum = 0;

  for (let i of arr) { 
    partialSum += i; 
    maxSum = Math.max(maxSum, partialSum); 
    if (partialSum < 0) partialSum = 0; 
  }

  return maxSum;
}
  
 return arr.length < 1 || neg == true ? 0  : sum(arr)
}

function solution(string) {
  return string.split('').map(s => s == s.toUpperCase() ? " " + s : s).join('')
}

function rot13(message){
  const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('')
  const Alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const a = /^[A-Za-z]+$/;
  const find = (l) => {
    const array = []
    l === l.toUpperCase() 
    
    ? Alpha.find(al => al == l ? array.push(Alpha.slice(Alpha.indexOf(l), Alpha.indexOf(l)+14).pop()) : null)

    : alpha.find(al => al == l ? array.push(alpha.slice(alpha.indexOf(l), alpha.indexOf(l)+14).pop()) : null)
    
    return array.join('')
  }
 return message.split('').map(l => l.match(a) ? find(l) : l).join('')
}

function expandedForm(num) {
  const ar = num.toString().split('');
  const nA = []

   ar.forEach((a, i) => {
     nA.push(a != 0 ? a + '0'.repeat((ar.length-1) - i) : null)
   } )

  const f= nA.filter(a => a > 0)
  
  return f.join(' + ')
}



var encryptThis = function(text) {
  
  const arr = text.split(' ')
  
  const ascii = arr.map(a => a.split('').shift())
 
  const uni = ascii.map(a => a.charCodeAt(0))
  
  const splitArr = arr.map(a => a.split('').slice(1))
  
  const joinArr = []
  splitArr.forEach((a) => { 
     let lEnd = a.shift()
     let l = a.pop()
     a.unshift(l)
     a.push(lEnd)
     joinArr.push(a.join(''))
  })
  
  
  const final = joinArr.map((j, i) => {
    let s = j.split('')
    s.unshift(uni[i])
    return s.join('')
  })

 return final.join(' ')
}

function domainName(url){
  var removed = url.replace(/http:|www.|https:|\//g,"")
  return removed.replace(/\..*$/, '')
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
