function linearSearch(n, t) {
    for (i = 0; i < n.length; i++) {
      if (n[i] === t) {
        return i + 1;
      }
    }
    return -1;
  }
  console.log(linearSearch([1,2,3,5,5],5)) // Output :- 4 