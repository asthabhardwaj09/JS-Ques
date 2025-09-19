// let nam1= "astha"
// let nam2= "ravita"

// for(i=0; nam1.length=)



let str1 = "astha";
let str2 = "ravita";

let result = "";
let maxLength = Math.max(str1.length, str2.length);
// console.log(maxLength);


for (let i = 0; i < maxLength; i++) {
  if (i < str1.length) {
    result += str1[i]; // astha se char lo
    // console.log(result);
    
  }
  if (i < str2.length) {
    result += str2[i]; // ravita se char lo
    // console.log(result);
  }
}

// console.log(result); // Output: arsahtavita


//--------------------------------------

let nam1="astha"
let nam2="ravita"
let final=""

let maxlength= Math.max(nam1.length, nam2.length)

for(i=0; i<maxlength; i++){
    if(i<nam1.length){
        final=final+nam1[i]
    }
    if(i<nam2.length){
        final=final+nam2[i]
    }
}
console.log(final);

//-------------

if([]){
    console.log("absent");
    
}
else{
    console.log("present");
}

let obj={
    a:{
        b:undefined
    }
} 

console.log(obj.a?.b?.c?.d??"astha");
