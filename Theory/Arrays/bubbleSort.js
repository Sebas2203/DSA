// Bubble Sort
console.log("Bubble Sort");
let numbers = [4, 2, 3, 5, 1];

console.log(`Unsorted: ${numbers}`); //[4, 2, 3, 5, 1];

let n = numbers.length;
// Outer loop - runs through the array multiple times
for (let i = 0; i < n - 1; i++) {
  // Inner loop - compares adjacent elements
  for (let j = 0; j < n - i - 1; j++) {
    // If elements are in the wrong order, swap them
    if (numbers[j] > numbers[j + 1]) {
      // Swap operation using a temporary variable
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

console.log(`Sorted: ${numbers}`); // [1, 2, 3, 4, 5]
console.log("-----------------------------");

// Bubble Sort Improvement
console.log("Bubble Sort Improvement");

let numbers2 = [4, 2, 3, 5, 1];

console.log(`Unsorted: ${numbers2}`); // [4, 2, 3, 5, 1]

let ns = numbers2.length;
let swapped; // flag to track if a swap occurred during a pass

// Outer loop - runs through the array multiple times
for (let i = 0; i < ns - 1; i++) {
  swapped = false; // reset the flag at the start of each pass

  // Inner loop - compares adjacent elements
  for (let j = 0; j < ns - i - 1; j++) {
    // If elements are in the wrong order, swap them
    if (numbers2[j] > numbers2[j + 1]) {
      // Swap operation using a temporary variable
      let temp = numbers2[j];
      numbers2[j] = numbers2[j + 1];
      numbers2[j + 1] = temp;

      swapped = true; // a swap occurred
    }
  }

  // If no swaps happened in the inner loop, the array is already sorted
  if (!swapped) {
    break; // break early to optimize
  }
}

console.log(`Sorted: ${numbers2}`); // [1, 2, 3, 4, 5]
