// https://www.codewars.com/kata/59f70440bee845599c000085

var array = [
   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
   ["name2", 110, ["B", "A", "A", "A"]],
   ["name3", 200, ["B", "A", "A", "C"]],
   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]],
];

function findHack(arr) {
   let garbage = [];
   arr.forEach((value) => {
      let obj = {
         A: [30, 0],
         B: [20, 0],
         C: [10, 0],
         D: [5, 0],
      };
      let res = 0;

      value[2].forEach((letter) => {
         if (letter in obj) {
            res += obj[letter][0];
            obj[letter][1] = obj[letter][1] + 1;
         } else obj["C"][1] = obj["C"][1] +1
      });
      if (value[2].length >= 5 && obj["C"][1] == 0 && obj["D"][1] == 0 )
         res += 20;
      if (res > 200 && value[1] == 200) res = 200;
      if (value[1] !== res) garbage.push(value[0]);
   });
   return garbage;
}
console.log(findHack(array));
