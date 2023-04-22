// https://www.codewars.com/kata/525c65e51bf619685c000059

let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
let available = { sugar: 500, flour: 2000, milk: 2000 };

function cakes(recipe, available) {
   let res = [];
   for (i of Object.entries(recipe)) {
      res = [...res, Math.trunc(available[i[0]] / i[1])];
   }
   if (!Math.min(...res)) return 0;
   else return Math.min(...res);
}

console.log(cakes(recipe, available));
