// https://www.codewars.com/kata/514b92a657cdc65150000006

let solution = (n) => {
   let sum = 0;
   for (let i = 0; i < n; i++) i % 3 == 0 || i % 5 == 0 ? (sum += i) : 0;
   return sum;
};
