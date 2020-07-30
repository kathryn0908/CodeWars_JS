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