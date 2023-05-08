// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// let arr = ["NORTH", "SOUTH", "EAST", "WEST"];

// let obj = {
//    NORTH: "SOUTH",
//    SOUTH: "NORTH",
//    WEST: "EAST",
//    EAST: "WEST",
// };

// function dirReduc(arr) {
//    return arr.filter((v, i) => {
//       let res = arr
//       if (v !== res[i + 1] && res[i + 1] !== obj[v]) return true
//       else arr.split()
//    });
//    // arr.forEach((v, i) => {
//    //    if (v === arr[i + 1] && arr[i+1] === obj[v]) arr.split(i, i+2)
//    // })
//    return arr;
// }

// console.log(dirReduc(arr));

// NORTH SOUTH WEST EAST
// СЕВЕР ЮГ ЗАПАД ВОСТОК


// const maxSum = (arr, range) => Math.max(...range.map((v) => arr.slice(v[0], v[1]+1).reduce((a, b) => a + b)));

// const maxSum = (arr, range) => {
//    range = range.map((v) => arr.slice(v[0], v[1] + 1).reduce((a, b) => a + b, 0));
//    return (Math.max(...range))
// };

// console.log(maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]))