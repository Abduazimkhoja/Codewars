// https://www.codewars.com/kata/52fba66badcd10859f00097e

let disemvowel = (str) =>
   str
      .split("")
      .filter((val) => !"aeiouAEIOU".includes(val))
      .join("");
