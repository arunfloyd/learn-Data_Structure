//nth Fibonacci number using recursion

//Sequence begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

//Adding adjacent values 
function recFeb(n) {
    if (n < 2) {
      return n;
    }
    return recFeb(n - 1) + recFeb(n - 2);
  }
  console.log(recFeb(8)) //Output : 21
