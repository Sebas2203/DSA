# Arrays

Is a data structure that stores a collection of elements of the same data type.

In JavaScript an array can be created like this:

```javascript
let array = [4, 2, 3, 5, 1];
console.log(array);
```

Are used by many algorithms for example, can be used to look through an array to [**find the lowest value**](./lowest.js).

# Bubble Sort

A simple sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order

How it works:

- **Comparison and Swapping**: The algorithm starts by comparing the first two elements of the list.
- **Iteration**: If the elements are in the wrong order(the first element is greater than the second when sorting in ascending order), they are swapped.
- **Pass**: This comparison and swapping process continues for each pair of adjacent elements in the list, moving through the list from beginning to end. Each pass through the list places the largest unsorted element in its correct position.
- **Repetition**: The algorithm repeats these passes through the list until no more swaps are needed. This signifies that all elements are in their correct sorted positions.

```javascript
//step 1
let numbers = [4, 2, 3, 5, 1];
//step 2
let numbers = [2, 4, 3, 5, 1];
//step 3
let numbers = [2, 3, 4, 5, 1];
//step 4
let numbers = [2, 3, 4, 1, 5];
//step 5
let numbers = [2, 3, 1, 4, 5];
//step 6
let numbers = [2, 1, 3, 4, 5];
//step 7
let numbers = [1, 2, 3, 4, 5];
```

Let's check some examples:

- [Bubble Sort Implementation](./bubbleSort.js)
- [Bubble Sort Improvement](./bubbleSort.js)
