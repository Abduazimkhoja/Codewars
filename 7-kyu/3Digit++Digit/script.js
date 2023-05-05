// https://www.codewars.com/kata/546e2562b03326a88e000020

let squareDigits = (num) =>
   +`${num}`
      .split("")
      .map((val) => val ** 2)
      .join("");
