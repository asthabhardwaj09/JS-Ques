let one= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise one");
        resolve()
    },2000)
})

one.then(function(){
    console.log("promise one successfully resolved")
})

const two= new Promise(function(resolve,reject){
    // let a=22
    // let b=1
    // console.log(a+b);
    setTimeout(function(){
        console.log("Radhey Radhey");
    },4000)
    resolve()
})

two.then(function(){
    console.log("promise two successfully resolved");
    
})
