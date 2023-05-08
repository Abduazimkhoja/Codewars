// let res = 0, a = 0, b=1;
// function productFib(prod){
//   if(res >= prod) return [a, b, res === prod]
//   else {
//     res = a*b
//     a = b
//     b = res
//     return productFib(prod)
//   }
// }
// console.log(productFib(324));

// let res = {
//    NORTH: "SOUTH",
//    SOUTH: "NORTH",
//    WEST: "EAST",
//    EAST: "WEST",
// };

// function dirReduc(arr) {
//    arr = arr.filter((v, i) => {
//       if (v !== arr[i + 1]) return v;
//    });
//    arr = arr.filter((v, i) => {
//       if (arr[i+1] !== res[v]) {
//          arr.splice(i+1)
//          return v
//       }
//    });
//    console.log(arr);
// }
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

// // console.log(res);

// 1) https://www.codewars.com/kata/5266876b8f4bf2da9b000362
// function likes(names) {
//    let arr = [
//       `no one likes this`,
//       `${names[0]} likes this`,
//       `${names[0]} and ${names[1]} like this`,
//       `${names[0]}, ${names[1]} and ${names[2]} like this`,
//       `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
//    ]
//    return names.length > 3 ? arr[4] : arr[names.length]
// }
// console.log(likes(["Alex", "Jacob", "Mark", "Max",  "Max"]));

// function persistence(num) {
//    if (num.toString().length ==1) return 0
//    const sum = () => {
//       let sum = num.toString().split("").reduce((a,b) => {
//          return +a * +b
//       })
//       if (sum < 10) return persistence(sum)
//       else if (sum == 0) {
//          return 1
//       } else return sum
//    }
//    return sum()
// }

// console.log(persistence(3715603));




// let arr = [ // 6kyu
//    "1Multiples of 3 or 5",
//    "2Stop gninnipS My sdroW!",
//    "3Find the odd int",
//    "4Sum of Digits Digital Root",
//    "5Who likes it",
//    "6Array diff",
//    "7Create Phone Number",
//    "8Bit Counting",
//    "9Find The Parity Outlier",
//    "10Duplicate Encoder",
//    "11Replace With Alphabet Position",
//    "12Persistent Bugger",
//    "13Find Cracker",
// ]

// let arr = [ // 5kyu
//    "1Moving Zeros To The End",
//    "2Simple Pig Latin"
// ]


let res = []
arr.forEach(v => {res.push(v.split(" ").join("_"));})

console.log(res.join(" "));