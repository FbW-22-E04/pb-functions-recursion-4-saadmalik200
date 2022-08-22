// Write your code here:

// function fibonacci(num, arr = []) {
//   if (num === 0) {
//     return arr.push(num);
//   }

//   return arr.push(num);
// }

// console.log(fibonacci(0)); // [0]
// console.log(fibonacci(1)); // [ 0, 1 ]
// console.log(fibonacci(3)); // [ 0, 1, 1, 2 ]
// console.log(fibonacci(8)); // [ 0, 1,  1,  2, 3, 5, 8, 13, 21]

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(0)); // [0]
console.log(fibonacci(5)); // [ 0, 1 ]

var fibonacci = function (n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
