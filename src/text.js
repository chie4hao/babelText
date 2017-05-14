import fs from "fs"
//import react from "react"
let a = function() {
  return new Promise(function(resolve, reject) {
    resolve(3);
  })
}

const ak=[1,2,3].map((x)=>x+1);
console.log(ak);
fs.stat('package.json',function(err,stat){
  console.log(stat);
})
