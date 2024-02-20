function recFeb(n) {
    if (n < 2) {
      return n;
    }
    return recFeb(n - 1) + recFeb(n - 2);
  }
  console.log(recFeb(8))