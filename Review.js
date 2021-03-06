function queueTime(customers, n) {
  
    var queueArr = [];
    for(var i = 0; i < n; i++) {
      queueArr.push(0);
    }
    
    for(var j = 0; j < customers.length; j++) {
      queueArr[0] += customers[j];
      
      queueArr.sort(function(a,b){
        return a-b;
      });
    }
    
   
    return queueArr[queueArr.length-1]
}
  //   if(customers.length < 1){
  //     return 0
  //   }
  //   else if(n == 1){
  //     const total = (num, sum) => {
  //       return num + sum
  //     }
  //     return customers.reduce(total);
  //   }
  //   else{
  //     const max = Math.max(...customers)
  //     customers.length
      
  //   }
    
  var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
}

function diamond(n){
    if (n < 0 || !(n % 2)) return null; 
    const middleIndex = Math.floor(n / 2);
    
    return Array.apply(null, {length: n})
        .map((el, index) => {
          const indentation = Math.abs(index - middleIndex);
          const numberOfAsterisks = n - indentation * 2;
          return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
        })
        .join('\n') + '\n';
}

var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}


function expandedForm(num) {
  const ar = num.toString().split('');
  const nA = []

   ar.forEach((a, i) => {
     nA.push(a != 0  a + '0'.repeat((ar.length-1) - ar.indexOf(a[i])) + ' + ' : null)
   } )

  const f = nA.join('').split('');

  return f.slice(0, f.length-3).join('');
}

const dupes = {}
array.forEach((item,index) => {
  dupes[item.name] = dupes[item.name] || [];
  dupes[item.name].push(index);
});  

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
        
function array_diff(a, b) {
  var newArray = []; 
  for (var i=0; i<a.length; i++) {
    if (b.length>=1) {
      for (var j=0; j<b.length; j++) {
        if (a[i] !== b[j]) {
          newArray.push(a[i]);
        } 
      }     
    } else {
      newArray = a; 
    } 
    
  
  }
  return newArray;
    
  }

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}

function expression(number, operation){
	if(!operation)
		return number;
	return operation(number);
}

function zero(operation) { return expression(0, operation); }
function one(operation) { return expression(1, operation); }
function two(operation) { return expression(2, operation); }
function three(operation) { return expression(3, operation); }
function four(operation) { return expression(4, operation); }
function five(operation) { return expression(5, operation); }
function six(operation) { return expression(6, operation); }
function seven(operation) { return expression(7, operation); }
function eight(operation) { return expression(8, operation); }
function nine(operation) { return expression(9, operation); }

function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function dividedBy(x) {
	return function(y) {
		return y / x;
	}
}