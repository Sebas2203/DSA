//Implementaion using a For Loop
console.log("FOR LOOP");
let prev2 = 0;
let prev1 = 1;

console.log(prev2); // 0
console.log(prev1); // 1

for (let i = 0; i < 19; i++) {
  let newNumber = prev1 + prev2;
  console.log(newNumber);
  prev2 = prev1;
  prev1 = newNumber;
}
console.log("-----------------------------------");

// Implementation Using Recursion
console.log("RECURSION");
console.log(0);
console.log(1);
let count = 2;

const fibonacci = (num1, num2) => {
  if (count <= 19) {
    newFibo = num1 + num2;
    console.log(newFibo);
    num2 = num1;
    num1 = newFibo;
    count++;
    fibonacci(num1, num2);
  }
};

fibonacci(1, 0);
console.log("-----------------------------------");

//Finding The nth Fibonacci Number Using Recursion
console.log("nTH");

const F = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return F(n - 1) + F(n - 2);
  }
};

console.log(F(19));
