// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

let = num = 4895;

function productFib(num) {
   let a = 1,
      b = 1;
   for (let i = 0; a * b < num; ) {
      i = a + b;
      a = b;
      b = i;
   }
   if (a * b === num) return [a, b, true];
   else return [a, b, false];
}
console.log(productFib(num));