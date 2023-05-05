// https://www.codewars.com/kata/54da5a58ea159efa38000836

let findOdd = (a) => {
   let o = {};
   for (i of a) i in o ? o[i]++ : (o[i] = 1);
   for (i in o) if (o[i] % 2 != 0) return +i;
};
