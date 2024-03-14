.............................DATA STRUCTURE..........................

Data structures are ways of organizing and storing data so that they can be accessed and modified efficiently.

They define the relationship between the data, and the operations that can be performed on the data. 



..............................TYPES OF DS..............................

> Arrays: A collection of elements identified by array index.

> Linked Lists: A collection of nodes where each node contains a data element and a reference (link) to the next node in the sequence.

> Stacks: A collection of elements with two main operations: push (add an element to the top) and pop (remove the top element).

> Queues: A collection of elements that supports two operations: enqueue (add an element to the end) and dequeue (remove the element from the front).

> Trees: A hierarchical data structure with a root value and subtrees of children, represented as a set of linked nodes.

> Graphs: A set of objects (vertices) that are connected together, represented as a set of edges.

> Hash Tables: A data structure that implements an associative array abstract data type, a structure that can map keys to values.

> Heaps: A specialized tree-based data structure that satisfies the heap property.

> Disjoint Sets: A data structure that keeps track of a partition of a set into disjoint (non-overlapping) subsets.

> Priority Queues: A special type of queue in which each element is associated with a priority and is served according to its priority.


                              

........................Linear Data Structures And Non-Linear Data Structures................


Linear and non-linear data structures are two broad categories of data structures based on how they organize and store data.


........................Linear Data Structures:...........................................

In linear data structures, elements are arranged sequentially, one after the other.

They are used to store data that has a sequential relationship.

Examples include arrays, linked lists, stacks, and queues.

Operations like insertion, deletion, and access are typically performed in a sequential manner.

The time complexity for accessing elements in a linear data structure is generally O(n), where n is the number of elements.


........................Non-Linear Data Structures:.....................................

Non-linear data structures do not arrange elements in a sequential manner.

They are used to store data that has a hierarchical or complex relationship.

Examples include trees, graphs, and heaps.

Operations in non-linear data structures can involve traversing through multiple elements, which can be more complex than in linear data structures.

The time complexity for accessing elements in a non-linear data structure can vary widely depending on the specific structure and

the operation being performed.

............................................

Linear data structures are simpler and often more efficient for operations that involve traversing the entire structure,

while non-linear data structures are more complex but can provide more efficient operations for certain types of queries or updates.

The choice between using a linear or non-linear data structure depends on the specific requirements of the problem at hand.

..........................................



.................................ALGORITHM........................................ 

An algorithm is a step-by-step procedure for solving a problem or accomplishing a task.

In computer science, algorithms are used to perform calculations, data processing, automate tasks, and solve complex problems.

They are the building blocks of computer programs and are essential for the development of software and applications


...........................Here are some key points about algorithms:...............


Definiteness: Each step in an algorithm must be clear and unambiguous.

Finiteness: The algorithm must terminate after a finite number of steps.

Input: An algorithm should have zero or more well-defined inputs.

Output: An algorithm should have one or more well-defined outputs, which are the result of the computation.


........................Algorithms can be expressed in various forms, such as:...............


Natural language: Describing the steps in words.

Pseudocode: A simplified, high-level description of the algorithm, often used in computer science education.

Flowcharts: A graphical representation of the algorithm's steps.

Programming languages: Algorithms can be directly implemented in code using programming languages like Python, Java, C++, etc.

Effectiveness: The algorithm must be effective, meaning that it must produce the correct output for a given input within a reasonable amount of time.




...........................Asymptotic analysis..........................


Asymptotic analysis is used to describe the growth of the time or space complexity as the size of the input grows.



.......................The most common asymptotic notations are:..................


>>> Big O Notation (O): 

Describes an upper bound on the time complexity of an algorithm in the worst-case scenario.

It provides an upper limit on the growth rate of an algorithm's time complexity.
 
For example, O(n) means that the time complexity grows linearly with the size of the input.


>>> Big Omega Notation (Ω): 

Describes a lower bound on the time complexity of an algorithm in the best-case scenario.

It provides a lower limit on the growth rate of an algorithm's time complexity.

For example, Ω(n) means that the time complexity grows at least linearly with the size of the input.


>>> Big Theta Notation (Θ): 

Describes the tight bound on the time complexity of an algorithm, meaning it provides both an upper and lower bound.

It gives the exact growth rate of an algorithm's time complexity.

For example, Θ(n) means that the time complexity grows exactly linearly with the size of the input.


>>> Little o Notation (o): 

Similar to Big O notation, but it provides an upper bound that is not tight.

It is used to describe an upper bound that is not tight enough to be considered a Big Theta notation.


>>> Little omega Notation (ω): 

Similar to Big Omega notation, but it provides a lower bound that is not tight.

It is used to describe a lower bound that is not tight enough to be considered a Big Theta notation.


................................................................................

Asymptotic analysis is crucial for understanding the efficiency of algorithms, especially when comparing different algorithms for the same problem.

By using asymptotic notation, we can express the growth rate of an algorithm's complexity in a way that is independent of the specific details of the algorithm

