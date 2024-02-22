//Factorail Using Recursion

function recfact(n) {
    if (n < 1) {
      return 1;
    }
    return n * recfact(n - 1);
  }
  
  console.log(recfact(4)) 
  
  //Result is :-
  // 4! = 4*3*2*1 = 24 
  