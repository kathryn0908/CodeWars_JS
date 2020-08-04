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
  console.log(chars)
  console.log(oddChars)
  var evenChars = chars.filter((c, i) => !(i & 1));
  chars = oddChars.concat(evenChars);
}
return chars.join('');
}

encrypt(text, 2)