and is focused on the overall behavior as the input size grows.
`
................................................................................


...............................Complexity analysis...............................

Complexity analysis is a method used in computer science to estimate the resources (such as time and space) required by an algorithm

to solve a problem as the size of the input data increases.

It helps in determining the efficiency of an algorithm and is a critical aspect of software development.


.......................There are two main types of complexity analysis:...............

>>>> Time Complexity: <<<< 

This measures the amount of time an algorithm takes to run as a function of the size of the input. 

It is usually expressed using Big O notation, which describes the upper bound of the time complexity in the worst-case scenario.

For example, O(n), O(n^2), O(log n), etc., where n is the size of the input.
 

>>>> Space Complexity: <<<<

This measures the amount of memory an algorithm uses in relation to the size of the input.

It includes both the space needed for the input data and any additional space required for the algorithm's variables and data structures.

Like time complexity, space complexity is also expressed using Big O notation.



....................Here are some common complexities and their implications:............

>>> O(1): Constant time complexity. 

The algorithm takes the same amount of time regardless of the input size.

>>> O(n): Linear time complexity. 

The time taken by the algorithm grows linearly with the size of the input.

>>> O(n^2): Quadratic time complexity. 

The time taken by the algorithm grows quadratically with the size of the input.

>>> O(log n): Logarithmic time complexity.

The time taken by the algorithm grows logarithmically with the size of the input,

which is common in algorithms that divide the problem into smaller parts.
 
>>> O(n log n): Linearithmic time complexity. 

The time taken by the algorithm grows linearly and logarithmically with the size of the input,

which is common in efficient sorting algorithms like merge sort and quicksort.


...............................................................................

Complexity analysis is essential for making informed decisions about which algorithm to use for a particular task, 

especially when dealing with large datasets or when performance is a critical factor.

It helps developers balance the trade-offs between different algorithms and choose the most appropriate one for their specific use case.

...............................................................................



...................................LINKED LISTS................................

LINKED LISTS ARE A FUNDAMENTAL DATA STRUCTURE IN COMPUTER SCIENCE, USED IN VARIOUS APPLICATIONS DUE TO THEIR DYNAMIC SIZE AND EFFICIENT INSERTIONS AND DELETIONS. 

>>> Applications

> Music Playlists:--
  In music applications, linked lists can be used to represent playlists where songs can be added, removed, or rearranged easily.

> Browser History:--
  Web browsers often use linked lists to manage the history of visited web pages.
  
  Users can navigate back and forth through the list.
 
> Implementing Stacks and Queues:--
 


................................Time Complexity in LL O(n).............................

 
> Insertion at the beginning (head): O(1) - Constant time complexity because it only involves changing a few pointers.
 
> Insertion at the end (tail): O(1) - Constant time complexity if you maintain a reference to the tail node.

> Insertion at a specific position: O(n) - Linear time complexity because you may need to traverse the list to find the correct position.

> Deletion at the beginning (head): O(1) - Constant time complexity because it only involves changing a few pointers.

> Deletion at the end (tail): O(1) - Constant time complexity if you maintain a reference to the tail node.

> Deletion at a specific position: O(n) - Linear time complexity because you may need to traverse the list to find the correct position.

> Searching for an element: O(n) - Linear time complexity because in the worst case, you may need to traverse the entire list.

> Accessing an element by index: O(n) - Linear time complexity because you may need to traverse the list from the head to the desired index.

> Finding the length of the list: O(n) - Linear time complexity because you need to traverse the entire list to count the number of nodes.

> Reversing the list: O(n) - Linear time complexity because you need to traverse the entire list and reverse the pointers.

> Browser History:--


................................Memory Allocation........................

Memory allocation is a critical aspect of programming and computer science, as it involves managing the use of memory in a computer system.

Memory allocation is the process of assigning memory space to data and programs during runtime.

It is a fundamental operation in computer systems and is handled by the operating system and the programming language's runtime environment



.......................There are several types of Memory Allocation strategie:..................


>>> Static Memory Allocation: 

Memory is allocated at compile time, and the size and lifetime of the memory are fixed.

This is common in languages like C and C++, where memory is allocated on the stack or heap using static or dynamic allocation.

>>> Dynamic Memory Allocation:

Memory is allocated at runtime, and the size and lifetime of the memory can change during the execution of the program.

This is common in languages like C++, Java, and Python, where memory is allocated on the heap.

>>> Stack Allocation: 

Memory is allocated in a LIFO (Last In, First Out) manner.

It is used for local variables and function calls.

Stack allocation is typically faster than heap allocation but has a limited size.

>>> Heap Allocation:

Memory is allocated in a more flexible manner, allowing for dynamic resizing.

It is used for objects that have a lifetime beyond the scope of a single function call or for large data structures.

Heap allocation is slower than stack allocation but offers more flexibility.

>>> Garbage Collection: 

In languages with automatic memory management, such as Java,Python and JavaScript , 

garbage collection is used to automatically reclaim memory that is no longer in use.

This helps prevent memory leaks and simplifies memory management for the programmer.



..............................."Contiguous" and "Non-Contiguous".......................


How memory is allocated for data storage.


................................Contiguous Memory Allocation:.........................

Contiguous memory allocation means that the memory blocks assigned to a data structure or a variable are adjacent to each other in the physical memory.

This is the most common type of memory allocation in languages like C and C++, where arrays and structures are stored in contiguous memory locations.

Contiguous memory allocation can be done on the stack (for local variables) or on the heap (for dynamically allocated memory).

The advantage of contiguous memory allocation is that it allows for efficient access to data, as the CPU can access memory locations sequentially.

The disadvantage, it can lead to fragmentation, where free memory is divided into small, non-contiguous blocks, 

making it difficult to allocate large contiguous blocks of memory.


...............................Non-Contiguous Memory Allocation:...................


Non-contiguous memory allocation means that the memory blocks assigned to a data structure or a variable are not adjacent to each other in the physical memory.

This type of allocation is less common and is typically used in languages with garbage collection, such as Java and Python, 

where the runtime environment manages memory allocation and deallocation.

Non-contiguous memory allocation can be the result of fragmentation in contiguous memory allocation systems,

where memory is divided into small, non-contiguous blocks.

The advantage of non-contiguous memory allocation is that it can reduce fragmentation and make better use of available memory.

The disadvantage, accessing non-contiguous memory can be less efficient than accessing contiguous memory,

as the CPU may need to perform more memory accesses to retrieve or store data.


..................................Memory Leak ......................................... 

A memory leak occurs when a computer program incorrectly manages memory allocations, resulting in a gradual loss of available computer memory.

This typically happens when a program allocates memory (e.g., by creating objects, arrays, or other data structures) 

but fails to release it when it is no longer needed.

Over time, memory leaks can cause a program to consume more and more memory, which can lead to system slowdowns, crashes, or even make the system unresponsive.


........................Here are some common causes of memory leaks...................


>>> Unreleased Memory:

When memory is allocated but not properly deallocated, it remains occupied and cannot be used by other parts of the program or other programs.

>>> Dangling Pointers:

Pointers that still point to memory that has been freed or deallocated.

Accessing such memory can lead to undefined behavior and potential memory leaks.

>>>Circular References:

In garbage-collected languages, circular references between objects can prevent the garbage collector from reclaiming the memory, leading to a memory leak.

>>> Static Variables:

Static variables that are not properly managed can lead to memory leaks,especially if they hold references to large objects or data structures.

>>> Resource Leaks:

Failing to release system resources, such as file handles, network sockets, or database connections, can also lead to memory leaks.

>>> Memory Allocation Errors: Errors in the memory allocation process, such as not checking for allocation failures, can lead to memory leaks.


........................To prevent memory leaks............................


Always deallocate memory when it is no longer needed.

Use smart pointers or garbage collection features to automatically manage memory.

Regularly check for memory leaks using profiling tools.

Write unit tests to ensure that memory is properly released during testing.

Follow the principle of least privilege, where objects only have access to the memory they need.

...........................................................................

Memory leaks can be difficult to detect and fix, especially in large codebases,

but they are a serious issue that can have long-term consequences for both the software and the system it runs on.

Therefore, it's important to be proactive in memory management and to use tools and techniques that can help identify and prevent memory leaks.
...........................................................................



..............................Garbage collection (GC)........................

Garbage collection (GC) is a form of automatic memory management that attempts to reclaim memory occupied by objects that are no longer in use by the program.

It is a feature of many modern programming languages, including Java, C#, Python, and JavaScript, which are known as garbage-collected languages.


..............................Working of Garbage collection........................

Garbage collection works by periodically checking which parts of memory are still in use and which are not.

>>> Marking:

The garbage collector starts by identifying which objects are still reachable from the root of the object graph (e.g., local variables, static fields, etc.).

These objects are marked as "alive."

>>> Tracing:

The garbage collector then traces the references from the marked objects to other objects, marking them as "alive" as well.

This process continues recursively until all reachable objects are marked.

>>> Sweeping: 

After all reachable objects are marked, the garbage collector sweeps through the memory, looking for objects that have not been marked.

These are considered "dead" and are the ones that will be reclaimed.

>>> Compacting:

Some garbage collectors will compact the remaining objects to make the memory more efficient, moving them to fill in the gaps left by the freed memory.

>>> Deallocation: Finally, the memory occupied by the "dead" objects is deallocated and can be reused for future allocations.



..............................When Garbage Collector Fails.........................................

While garbage collection is designed to automatically manage memory,

there are situations where it can fail to reclaim memory or can have unintended side effects.


.............................To mitigate these issues, developers can:.......................

Use weak references to break circular references.

Avoid relying on finalizers for critical resource management.

Tune garbage collection settings to better suit the application's needs.

Monitor and profile memory usage to identify and address memory leaks.


............................Circular linked list....................

A circular linked list is a type of linked list where the last node points back to the first node, forming a loop.

This structure allows for efficient traversal in both directions, but it also introduces some unique challenges and considerations.


............................Doubly Linked List ..............................

A doubly linked list is a type of linked list in which each node contains a reference to both the next node and the previous node in the sequence.

This allows for efficient bidirectional traversal of the list, 

as you can move forward and backward through the list without having to start from the head node each time.


........................ Circular doubly linked list....................

A circular doubly linked list is a type of linked list where each node contains a reference to both the next node and the previous node, 

and the last node points back to the first node, forming a loop.

This structure allows for efficient bidirectional traversal and insertion/deletion operations.


............................Recursion.................

Recursion is a programming technique where a function calls itself in order to solve a problem.

It is a method of solving problems that involves breaking down a problem into smaller and smaller subproblems 

until you get to a small enough problem that it can be solved trivially.

The solution to the original problem is then constructed from the solutions to the subproblems.


.......................Applications of Recursion:......................

>>> Tree and Graph Algorithms:

Recursion is used in algorithms for tree and graph traversal, such as depth-first search (DFS) and breadth-first search (BFS).

>>> Dynamic Programming:

Recursion is used in dynamic programming to solve problems by breaking them down into overlapping subproblems.

>>> Backtracking Algorithms:

Recursion is used in backtracking algorithms, such as solving puzzles or finding all permutations of a set.

>>> Sorting Algorithms: 

Recursive sorting algorithms, like quicksort and mergesort, use recursion to divide the problem into smaller subproblems.

>>> Fractal Rendering:

Recursion is used in algorithms for rendering fractals, where the same pattern is repeated at smaller scales.


........................Advantages of Recursion:......................

>>> Simplicity:

Recursive solutions can be more straightforward and easier to understand than iterative solutions, 

especially for problems that naturally lend themselves to recursive thinking.

>>> Divide and Conquer:

Recursion is a natural fit for divide-and-conquer algorithms, 

where a problem is broken down into smaller subproblems that are solved independently.

>>> Tree Traversal:

Recursion is often used for tree traversal algorithms, such as depth-first search (DFS) and breadth-first search (BFS),

where the structure of the tree naturally leads to recursive calls.


......................Disadvantages of Recursion.....................

>>> Stack Overflow:

Deep recursion can lead to a stack overflow, as each recursive call adds a layer to the call stack.

>>> Inefficiency:

Recursive solutions can be less efficient than iterative solutions in terms of memory usage and performance,

especially for problems that can be solved iteratively.

>>> Difficulty in Debugging:

Debugging recursive functions can be more challenging than debugging iterative functions, as the call stack can be difficult to follow.

>>> Lack of Tail Call Optimization:

Many programming languages do not optimize for tail recursion, which can lead to inefficient use of memory and performance.



..........................Mutable And Immutable String....................................

Whether an object can be changed after it has been created.



..........................Mutable Strings:..............................................

A mutable string is a string that can be modified after it has been created.

This means that you can change the characters in the string, add new characters, or remove existing characters.


.........................Immutable Strings:.....................

An immutable string is a string that cannot be modified after it has been created.

Once a string is created, it remains constant, and any operation that appears to modify the string actually creates a new string.




............................... Jagged Array...................................

A jagged array, also known as a ragged array or an array of arrays, is an array where each element is an array itself, 

but these inner arrays can have different lengths.

Jagged arrays are useful when you need to store data that doesn't have a regular structure, 

or when the size of the sub-arrays is not known in advance and can change dynamically

This is in contrast to a multidimensional array, where all sub-arrays have the same length.




.................................Virtual Memory ..........................

Virtual memory is a memory management technique that provides an abstraction of the physical memory resources that are available on a given system.

It allows programs to use more memory than what is physically available by using a combination of physical memory (RAM) and disk space.



............................Carriage Return (\r): ............................

The carriage return character is represented by the escape sequence \r. 

It is a control character that moves the cursor to the beginning of the current line without advancing to the next line.

In the context of text files, it is often used to denote the end of a line of text.

However, its behavior can vary depending on the operating system and the context in which it is used.

For example, in Windows, a line ending is typically represented by a combination of carriage return and line feed (\r\n), 

while in Unix-based systems, a line ending is typically just a line feed (\n).


...........................Null Character (\0): .........................

The null character is represented by the escape sequence \0.

It is a control character with the value zero and is used to mark the end of a string in C-style strings.

In many programming languages, strings are arrays of characters terminated by a null character. 

This allows functions that operate on strings to know where the string ends.



......................LF (Line Feed) and CRLF (Carriage Return and Line Feed) ............

They are control characters used to represent the end of a line in text files.

......................Line Feed (LF):......................

The LF character is represented by the escape sequence \n.

It is a control character that moves the cursor down to the next line without returning to the beginning of the line.

In Unix-based systems (such as Linux and macOS), LF is the standard line ending character.


......................Carriage Return and Line Feed (CRLF):.............................

The CRLF sequence is represented by the escape sequence \r\n.

>>>>>> It consists of two characters:

>>> Carriage Return (CR): 
      The CR character is represented by the escape sequence \r. It moves the cursor to the beginning of the line.

>>> Line Feed (LF): 
          As described above, the LF character moves the cursor down to the next line. In Windows systems,
          CRLF is the standard line ending character.


 ........................ASCII and Unicode.....................
 
Both character encoding standards used to represent text in computers and other devices that use text.

They are used to map characters to their corresponding binary values, which can then be stored and transmitted in digital form.


.....................ASCII (American Standard Code for Information Interchange):...........

>> ASCII is a 7-bit character encoding standard that was developed in the early 1960s.

>> It defines 128 characters, including the English alphabet (both uppercase and lowercase), digits, punctuation marks, and control characters.

>> ASCII is limited to characters that can be represented using 7 bits, which means it can represent a maximum of 128 different characters.

>> ASCII is sufficient for representing English text and is widely used in systems that only need to support English and a limited set of symbols.


..........................Unicode:.................................

>> Unicode is a much more extensive character encoding standard that was developed in the 1990s to address the limitations of ASCII.

>> It is a universal character encoding standard that can represent virtually all characters from all writing systems in the world,

including non-Latin scripts, symbols, and emojis.

>> Unicode uses variable-length encoding, which means that characters can be represented using anywhere from 1 to 4 bytes.

This allows for a much larger number of characters to be represented than ASCII.

>> Unicode includes several encoding forms, such as UTF-8, UTF-16, and UTF-32, which are used to store Unicode characters in computer memory and files.

UTF-8 is the most commonly used form and is backward-compatible with ASCII.
 


 ..........................Sparse array..........................
 
 A sparse array is an array in which most of the elements have the default value for the array's element type

(such as null for objects, 0 for integers, or false for booleans).
 
 Sparse arrays are arrays that have a large number of uninitialized or unused elements.
 
 
 // A sparse array with a few initialized elements
const sparseArray = new Array(1000);
sparseArray[0] = 'first';
sparseArray[999] = 'last';

console.log(sparseArray.length); // Output:  1000
console.log(sparseArray[0]); // Output: 'first'
console.log(sparseArray[999]); // Output: 'last'

 
 ...............................Bubble Sort ..........................................

 -> Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements,
 
    and swaps them if they are in the wrong order.
 
 -> The pass through the list is repeated until the list is sorted.

 -> The algorithm gets its name from the way smaller or larger elements "bubble" to the top of the list.

 -> Bubble Sort has a time complexity of O(n^2) in the worst and average cases,
 
    where n is the number of elements in the array.
  
 -> The best case time complexity is O(n) when the input array is already sorted

 -> The space complexity of Bubble Sort is O(1),




 ..................................Insertion Sort ......................................

 -> Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time

 -> It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

 -> The time complexity of Insertion Sort is O(n^2) in the worst and average cases

 -> The best case time complexity is O(n) when the input array is already sorted

 -> The space complexity of Insertion Sort is O(1) 


 ................................Selection Sort............................................

 -> Selection Sort is a simple sorting algorithm that divides the input list into two parts:

             -->  the sublist of items already sorted and
             -->  the sublist of items remaining to be sorted that occupy the rest of the list. 

 -> Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.

 -> The algorithm proceeds by finding the smallest (or largest, depending on the sorting order) element in the unsorted sublist,
  
    swapping it with the leftmost unsorted element (putting it in sorted order),
  
    and moving the sublist boundaries one element to the right.

-> The time complexity of Selection Sort is O(n^2) in all cases (best, average, and worst)

  as it always performs n(n-1)/2 comparisons

->The space complexity of Selection Sort is O(1), 


.................................... Quick Sort .............................................

-> Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach.

-> It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,

   according to whether they are less than or greater than the pivot

-> The time complexity of Quick Sort in the average case is O(n log n),worst case O(n^2).

-> The space complexity of Quick Sort is O(log n)

 ....................................Merge Sort ..........................................

 -> Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves,
 
   calls itself for the two halves, and then merges the two sorted halves.
 
 -> The time complexity of Merge Sort is O(n log n) in all cases (best, average, and worst) 
 
 -> The space complexity is O(n) - because of the temporary arrays used during the merge process.


.......................................Stack.................................................

-> A stack is a linear data structure that follows a particular order in which operations are performed. 

-> The order may be LIFO (Last In First Out) or FILO (First In Last Out)

-> Three basic operations are performed in the stack:

        >> Push: Adds an item in the stack.
                 If the stack is full, then it is said to be an Overflow condition.
        
        >>Pop: Removes an item from the stack.
               The items are popped in the reversed order in which they are pushed.
               If the stack is empty, then it is said to be an Underflow condition.
        
        >> Peek or Top: Returns the top element of the stack.
        
        >> isEmpty : Returns true if the stack is empty, else false.

-> Push, Pop, Peek, isEmpty, and Size operations all have a time complexity of O(1) 
  
  because they involve a constant number of operations regardless of the size of the stack.

-> Search operation has a time complexity of O(n) 

  because it may require examining every element in the stack in the worst case.

  >>>>>>>>>>>>>> Applications <<<<<<<<<<<<<<<<<

  >> Function Call Stacks: In programming languages, a stack is used to keep track of function calls.
                           When a function is called, its return address and local variables are pushed onto the stack. 
                           When the function returns, its information is popped from the stack.
  
  >> Expression Evaluation: Stacks are used to evaluate expressions, especially in postfix (RPN) notation. 
                            Each operand is pushed onto the stack, and when an operator is encountered, 
                            the required number of operands are popped from the stack, 
                            the operation is performed, and the result is pushed back onto the stack.
 
  >> Undo Mechanisms: In text editors and other applications, a stack can be used to implement an undo feature.
                      Each action (e.g., typing a character, deleting a character) is pushed onto a stack.
                      When the user wants to undo an action, it is popped from the stack and reversed.

  >> Backtracking Algorithms: Stacks are used in backtracking algorithms to store the state of the algorithm,
                              allowing it to backtrack when necessary.
  
  >> Depth-First Search (DFS): In graph algorithms, a stack is used to perform a depth-first search.
                               Each node is pushed onto the stack, and the algorithm explores as far as possible 
                               along each branch before backtracking.

    >>>>>>>>>> Types <<<<<<<<<<<<<<<<<<

     >> Standard Stack: The most basic type of stack, where elements are added (pushed) at the top
                        and removed (popped) from the top.
     
     >> Min Stack: A stack that keeps track of the minimum element in the stack at all times. 
                   This is useful in scenarios where you need to quickly find the minimum element in a stack.
     
     >> Max Stack: Similar to the Min Stack, but it keeps track of the maximum element.

     >> Two Stack Queue: A queue implemented using two stacks.
                         This is a creative way to implement a queue using only stacks,
                         which can be useful in scenarios where only stack operations are available.
     
     >> Stack with Increment Operator: A stack that supports an increment operation,
                                       which increments the value of the top element by a given value.
                                       
                                       This is a more complex data structure that can be used in specific applications.                           

...................................Queue ....................................        

-> A queue is a linear data structure that follows a particular order in which operations are performed.

-> The order is First In First Out (FIFO).

-> The end of the queue is called the rear, and the front of the queue is called the head.

-> The operations typically performed on a queue include:

       -> Enqueue : Adds an element to the end of the queue.
       -> Dequeue : Removes an element from the front of the queue.
       -> Front   : Gets the front item from the queue.
       -> Rear    : Gets the last item from the queue.
       -> isEmpty : Checks if the queue is empty.
       -> isFull  : Checks if the queue is full.

-> Enqueue, Dequeue, Front, Rear, isEmpty, and isFull operations all have a time complexity of O(1) 
   
  because they involve a constant number of operations regardless of the size of the queue.       

-> Space Complexity: O(n)

 >>>>>>>>> Applications <<<<<<<<<<<<<<<
   
   >> Task Scheduling: Queues are used in operating systems to manage tasks. 
                       Each task is placed in a queue, and the operating system processes them in the order they were added.

   >> Print Spooler: In computer printing, the print spooler uses a queue to manage print jobs. 
                     When a print job is submitted, it is added to the queue.
                     The printer then processes jobs in the order they were received.

   >> Disk Scheduling: In disk scheduling algorithms, queues are used to manage disk requests.
                       The disk scheduler uses a queue to hold disk requests and processes them in a specific order
   
   >> Caching: Queues can be used to implement a cache replacement policy.
               When the cache is full and a new item needs to be added, 
               the oldest item (the one at the front of the queue) is removed to make room for the new item.
   
   >>Simulation: Queues are used in simulations to model real-world scenarios,
                 such as waiting in line at a supermarket checkout or managing network traffic.

   >>>>>>>>>  Types of Queue  <<<<<<<<<<<<

  >> Standard Queue : The most basic type of queue, where elements are added at the rear and removed from the front.

  >> Priority Queue : A queue where elements are assigned a priority.
                      Elements with higher priority are dequeued before elements with lower priority. 
                      If two elements have the same priority, they are dequeued according to their order in the queue.

  >> Circular Queue : A queue that is implemented as a circular buffer,
                      where the last position in the buffer is connected back to the first position.
                      This allows for efficient use of memory and can be useful in scenarios where the queue size is fixed.
  
  >> Double-Ended Queue (Deque): A queue that allows insertion and removal of elements from both ends. 
                                 This is not a standard queue but is a more flexible data structure
                                 that can be used in various applications.

...................................Peek..........................................

 The peek operation allows you to see the next element to be removed or accessed without altering the structure


.............................. Stable And Unstable.........................

 -> A sorting algorithm is considered stable if two objects with equal keys appear in the same order
    in the sorted output as they appear in the input array to be sorted.
  
 -> Conversely, an unstable sorting algorithm does not guarantee this property.

 .......................Stable Sorting Algorithms...................

  -> Stable sorting algorithms maintain the relative order of records with equal keys (i.e., values). 
    
    This is important in scenarios where the order of equal elements matters.
    
  -> Examples of stable sorting algorithms include:

            --> Insertion Sort
            --> Bubble Sort
            --> Merge Sort (when implemented in a stable manner)
            --> Counting Sort
            --> Radix Sort
            --> Cocktail Sort
            --> Gnome Sort

.........................Unstable Sorting Algorithms..................

 -> Unstable sorting algorithms do not guarantee that the relative order of equal elements will be preserved in the sorted output.
 
  >>>>> Examples of unstable sorting algorithms include:

        >> Quick Sort (in its basic implementation)
        >> Heap Sort
        >> Selection Sort
        >> Shell Sort


 ...........................Deterministic And Non Deterministic..................       

 -> In the context of algorithms and computer science, the terms "deterministic" and "non-deterministic"
   
     refer to the predictability of an algorithm's behavior and its output.

 ............................Deterministic Algorithms .........................

-> A deterministic algorithm is one whose output is uniquely determined by its input. 

-> Given the same input, a deterministic algorithm will always produce the same output, 
   and it will complete in a finite amount of time. 
  
-> Deterministic algorithms are predictable and repeatable. 
 
 >>>>> Examples of deterministic algorithms include:

     >> Sorting algorithms (e.g., Bubble Sort, Merge Sort, Quick Sort)

     >> Search algorithms (e.g., Binary Search)

     >> Hashing algorithms (e.g., MD5, SHA-1)

     >> Algorithms for solving mathematical problems (e.g., algorithms for solving linear equations)    

........................... Non-Deterministic Algorithms..........................

-> A non-deterministic algorithm is one whose behavior is not uniquely determined by its input. 

-> It may produce different outputs for the same input, or it may not terminate for some inputs.

-> Non-deterministic algorithms are often used in theoretical computer science to model systems
   where the outcome is not predictable due to randomness or unpredictable inputs. 
   
   >>>> Examples of non-deterministic algorithms include:

          >> Randomized algorithms (e.g., Randomized Quick Sort, Randomized Selection)

          >> Algorithms that rely on external input (e.g., algorithms that use random numbers or user input)

          >> Algorithms in quantum computing (e.g., Grover's algorithm, Shor's algorithm)    


..........................Stack Underflow Vs Stack Overflow.......................

-> "stack underflow" and "stack overflow" are conditions that can occur during the execution of a program,

     particularly when operations are performed on a stack

.................................Stack Underflow ..........................

->  A stack underflow occurs when an operation is attempted on an empty stack.
 
-> This typically happens when a pop or peek operation is performed on a stack that has no elements.

-> The result of a stack underflow can vary depending on the implementation and the programming language,
    but it often leads to an error or exception being thrown.

-> Example Scenario: A program attempts to pop an element from an empty stack.

>>>>>>>>Consequences:

  >>> The program may terminate with an error message indicating a stack underflow.
   
  >>> In some cases, the program might continue to run but with unexpected behavior,
      as it tries to access data that doesn't exist.


..................................Stack Overflow...................................

 -> A stack overflow occurs when a stack's capacity is exceeded,
    meaning that more elements are pushed onto the stack than it can hold. 
  
 -> This can happen in scenarios where there is a recursive function call that does not have a proper base case, 
    leading to an infinite recursion, or when a large amount of data is pushed onto the stack without checking
    if there is enough space.

 -> Example Scenario: A program recursively calls a function without a proper base case, leading to an infinite recursion.

>>>>> Consequences:

 >>> The program may terminate with an error message indicating a stack overflow.

 >>> In some cases, the program might continue to run but with unexpected behavior,
     as it tries to access memory that it shouldn't.

 >>> In severe cases, a stack overflow can lead to a program crash or, in the worst-case scenario, a system crash.


 .................................Divide And Conquer Strategy.....................

 -> The divide and conquer strategy is a powerful algorithmic technique used in computer science 
    to solve problems by breaking them down into smaller, more manageable subproblems. 

 >>>> Three main steps:

       >> Divide  : Break the problem into smaller subproblems.
       >> Conquer : Solve each subproblem independently.
       >> Combine : Merge the solutions of the subproblems to solve the original problem.

  -> This strategy is widely used in various algorithms,
     including sorting (e.g., merge sort, quicksort), 
     searching (e.g., binary search), 
     and graph algorithms (e.g., depth-first search).


............................Pros of Using Linked Lists for Stacks...........................

 >>> Dynamic Size: Linked Lists can grow and shrink dynamically as elements are added or removed.
                   This is particularly useful for stacks, where the number of elements can vary significantly.
 
 >>> Efficient Memory Usage: Linked Lists allocate memory as needed, which can be more memory-efficient than arrays,
                             especially when the maximum size of the stack is unknown or can change frequently.
 
 >>> Fast Operations: Both push (insertion at the top) and pop (removal from the top) operations in a stack implemented 
                      with a Linked List are very fast, with a time complexity of O(1).
                      This is because these operations only involve updating a few pointers.
 
 >>> Ease of Implementation: Implementing a stack using a Linked List is straightforward,
                            as it involves managing a head pointer and performing operations at the head of the list.


............................Pros of Using Linked Lists for Queues........................

>>> Dynamic Size: Similar to stacks, Linked Lists can grow and shrink dynamically,
                  making them suitable for queues where the number of elements can vary.

>>> Efficient Memory Usage: Linked Lists use memory more efficiently than arrays for queues,
                            especially when the maximum size of the queue is unknown or can change.

>>> Fast Enqueue and Dequeue Operations: For a queue implemented with a Linked List, 
                                         enqueue (insertion at the end) and dequeue (removal from the front) operations are fast,
                                         with a time complexity of O(1). This is because these operations only involve updating 
                                         a few pointers.
 
 >>> Ease of Implementation: Implementing a queue using a Linked List is relatively straightforward,
                             involving managing a head and a tail pointer to efficiently perform enqueue and dequeue operations.



.......................................Double-Ended Queue (DEQUE) ...........................

 -> A Double-Ended Queue (DEQUE) is a generalization of a queue that allows insertion and removal of elements from both ends.
   
 -> This means you can add or remove elements from the front and the back of the queue.
 
 -> The term "double-ended" refers to the fact that the queue has two ends, 
     unlike a standard queue which has only one end (the back).

 >>>>>>>>>>>>  Operations on a Double-Ended Queue
             
             >>> EnqueueFront: Adds an element to the front of the DEQUE.
             >>> EnqueueBack: Adds an element to the back of the DEQUE.
             >>> DequeueFront: Removes an element from the front of the DEQUE.
             >>> DequeueBack: Removes an element from the back of the DEQUE.
             >>> PeekFront: Returns the element at the front of the DEQUE without removing it.
             >>> PeekBack: Returns the element at the back of the DEQUE without removing it.


 >>>>>>>>>>>>>>  Characteristics of a Double-Ended Queue

            >> Dynamic Size: Like other dynamic data structures,
                             a DEQUE can grow and shrink in size as elements are added or removed.

            >> Efficient Memory Usage: DEQUEs can be more memory-efficient than arrays or other data structures 
                                       for certain operations, especially when the maximum size is unknown or can change.

            >> Flexibility: The ability to add or remove elements from both ends provides flexibility in
                             how data is managed and accessed.


 .............................Hash Table ...............................

-> A hash table, also known as a hash map, is a data structure that implements an associative array abstract data type,
   a structure that can map keys to values.

-> It uses a hash function to compute an index into an array of buckets or slots,
   from which the desired value can be found. 
   
-> Hash tables are widely used in computer science due to their efficiency in lookup,
   insertion, and deletion operations.   

  >>>>>>>>> Applications of Hash Tables <<<<<<<<<<<<<< 

    >>> Database Indexing: Hash tables are used in database systems to index data.
                           They allow for fast retrieval of records based on keys,
                           significantly speeding up data access.
    
    >>> Caching: Hash tables are used in caching mechanisms to store and retrieve data quickly.
                 For example, web browsers use hash tables to cache web pages,
                 reducing the need to re-fetch data.

    >>> String Matching: Hash tables are used in algorithms like the Rabin-Karp algorithm for string matching,
                         which allows for efficient searching of patterns within text.

    >>> Counting Frequencies: Hash tables can be used to count the frequency of elements in a collection,
                              such as in the counting sort algorithm.
    
    >>> Deduplication: In data processing, hash tables can be used to remove duplicates from a dataset by using the
                       hash table to track the presence of elements.
   
    >>> Symbol Tables: In compilers and interpreters, hash tables are used as symbol tables to store variable names and 
        their corresponding values.

    >>> Cryptography: Hash tables are used in cryptographic algorithms for storing and retrieving keys.

    >>> Websites and Web Applications: Hash tables are used in web development for session management,
                                       where they store session IDs and their corresponding user data.
   
    >>> Networking: In network protocols, hash tables are used for routing tables, 
                    where they map IP addresses to network interfaces.

    >>> Machine Learning: Hash tables are used in machine learning for feature extraction and dimensionality reduction, 
                          such as in the use of hash functions in locality-sensitive hashing (LSH) for nearest neighbor search.

            

 .......................Hash Functions ..............................           

 ->  A hash function is a function used in hash tables to map data of arbitrary size to fixed-size values. 
 
 -> The output of a hash function is called a hash code, hash value, or simply hash.
 
 -> The primary purpose of a hash function is to distribute data evenly across the hash table,
    minimizing collisions (where two different inputs produce the same hash value).

>>>>>>>>>>>>>>> Types of Hash Functions

    >>> Division Method: This method involves dividing the key by a prime number and using the remainder as the hash value.
                         The prime number is chosen to ensure a good distribution of keys.

    >>> Multiplication Method: Similar to the division method, but instead of dividing, 
                               the key is multiplied by a fractional number between 0 and 1,
                              and the fractional part is used as the hash value.
 
    >>> Universal Hashing: This method uses a hash function that is designed to produce a uniform distribution of hash values
                           for a given set of keys. It often involves a combination of division and multiplication methods.

    >>> Cryptographic Hash Functions: These are hash functions that are designed to be secure against attacks.
                                      They are used in cryptography and digital signatures. Examples include SHA-256, SHA-3, and MD5.

    >>> Non-Cryptographic Hash Functions: These are hash functions that are not designed to be secure against attacks 
                                          but are used for tasks like data retrieval, data integrity checks,
                                          and data deduplication. Examples include MurmurHash, CityHash, and FNV-1a.
    
    >>> Perfect Hash Functions: These are hash functions that map distinct keys to distinct hash values without any collisions.
                                They are used in scenarios where collisions are not acceptable.

    >>> Custom Hash Functions: These are hash functions designed specifically for a particular application or dataset.
                               They are often tailored to the characteristics of the data to achieve optimal performance.


 ....................................Hash Value ................................
 
  -> A hash value, also known as a hash code, is the output produced by a hash function. 
  
  -> Hash functions are designed to take an input (or 'message') and return a fixed-size string of bytes,
     typically in the form of a hash code. 
  
  -> The output is intended to be unique to the input data; 
     small changes to the input should produce such a drastic change in the output that the new hash value appears
     uncorrelated with the old hash value.

>>>>>>>>>>>>>>  Characteristics of Hash Values
  
   >>> Fixed Size: Regardless of the size of the input data,
                  the hash value produced by a hash function is always of a fixed size.
                  This is crucial for efficient storage and comparison.
   
   >>> Deterministic: For a given input, the hash function will always produce the same hash value.
                      This property is essential for data retrieval and verification purposes.
   
   >>> Uniform Distribution: A good hash function aims to distribute the hash values uniformly across the hash table,
                             minimizing collisions (where two different inputs produce the same hash value).
   
   >>> Non-Invertible: Ideally, it should be computationally infeasible to retrieve the original input data from the hash value.
                       This property is crucial for security applications, such as password hashing.

                      
                      
  ................................. Collisions.........................

  -> While the goal of a hash function is to produce a unique hash value for each unique input, collisions can occur.
 
  -> A collision happens when two different inputs produce the same hash value.
     The impact of collisions depends on the application:

  -> In Hash Tables: Collisions can degrade performance, as the hash table must resolve the collision,
                   often by using a collision resolution technique like chaining or open addressing.
  
  -> In Cryptographic Hash Functions: Collisions are considered a security vulnerability, as they can be exploited in attacks.


  ............................Prevent Collisions ..........................

   1. Open Addressing
            In open addressing, if a collision occurs, the hash table looks for the next available slot.
            There are several methods to find the next available slot:

                        >>> Linear Probing: The hash table looks for the next slot in a linear sequence.
                        >>> Quadratic Probing: The hash table looks for the next slot in a quadratic sequence.
                        >>> Double Hashing: The hash table uses a second hash function to determine the next slot.

    2. Chaining
            Chaining involves using a linked list to store all the elements that hash to the same index.
            Each slot in the hash table points to the head of a linked list.
            When a collision occurs, the new element is added to the end of the list.

    3. Resizing
            Resizing involves increasing the size of the hash table when the load factor 
            (the ratio of the number of elements to the size of the hash table) exceeds a certain threshold.
            This can help in reducing the likelihood of collisions by providing more space for the elements.

    4. Cuckoo Hashing
             Cuckoo hashing is a method that uses two hash functions instead of one.
             Each key is hashed by two hash functions, and it is placed in the slot pointed to by the first hash function.
             If that slot is already occupied, the key is placed in the slot pointed to by the second hash function.
             This process is repeated until all keys are placed in their correct slots.

    5. Robin Hood Hashing
             Robin Hood hashing is a variant of open addressing that aims to distribute keys more evenly across the hash table.
             When a collision occurs, the new key is placed in the slot with the least number of probes required to reach it,
             displacing the key that required more probes.

    6. Separate Chaining with Linked Lists
             This method is similar to chaining but uses a more sophisticated data structure, such as a balanced search tree,
             to store the elements in each slot.
             This can improve performance in scenarios where the number of elements in a slot is large.

    7. Use of a Good Hash Function
             Choosing a good hash function is crucial for minimizing collisions.
             A good hash function should distribute keys uniformly across the hash table, making collisions less likely.

    8. Collision Resolution Policies
             Implementing a collision resolution policy can help manage collisions more effectively.
             For example, a policy might prioritize the storage of more important keys over less important 
            ones to minimize the impact of collisions.


 >>>>>>>>>>>>>  Chaining
           
          >>> Chaining is a method where each slot in the hash table points to a linked list
               of entries that hash to the same slot. 
               When a collision occurs, the new key-value pair is added to the end of the list.

>>>> Advantages:

          >>> Simple to implement.
          >>> Works well when the load factor is low.
>>>> Disadvantages:

          >>> Can lead to long linked lists, which can degrade performance.
          >>> Requires additional memory for the linked list nodes.           

 >>>>>>>>>>>>> Linear Probing

           >>> Linear probing is a method where, upon a collision, the hash table looks for the next available slot
                in a linear sequence.

 >>> Advantages:

           >>> Simple to implement.
           >>> Does not require additional memory for linked lists.
 
 >>>Disadvantages:

           >>> Can lead to clustering, where a group of consecutive slots are filled, leading to longer search times.
           >>> Performance degrades as the load factor increases.

>>>>>>>>>>>>Quadratic Probing

          >>> Quadratic probing is an extension of linear probing where the hash table looks for the next available slot
              in a quadratic sequence. This can help in reducing clustering.

 >>> Advantages:

          >>> Reduces clustering compared to linear probing.
          >>> Does not require additional memory for linked lists.

>>> Disadvantages:

          >>> More complex to implement than linear probing.
          >>>Performance can still degrade as the load factor increases.


>>>>>>>>>>>>>> Double Hashing
       
          >>> Double hashing uses two hash functions to determine the next slot when a collision occurs.
              The first hash function is used to find the initial slot,
              and the second hash function is used to find the next slot.

 >>> Advantages:

          >>> Can reduce clustering compared to linear and quadratic probing.
          >>> Does not require additional memory for linked lists.

 >>> Disadvantages:

          >>> More complex to implement than linear and quadratic probing.
          >>> Requires two hash functions, which can be computationally expensive.


....................................Load factor .............................

 -> The load factor in the context of hash tables is a measure of how full the hash table is.
  
 -> It is calculated as the ratio of the number of entries in the hash table to the total number of slots available in the table.

 -> The load factor is a crucial metric because it directly influences the performance and efficiency of the hash table.

 >>>>>> Importance of Load Factor
 
          >>> Performance: As the load factor increases, the likelihood of collisions also increases,
                           which can degrade the performance of the hash table.
                           Collisions can lead to longer search times, as the hash table needs to resolve these collisions 
                           using various collision resolution techniques.
          
          >>> Memory Usage: A high load factor can also indicate that the hash table is using more memory than necessary.
                            This is because the hash table may have allocated more slots than are currently needed to store the entries.
          
          >>> Resizing: Many hash table implementations automatically resize the table when the load factor exceeds a certain threshold.
                        Resizing can be an expensive operation, as it involves creating a new, 
                        larger table and rehashing all the existing entries.

 >>>>>>>Managing Load Factor
         
        >>> To maintain good performance and memory efficiency, it's important to manage the load factor effectively:

             >>> Initial Size: Choosing an appropriate initial size for the hash table can help in managing the load factor.
                               A larger initial size can reduce the need for resizing but may also lead to 
                               wasted memory if the table is not fully utilized. 
             >>> Resizing Policy: Implementing a good resizing policy can help in managing the load factor.
                                  This typically involves doubling the size of the table when the load factor exceeds a certain
                                  threshold, such as 0.75 or 0.8.
             >>> Collision Resolution: Using effective collision resolution techniques can help in managing collisions and thus
                                       indirectly managing the load factor.
                                       Techniques like chaining, open addressing (linear, quadratic, and double hashing),
                                       and cuckoo hashing can help in reducing the impact of collisions.       
                                       
                                                       


...................................TREE ...................................

 -> Trees are a fundamental data structure in computer science and are widely used in various applications
    within Data Structures and Algorithms (DSA).

 -> They are hierarchical structures that consist of nodes, where each node has a value and 
    a list of references to other nodes (its children).
   
 -> The top node is called the root, and the nodes with no children are called leaves.
 
 -> Trees are used to represent hierarchical relationships between objects, such as file systems,
    organizational structures, and more.


>>>> Applications of Trees in DSA <<<< 
 
    >> File Systems: Trees are used to represent file systems where each node represents a file or a directory. 
                     The root node represents the root directory, and each child node represents a subdirectory 
                     or a file within the directory.
    
    >> Expression Trees: In compilers and interpreters, expression trees are used to represent expressions in a way 
                         that is easy to evaluate.
                         Each node in the tree represents an operator or an operand.
    
    >> Decision Trees: In machine learning and artificial intelligence, decision trees are used to model decisions 
                       and their possible consequences. 
                       They are particularly useful in classification and regression tasks.
    
    >> Network Routing: In computer networks, trees are used to represent the routing tables.
                        Each node represents a router, and the edges represent the connections between routers.
 
    >> Syntax Trees: In compilers, syntax trees are used to represent the structure of a program.
                     Each node represents a construct in the programming language, such as a function, a loop, or an if-else statement.

    >> Database Indexing: In databases, trees are used to index data for faster retrieval.
                          B-trees, for example, are used in many database systems to store data in a way that 
                          allows for efficient searching, insertion, and deletion.
    
    >> Heap Data Structure: Heaps, which are a type of binary tree, are used to implement priority queues.
                            In a heap, the parent node is always greater (in a max heap) or smaller (in a min heap) than its children.

    >> Graph Algorithms: Trees are used in various graph algorithms, such as depth-first search (DFS) and
                         breadth-first search (BFS), to traverse or search through graphs.


 ...............................Complete Tree,Full Tree,Perfect Tree...........................   

   -> In the context of trees in Data Structures and Algorithms (DSA), the terms "complete tree," "full tree," and "perfect tree" 
      refer to different types of trees based on their structure and the number of children each node can have. 
   
   ->Understanding these terms is crucial for implementing and using trees effectively in various applications.                  


...................................Complete Tree.........................

   -> A complete tree is a tree in which every level, except possibly the last, is completely filled,
        and all nodes are as far left as possible. 
   
   ->In other words, every level of the tree is fully populated except for the last level, which is filled from left to right.

   >>> Example 

                1                 1
               / \
              2   3
             / \   
            4   5 
   -> This tree is complete because every level is fully populated except for the last level, which is filled from left to right.


...................................Full Tree.........................

   -> A full tree is a tree in which every node has either 0 or 2 children.
   
   -> In other words, every node is either a leaf node (has no children) or a node with two children.

     >>> Example 

                  1
                 / \
                2   3
               / \ / \
              4  5 6  7

   -> This tree is full because every node has either 0 or 2 children.

...................................Perfect Tree.........................
 
 -> A perfect tree is a tree in which all interior nodes have two children and all leaves have the same depth or same level.
 
 -> In other words, it is a tree that is both complete and full.

    >>> Example 

                  1
                 / \
                2   3
               / \ / \
              4  5 6  7
   
   -> This tree is perfect because it is both complete (every level is fully populated except for the last level,
      which is filled from left to right) and full (every node has either 0 or 2 children).          


..................................Self-Balancing Tree ....................................

 -> A self-balancing binary search tree (BST) is a binary search tree that automatically keeps its height (or depth) small
   in the face of arbitrary item insertions and deletions. 
 
 -> This is achieved by rebalancing the tree after insertions and deletions to ensure that the tree remains approximately balanced,
    with the height of the tree being logarithmic in the number of nodes.

 -> This property ensures that operations like search, insert, and delete can be performed efficiently, with time complexity of
     O(log n), where n is the number of nodes in the tree.

  >>> Types of Self-Balancing Trees
 
   --> There are several types of self-balancing trees, each with its own method of balancing the tree.

    -> AVL Trees: Named after their inventors Adelson-Velsky and Landis, 
                  AVL trees are self-balancing binary search trees that maintain their balance by ensuring that for every node,
                  the heights of the left and right subtrees differ by at most one.
                  This property ensures that the tree remains balanced, with the height of the tree being logarithmic in the 
                  number of nodes.
                  
    -> Red-Black Trees: Red-Black Trees are a type of self-balancing binary search tree where each node stores an extra 
                        bit for denoting the color of the node, either red or black.
                        The tree is balanced by ensuring that the path from the root to the farthest leaf is no more than 
                        twice as long as the path from the root to the nearest leaf.
                        This property, along with the coloring rules, ensures that the tree remains approximately balanced.
    
    -> B-Trees: B-Trees are a generalization of binary search trees that are used in databases and file systems.
               They are self-balancing and allow for efficient insertion, deletion, and search operations.
               B-Trees maintain their balance by ensuring that all leaves are at the same depth and that the tree is filled 
               to a certain extent before splitting.
   
    -> Splay Trees: Splay Trees are a type of self-balancing binary search tree that move a node to the root of the tree 
                    after each access.
                    This operation helps to keep the tree balanced by ensuring that frequently accessed nodes are closer 
                    to the root.

   >>>> Advantages of Self-Balancing Trees
 
       -> Efficiency: Self-balancing trees ensure that the tree remains balanced, 
                      which guarantees that operations like search, insert, and delete can be performed in O(log n) time.

       -> Flexibility: Different types of self-balancing trees can be chosen based on the specific requirements of the application,
                       such as the need for efficient insertions and deletions or the need for efficient searches.                 
.................................Binary Search Trees (BST).........................

>> Insertion: The average and worst-case time complexity for insertion in a BST is O(log n) for a balanced tree 
               and O(n) for an unbalanced tree.
               The best-case time complexity is O(1) when the node is inserted at the root.

>> Deletion: The average and worst-case time complexity for deletion in a BST is O(log n) for a balanced tree
             and O(n) for an unbalanced tree.
             The best-case time complexity is O(1) when the node is deleted from the root.

>> Searching: The average and worst-case time complexity for searching in a BST is O(log n) for a balanced tree
              and O(n) for an unbalanced tree.


.......................................Heaps..............................

-> Heaps are a specialized tree-based data structure that can be used in various applications within computer science
   and software engineering.

-> They are particularly useful for implementing priority queues, 
   which are data structures that allow elements to be inserted with a priority and then removed in order of priority.

->   Heaps can be of two types: Min-Heap and Max-Heap.

>>> Types of Heaps 
  
  >> Min-Heap: In a Min-Heap, the parent node is always less than or equal to its child nodes.
               This property ensures that the node with the smallest value is always at the root of the heap.
               Min-Heaps are commonly used in algorithms that need to find the minimum element efficiently.
  
  >> Max-Heap: In a Max-Heap, the parent node is always greater than or equal to its child nodes.
               This property ensures that the node with the largest value is always at the root of the heap.
               Max-Heaps are commonly used in algorithms that need to find the maximum element efficiently.

>>> Applications of Heaps
    
    >> Priority Queues: Heaps are the underlying data structure for priority queues.
                        They allow elements to be inserted with a priority and then removed in order of priority.
                        This is particularly useful in scheduling tasks, 
                        where tasks with higher priority should be executed before tasks with lower priority.
    
    >> Graph Algorithms: Heaps are used in graph algorithms such as Dijkstra's algorithm for finding the shortest path in a graph.
                         The algorithm maintains a priority queue of nodes to visit,
                         where the node with the shortest distance from the source is always at the top of the heap.
    
    >> Sorting Algorithms: Heaps are used in algorithms like heapsort, which is an efficient sorting algorithm with
                           a time complexity of O(n log n).
                           Heapsort works by building a max-heap from the input data and
                           then repeatedly removing the maximum element from the heap and inserting it into a sorted array.

    >> Data Compression: Heaps are used in algorithms for data compression, such as Huffman coding,
                         where the frequency of each character in the data is used to create a priority queue.
                         The characters with higher frequency are given higher priority,
                         which helps in achieving efficient compression.

    >> Memory Management: In operating systems, heaps are used for dynamic memory allocation.
                          The heap is a region of a computer's memory space that is used for dynamic memory allocation.
                         The heap is managed by the programmer, and it grows and shrinks as needed.

>>> Time Complexity for Heap Operations
    
     >> Insertion: O(log n)
     >> Deletion (Min-Heap): O(log n)
     >> Deletion (Max-Heap): O(log n)
     >> Searching: O(n)
     >> Heapify: O(log n)

>>> Binomial Heap 
 
   -> A binomial heap is a type of priority queue data structure that supports the following operations efficiently: 
    insertion, deletion, and finding the minimum element.
   
   -> It is named after its structure, which is based on the binomial theorem.
   
   -> The binomial heap is a generalization of the binary heap, where each node can have more than two children.

    >>> Operations on a Binomial Heap

       -> Insertion: To insert a new element into a binomial heap, a new binomial tree of order 1 is created with the
                     new element as its root.
                     This new tree is then merged with the existing trees in the heap.
       
       -> Deletion: To delete the minimum element (the root of the tree with the smallest order), 
                    the tree is removed from the heap, and its children are merged back into the heap.
                    The merging process involves combining trees of the same order until only one tree of each order remains.
       
       -> Finding the Minimum: The minimum element is the root of the tree with the smallest order in the heap.

    >>> Time Complexity 
        > Insertion : O(log n)
        > Deletion  :  O(log n)
        > Finding the Minimum : O(1)


......................................Graph...................................

-> Graphs are a fundamental data structure in computer science, used to model pairwise relations between objects.

-> They are versatile and can be used in a wide range of applications.

-> Graphs can be categorized into two main types: directed and undirected.

>>>> Types of Graphs
  
   >>> Directed Graphs (Digraphs): In a directed graph, edges have a direction, meaning that the relationship between two nodes
                                   is not symmetric.
                                   For example, a directed graph can represent a one-way road network where each road has a direction.
   
   >>> Undirected Graphs: In an undirected graph, edges do not have a direction,
                          meaning that the relationship between two nodes is symmetric.
                          For example, an undirected graph can represent a social network where if person A is a friend 
                          of person B, then person B is also a friend of person A.

>>> Applications of Graphs
                         
    >> Social Networks: Graphs are used to model social networks, where nodes represent individuals,
                        and edges represent relationships between them.
                        This can be used to analyze social structures, find influential individuals, or recommend friends.
    
    >> Web Pages: Graphs are used to represent web pages and their links.
                  This can be used for web crawling, page ranking, or finding the shortest path between two web pages.

    >> Transportation Networks: Graphs are used to represent road networks, where nodes represent intersections, 
                               and edges represent roads.
                               This can be used for route planning, traffic analysis, or finding the shortest path between
                               two locations.
    
    >> Computer Networks: Graphs are used to represent computer networks, where nodes represent computers,
                          and edges represent connections between them.
                          This can be used for network routing, fault detection, or network security.

    >> Biological Networks: Graphs are used to represent biological networks, such as protein-protein interaction networks 
                            or gene regulatory networks.
                            This can be used for drug discovery, understanding disease mechanisms, or predicting protein structures.

    >> Electrical Circuits: Graphs are used to represent electrical circuits, where nodes represent components,
                            and edges represent connections between them.
                            This can be used for circuit analysis, design, or fault detection.
    
    >> Algorithms and Data Structures: Graphs are used in various algorithms and data structures,
                                       such as shortest path algorithms (Dijkstra's, Bellman-Ford),
                                       minimum spanning tree algorithms (Kruskal's, Prim's),
                                       and graph traversal algorithms (depth-first search, breadth-first search).   

  
   >>> Time Complexity 
     
     >> Adding a Vertex: O(1)

     >> Adding an Edge: O(1) for adjacency matrix, 
                        O(1) for each vertex in adjacency list

     >> Removing a Vertex: O(V^2) for adjacency matrix,
                           O(V + E) for adjacency list

     >> Removing an Edge: O(1) for adjacency matrix,
                          O(E) for adjacency list

     >> Searching for a Vertex: O(V) for adjacency matrix,
                                O(1) for adjacency list

     >> Searching for an Edge: O(1) for adjacency matrix,
                               O(E) for adjacency list


  ............................Breadth-First Search (BFS)...........................

  -> BFS starts traversal from the root node (or any arbitrary node of a graph, sometimes referred to as a 'source node') 
     and explores the neighbor nodes at the present depth prior to moving on to nodes at the next depth level.
 
  -> BFS visits nodes in a level-by-level manner (i.e., visiting the nodes in the same level before moving to the next level).

    >> Time Complexity:

    -> The time complexity of BFS is O(V + E), where V is the number of vertices and E is the number of edges in the graph.


 ............................Depth-First Search (DFS) .............................
 
  -> DFS starts traversal from the root node (or any arbitrary node of a graph) and explores as far as possible along each branch
     before backtracking.
  
  ->DFS visits nodes in a depth-first manner, exploring as deep as possible along each branch before backtracking.

    >>> Time Complexity:

      -> The time complexity of DFS is O(V + E), where V is the number of vertices and E is the number of edges in the graph.


 >>>> Key Differences  <<<<<

   -> Order of Visiting Nodes: BFS visits nodes level by level, 
                               while DFS visits nodes as deep as possible along each branch before backtracking.

   -> Data Structure Used: BFS uses a queue to keep track of nodes to visit next, while DFS uses a stack.

   -> Use Cases: BFS is often used for finding the shortest path in an unweighted graph, 
                 while DFS is used for tasks like topological sorting, pathfinding in a maze, and detecting cycles.     

   >>> Example  
       
        A -- B -- C
        |    |
        D -- E
      
       --> BFS Traversal Starting from A:

           ->Visit A, then B, then D, then E, then C.

       --> DFS Traversal Starting from A:

           -> Visit A, then B, then C, then E, then D.
 
.............................Isolated Vertex  And Weighted Graph ......................

 -> In graph theory, the terms "isolated vertex" and "weighted graph" refer to specific characteristics of graphs.
 
  >>> Isolated Vertex
    
    -> An isolated vertex (also known as a leaf node) is a vertex in a graph that has no edges connected to it.
       In other words, it is a vertex that is not part of any edge.
       In a graphical representation, an isolated vertex is a node that stands alone without any lines (edges) 
       connecting it to any other node.

   >>> Example :-

       A -- B
            |
            C

  

  >>> Weighted Graph 

   -> A weighted graph is a graph in which each edge is assigned a numerical value or weight.
   -> This weight can represent various things depending on the context, such as the cost of traveling between two nodes, 
      the strength of a connection, or the distance between two points.

   >>> Example :-   

      A --1-- B
      |       |
      2       3
      |       |
      C --4-- D

   >>> Graph Indexing
     
     -> Graph indexing is a technique used to improve the efficiency of graph operations, such as searching for vertices or edges,
         by organizing the graph data in a way that makes these operations faster. 

     -> Graph indexing can involve various strategies, including:
   
     -> Adjacency Lists: Each vertex maintains a list of its adjacent vertices.
                         This is efficient for sparse graphs where the number of edges is much less than the number of vertices squared.
     
     -> Adjacency Matrices: A matrix is used to represent the graph, where the cell at the intersection of row i and column j 
                            indicates the presence (or absence) of an edge between vertices i and j.
                            This is efficient for dense graphs where the number of edges is close to the number of
                            vertices squared.
     
     -> Edge Lists: A list of all edges in the graph, with each edge represented by a pair of vertices.
                    This is efficient for graphs where the number of edges is much less than the number of 
                    vertices squared and the graph is not dense.
     
     -> Incidence Matrices: A matrix where each row represents a vertex and each column represents an edge.
                            The cell at the intersection of row i and column j indicates whether vertex i is incident to edge j.
                            This is useful for sparse graphs and when the graph is undirected.

   >>> Vertex Indexing
     
     -> Vertex indexing is a specific type of graph indexing that focuses on optimizing the access to vertices within the graph.

     -> Vertex Arrays: An array where each element represents a vertex.
                       The index of the array can be used as the vertex ID.
                       This is efficient for dense graphs where the number of vertices is close to the number of edges.
     
     -> Vertex Lists: A list where each element represents a vertex.
                      The position of the element in the list can be used as the vertex ID.
                      This is efficient for sparse graphs where the number of vertices is much less than the number of edges.

     -> Vertex Maps: A map (or dictionary) where each key-value pair represents a vertex and its associated data.
                     The key can be used as the vertex ID.
                     This is efficient for graphs where vertices have associated data that needs to be quickly accessed.
     
     -> Vertex Sets: A set where each element represents a vertex.
                     This is efficient for operations that involve checking the presence of a vertex in the graph, 
                     such as in algorithms that need to keep track of visited vertices.            

   >>> Edge Indexing Strategies
     
    ->  Adjacency Lists: In an adjacency list representation, each vertex maintains a list of its adjacent vertices.
                         This is efficient for sparse graphs where the number of edges is much less than the number of vertices squared.
                         However, to index edges directly, you can maintain an additional data structure that maps each edge to its vertices.
    
    -> Adjacency Matrices: In an adjacency matrix representation, a matrix is used to represent the graph,
                           where the cell at the intersection of row i and column j indicates the presence (or absence)
                           of an edge between vertices i and j. This is efficient for dense graphs where the 
                           number of edges is close to the number of vertices squared. 
                           Edge indexing in this context is straightforward since the matrix itself serves as the index.
    
    -> Edge Lists: An edge list is a list of all edges in the graph, with each edge represented by a pair of vertices.
                   This is efficient for graphs where the number of edges is much less than the number of vertices squared
                   and the graph is not dense.
                   Edge indexing in this context involves maintaining a list of edges, where each edge can be accessed by its
                   position in the list.
    
    -> Incidence Matrices: An incidence matrix is a matrix where each row represents a vertex 
                           and each column represents an edge.
                           The cell at the intersection of row i and column j indicates whether vertex i is incident to edge j. This is useful for sparse graphs and when the graph is undirected. Edge indexing in this context involves accessing the matrix by the edge's row and column indices.

  .............................. Trie ........................    

  -> A trie, also known as a prefix tree, is a tree-like data structure that is used to store a dynamic set
     or associative array where the keys are usually strings.
  
  -> Tries are particularly efficient for certain types of operations, such as searching for strings with a common prefix,
     which can be very fast.

  >>>> Types of Tries 
   
       >> Standard Tries: In a standard trie, each node represents a character of a string.
                          The root node is empty, and each path from the root to a leaf node represents a string in the trie.
                          Standard tries are simple to implement but can become large and inefficient for certain datasets.

       >> Compressed Tries: Compressed tries are a variant of standard tries where nodes with a single child are merged 
                            into a single node.
                            This reduces the size of the trie and can make it more efficient for certain operations.

  >>>> Applications of Tries

    >> Autocomplete: Tries are widely used in autocomplete systems to quickly find all strings that start with a given prefix.
                     This is particularly useful in applications like search engines, text editors, and IDEs.
    
    >> Spell Check: Tries can be used to implement spell checkers by storing all valid words in a trie.
                    When a user types a word, the spell checker can quickly check if the word exists in the trie.
  
    >> IP Routing: In computer networks, tries can be used to implement IP routing tables.
                   Each node in the trie represents a bit in the IP address, allowing for efficient routing of packets.

    >> Telephone Directory: Tries can be used to store a telephone directory, where each node represents a digit in a phone number.
                 This allows for efficient searching and insertion of phone numbers.
    
    >> Text Compression: Tries can be used in text compression algorithms to store the frequency of characters in a text. 
                         This can be used to compress text by replacing common strings with shorter representations.
                           


 ............................. Trie Vs Hashtable ........................................                          

 >>>> Trie
  
  >> Purpose: Tries are primarily used for storing strings and are particularly efficient for operations that involve 
              finding strings with a common prefix.
  
  >> Structure: Tries are tree-like structures where each node represents a character of a string.
                The root node is empty, and each path from the root to a leaf node represents a string in the trie.

  >> Search Complexity: The time complexity for searching a string in a trie is O(m), where m is the length of the string.
                        This is because each character in the string corresponds to a level in the trie.

  >> Insertion Complexity: The time complexity for inserting a string into a trie is also O(m),
                           as each character in the string corresponds to a level in the trie.
  
  >> Space Complexity: The space complexity of a trie is O(alphabet_size * key_length * N),
                       where N is the number of keys in the trie.
                       This can be quite space-efficient for certain datasets, especially when the keys have a common prefix.
  
  >> Use Cases: Tries are commonly used in applications like autocomplete systems, spell checkers, and IP routing tables.

 >>>> Hash Table
   
   >> Purpose: Hash tables are used for storing key-value pairs and are efficient for operations that involve looking up 
                values by their keys.
   
   >> Structure: Hash tables use a hash function to map keys to indices in an array.
                 Collisions are resolved using techniques like chaining or open addressing.
   
   >> Search Complexity: The average time complexity for searching a key in a hash table is O(1),
                         assuming a good hash function and proper handling of collisions.
                         However, in the worst case (when all keys hash to the same index),
                         the complexity can degrade to O(n), where n is the number of keys in the hash table.

   >> Insertion Complexity: The average time complexity for inserting a key-value pair into a hash table is O(1),
                            assuming a good hash function and proper handling of collisions.
                            However, in the worst case, the complexity can degrade to O(n).
  
   >> Space Complexity: The space complexity of a hash table is O(n),
                        where n is the number of key-value pairs stored in the hash table.
   
   >> Use Cases: Hash tables are widely used in various applications, including database indexing, 
                 caching, and implementing sets and maps.

 >>>> Comparison
  
   >> Use Case: Tries are more suitable for operations involving strings and prefixes,
                while hash tables are more general-purpose for storing key-value pairs.
   
   >> Complexity: Tries have a predictable time complexity for operations involving strings,
                  while hash tables have an average time complexity of O(1) but can degrade to O(n) in the worst case.

   >> Space Efficiency: Tries can be more space-efficient for certain datasets, especially when the keys have a common prefix.
                        Hash tables have a more predictable space complexity.

   >> Implementation Complexity: Tries can be more complex to implement correctly, especially when dealing with collisions and 
                                 ensuring the trie remains balanced.
                                 Hash tables are generally simpler to implement.                


....................Height of a Node ,Depth of a Node and Degree of a Node .........................

>>> Height of a Node
  
   >> The height of a node in a tree or graph is the number of edges in the longest path from the node to a leaf node.
  
   >> In other words, it's the maximum distance from the node to any of its descendants.
  
   >> The height of a tree is the height of its root node.

   >> Height of a Node: The number of edges in the longest path from the node to a leaf node.
  
   >> Height of a Tree: The height of the root node.

>>> Depth of a Node

  >> The depth of a node in a tree or graph is the number of edges in the path from the root node to the node.
     It represents the distance from the root to the node.

  >> Depth of a Node: The number of edges in the path from the root node to the node.

  >> Depth of a Tree: The depth of the root node is 0, as it is the root.

>>> Degree of a Node

  >> The degree of a node in a graph is the number of edges connected to it.
  
  >> In other words, it's the number of adjacent nodes.

  >> Degree of a Node: The number of edges connected to the node.

  >>>> Comparison <<<<

  >> Height vs. Depth: Height is about the distance from a node to its furthest leaf, 
                while depth is about the distance from the root to a node.
                Height is a measure of the "height" of a subtree rooted at a node,
                and depth is a measure of the "depth" of a node in the tree.
  
  >> Degree: Degree is a measure of how many edges are connected to a node, regardless of its position in the tree or graph.



  ..............................Shortest Path Algorithm............................

  -> The shortest path algorithm is a fundamental algorithm in graph theory and computer science, 
     used to find the shortest path between two nodes in a graph.
 
  -> The most common shortest path algorithms are Dijkstra's algorithm and the Bellman-Ford algorithm.
  
  -> These algorithms are used in various applications, including routing protocols in computer networks,
     pathfinding in video games, and finding the shortest route in maps.

  >>> Dijkstra's Algorithm
   
    -> Dijkstra's algorithm is a greedy algorithm that finds the shortest path from a source node to all other nodes in a graph.
    
    -> It works by maintaining a set of nodes for which the shortest path from the source has already been determined 
       and iteratively selecting the node with the smallest tentative distance from the source that has not yet been 
       included in the set.

      --> Time Complexity:

        -> If the graph is represented using an adjacency matrix,
           the time complexity is O(V^2), where V is the number of vertices.
        -> If the graph is represented using an adjacency list and a priority queue,
           the time complexity is O((V+E) log V), where E is the number of edges.

  >>> Bellman-Ford Algorithm
  
     -> The Bellman-Ford algorithm is another algorithm used to find the shortest path from a single source vertex to all other
        vertices in a graph.
    
     -> It can handle graphs with negative weight edges, unlike Dijkstra's algorithm, which assumes all edge weights are non-negative.

     --> Time Complexity:

        >> The time complexity of the Bellman-Ford algorithm is O(V*E), 
           where V is the number of vertices and E is the number of edges.



..................................Heapification..........................................

-> Heapification is a process used in heap data structures, such as binary heaps, to ensure that the heap property is maintained.

   The heap property for a binary heap is that for any given node i, the value of i is not smaller than the values of its children. 
   There are two main approaches to heapification: top-down and bottom-up.

 >>>> Top-Down Heapification
    
   -> Top-down heapification is the process of maintaining the heap property from the root down to the leaves.
      This approach is typically used in operations that involve removing the root element (e.g., in a priority queue),
      which can potentially disrupt the heap property.

   >>> Steps for Top-Down Heapification:

     -> Remove the root: The root element is removed from the heap.
     -> Heapify the root: The last element in the heap is moved to the root position.
     -> Sift down: The new root element is sifted down to its correct position to restore the heap property.
                   This involves comparing the root with its children and swapping it with the larger child if necessary.
                   This process is repeated until the root is in its correct position or there are no more children to compare it with.
     -> Time Complexity: The time complexity of top-down heapification is O(log n), where n is the number of elements in the heap.
                         This is because, in the worst case, the root element may need to be sifted down through the entire height 
                         of the heap.

  >>>> Bottom-Up Heapification

     -> Bottom-up heapification is the process of maintaining the heap property from the leaves up to the root.
     
     -> This approach is typically used in operations that involve inserting a new element into the heap, which can potentially 
        disrupt the heap property.

    >>> Steps for Bottom-Up Heapification:

       -> Insert the new element: The new element is inserted at the end of the heap.
       -> Sift up: The new element is sifted up to its correct position to restore the heap property.
                   This involves comparing the new element with its parent and swapping it with the parent if necessary.
                   This process is repeated until the new element is in its correct position or it becomes the root.

       -> Time Complexity: The time complexity of bottom-up heapification is O(log n), 
                           where n is the number of elements in the heap.
                           This is because, in the worst case, the new element may need to be sifted up through the entire
                            height of the heap.                       

   >>>>>> Comparison

      -> Top-Down Heapification is used when the root element is removed, which can disrupt the heap property.
          -> It involves sifting down the new root to its correct position.
      
      -> Bottom-Up Heapification is used when a new element is inserted, which can disrupt the heap property.
         It involves sifting up the new element to its correct position.                         



...........................How To Check BST is a Subset of X ...........................

-> To check if a binary search tree (BST) is a subset of another BST (let's call it BST X),
   you can perform an in-order traversal of both trees and compare the elements.

-> The idea is to ensure that every element in the first BST (let's call it BST Y) is also present in BST X. 

 >>> Here's a step-by-step approach to achieve this:

   >> Step 1: In-Order Traversal of BST Y
              Perform an in-order traversal of BST Y. This traversal visits the nodes in ascending order.

   >> Step 2: In-Order Traversal of BST X
              Perform an in-order traversal of BST X. This traversal visits the nodes in ascending order.

   >> Step 3: Compare the Elements
              While traversing both trees, compare the elements of BST Y with those of BST X.
              If an element from BST Y is not found in BST X, then BST Y is not a subset of BST X.

   >> Step 4: Check for BST Y's Completeness
              After the traversal, if all elements of BST Y are found in BST X, and BST Y has fewer elements than BST X,
              then BST Y is a subset of BST X.
-> Time Complexity
   
   The time complexity of this approach is O(n + m), 
   where n is the number of nodes in BST Y and m is the number of nodes in BST X.
   This is because each tree is traversed once.

-> Space Complexity
   
   The space complexity is O(n + m), as we need to store the elements of both trees in lists for comparison. 


.........................Adjacency Lists And Adjacency Matrices........................

 >>> Adjacency List 

  -> An adjacency list is a collection of unordered lists used to represent a finite graph.
     Each list describes the set of neighbors of a vertex in the graph.

   >> Advantages:

     -> Space Efficiency: Adjacency lists are space-efficient for sparse graphs,
                         where the number of edges is much less than the number of vertices squared.
                         This is because each vertex only stores its neighbors, not all possible connections.
     
     -> Fast Operations: Adding an edge or removing an edge is fast because it involves adding or 
                         removing an element from a list.
   >> Disadvantages:

      -> Slow Lookups: Checking if an edge exists between two vertices can be slow because it requires searching through 
                       the list of one of the vertices.

      -> Memory Overhead: Each vertex has a list of its neighbors, which can lead to higher memory usage compared 
                          to adjacency matrices, especially for dense graphs.


 >>> Adjacency Matrix

   -> An adjacency matrix is a square matrix used to represent a finite graph.
   -> The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph.

   >> Advantages:

      -> Fast Lookups: Checking if an edge exists between two vertices is fast because it involves accessing a single element 
                       in the matrix.
      -> Easy to Iterate: It's straightforward to iterate over all edges in the graph, which can be useful for certain algorithms.
   
   >>Disadvantages:

      -> Space Inefficiency: Adjacency matrices are space-inefficient for sparse graphs, where the number of edges is much
                             less than the number of vertices squared.
                             This is because the matrix has a size of n x n, where n is the number of vertices,
                             regardless of the actual number of edges.
      -> Slow Operations: Adding an edge or removing an edge can be slow because it involves updating multiple elements 
                          in the matrix.                     