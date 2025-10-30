// let name=[]
// let name2= 'astha'

// console.log(name||name2);


let name='ravita'
let name2= null
let name3= 'astha'
let name4= 'mukul'

console.log((name||name2)??(name3??name4));


// () → Parentheses → Highest priority

// ?? → Nullish coalescing

// || → Logical OR


let check=null
let checks= undefined
let result= check??checks
console.log(result);


