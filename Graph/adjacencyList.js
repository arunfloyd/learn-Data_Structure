 //      A
 //     / \
 //    /   \
 //   /     \
 //  B       C


 // A have connection with B
// B have connection with A & C
// C have connection with B

ajacencyList = {
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}
console.log(ajacencyList['B'])  //[ 'A', 'C' ]