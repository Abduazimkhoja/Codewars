// https://www.codewars.com/kata/583d171f28a0c04b7c00009c/train/javascript

// let A = [1, -2, 3, 4, -5, -4, 3, 2, 1];
// let ranges = [
//    [1, 3],
//    [0, 4],
//    [6, 8],
// ];

// const maxSum = (arr, range) => {

// }
// Math.max(...range.map((v) => arr.slice(v[0], v[1]+1).reduce((a, b) => a + b)));
// range.map((v) => arr.slice(v[0], v[1]+1).reduce((a, b) => a + b)).sort((x,y) =>  y-x)[0]

// console.log(maxSum(A, ranges))

const maxSum = (arr, range) => Math.max(...range.map((v) => arr.slice(v[0], v[1]+1).reduce((a, b) => a + b)));

