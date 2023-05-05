// https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript

let arr = [
   ["H", "H", "W", "O"],
   ["W", "W", "W", "W"],
   ["H", "W", "O", "O"],
];

function separateLiquids(arr) {
   let sort = ["O", "A", "W", "H"];
   let res = "";

   sort.forEach((a) => {
      arr.join(",")
         .split(",")
         .forEach((b) => {
            if (a === b) res += b;
         });
   });

   return arr.map((a, ai) => a.map((b, bi) => res[bi + ai * a.length]));
}

console.log(separateLiquids(arr));
