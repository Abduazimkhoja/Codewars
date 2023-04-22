// https://www.codewars.com/kata/52597aa56021e91c93000cb0

let moveZeros = (a) => [...a.filter(v => v !== 0), ...a.filter(v=> v === 0)]