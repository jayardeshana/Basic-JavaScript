function calculateAreaOfRectangle(length, width) {
  return length * width;
}

let length = parseFloat(prompt("Enter the length of the rectangle:"));
let width = parseFloat(prompt("Enter the width of the rectangle:"));

const result = calculateAreaOfRectangle(length, width);

console.log("result", result);
