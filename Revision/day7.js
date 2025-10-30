const username=()=>{
    console.log("astha");
    
}

//username()

function username2(){
    console.log("krishn");
}

//username2()

const addtwo=(p,q,r)=>{
    let result1=p+q
    console.log(result1);
    
}
//addtwo(1,2)

function addthree(a,b,c){
    let result2=a+b+c
    console.log(result2);
    
}
//addthree(1,2,3)

const check=()=>{
    console.log(arguments);
    
}
//check()

function check2() {
    console.log(arguments);
    
}
// check2()

// const arrowFn = (a, b) => {
//     console.log(arguments); // ❌ ReferenceError
// };
// arrowFn(5, 10);


const arrowFn=()=>{
    console.log(this);
    
}

arrowFn()

function checkingthis(){
    console.log(this);
    
}

checkingthis()