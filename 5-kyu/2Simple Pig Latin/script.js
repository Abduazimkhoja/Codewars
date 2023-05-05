// https://www.codewars.com/kata/520b9d2ad5c005041100000f

let pigIt = (str) => str.split(" ").map(([a, ...b]) => !"!?".includes(a) ? `${b.join("")}${a}ay`:a).join(" ")