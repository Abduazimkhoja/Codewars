// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

let array = [
   [1, 2, 3, 4, 5],
   [6, 7, 8, 9, 10],
   [11, 12, 13, 14, 15],
   [16, 17, 18, 19, 20],
   [21, 22, 23, 24, 25],
];

snail = function (array) {
   let res = [];
   while (array[0]) {
      res.push(array.splice(0, 1));
      array.forEach((v) => res.push(v.splice(-1, 1)));
      res.push(array.splice(-1, 1).flat(1).reverse());
      let reverse = [];
      array.forEach((v) => reverse.push(v.splice(0, 1)));
      res.push(reverse.flat(1).reverse());
   }
   return res.flat(2);
};

console.log(snail(array));

// function snail(array) {
//    var vector = [];
//    while (array.length) {
//       vector.push(...array.shift());
//       array.map((row) => vector.push(row.pop()));
//       array.reverse().map((row) => row.reverse());
//    }
//    return vector;
// }
