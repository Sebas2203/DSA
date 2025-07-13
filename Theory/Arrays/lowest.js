//let's find the lowest value

let numbers = [45, 22, 13, 75, 100];

let minValue = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minValue) {
    minValue = numbers[i];
  }
}

console.log(`Lowest Value: ${minValue}`);
