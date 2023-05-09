// https://www.codewars.com/kata/514a024011ea4fb54200004b

let str = "https://www.google.co.jp";

const domainName = (str) => {
   let search = ["https://www.", "http://www.", "https://", "http://", "www."];
   if (str.startsWith(search[0]))
      return str.slice(search[0].length).split(".")[0];
   else if (str.startsWith(search[1]))
      return str.slice(search[1].length).split(".")[0];
   else if (str.startsWith(search[2]))
      return str.slice(search[2].length).split(".")[0];
   else if (str.startsWith(search[3]))
      return str.slice(search[3].length).split(".")[0];
   else if (str.startsWith(search[4]))
      return str.slice(search[4].length).split(".")[0];
   else return str.split(".")[0];
};

domainName(str);

// ✅
// function domainName(url) {
//    url = url.replace("https://", "");
//    url = url.replace("http://", "");
//    url = url.replace("www.", "");
//    return url.split(".")[0];
// } 
