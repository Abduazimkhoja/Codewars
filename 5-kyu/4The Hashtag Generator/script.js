// https://www.codewars.com/kata/52449b062fb80683ec000024

const generateHashtag = (str) =>
   str.replace(/ /g,'') != false && str.replace(/ /g,'').length < 140
      ? `#${str
           .split(" ")
           .filter((v) => v != "")
           .map((v) => `${v[0].toUpperCase()}${v.slice(1)}`)
           .join("")}`
      : false;

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
