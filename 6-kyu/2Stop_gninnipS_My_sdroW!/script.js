// https://www.codewars.com/kata/5264d2b162488dc400000001

let spinWords = (s) =>
   s
      .split(" ")
      .map((v) => (v.length >= 5 ? [...v].reverse().join("") : v))
      .join(" ");
