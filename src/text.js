import b from "babel-polyfill"
let a = function() {
  return new Promise(function(resolve, reject) {
    resolve(3);
  })
}

const ak=[1,2,3].map((x)=>x+1);
console.log(ak);
