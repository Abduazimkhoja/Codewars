// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

let array = [
   [1, 2, 3, 4, 5],
   [6, 7, 8, 9, 10],
   [11, 12, 13, 14, 15],
   [16, 17, 18, 19, 20],
   [21, 22, 23, 24, 25],
];

const snail = (array) => {
   let res = [];
   while (array[0]) { // пока array не пустой выполнять этот цикл
      res.push(array.splice(0, 1)); // вырезаем первый под массив [1, 2, 3, 4, 5]
      array.forEach((v) => res.push(v.splice(-1, 1))); // вырезаю последний элемент под массива [10,15,20,25]
      res.push(array.splice(-1, 1).flat(1).reverse()); // вырезаю последний под массив и переварачиваю его [21, 22, 23, 24, 25] => [25, 24, 23, 22, 21],
      let reverse = []; // пустой массив чтобы собрать первые элементы под массива и развернуть их
      array.forEach((v) => reverse.push(v.splice(0, 1))); // вырезаю певрый элемент под массива [6,11,16]
      res.push(reverse.flat(1).reverse()); // переварачиваю массив [16,11,6] и добавляю в res
   }
   return res.flat(2); // возврашаю разворачивая под массивы
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
