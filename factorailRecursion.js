function recfact(n) {
    if (n < 1) {
      return 1;
    }
    return n * recfact(n - 1);
  }
  
  console.log(recfact(4))