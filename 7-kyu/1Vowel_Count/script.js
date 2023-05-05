// https://www.codewars.com/kata/54ff3102c1bad923760001f3

let arr = ["a", "e", "i", "o", "u"];
function getCount(str) {
  let r = 0
  for (i of str) arr.includes(i) ? r++:0
  return r
}