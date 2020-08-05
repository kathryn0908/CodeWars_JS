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
    
    