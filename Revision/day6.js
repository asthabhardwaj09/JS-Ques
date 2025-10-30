one(4)

function one(num){
    total=num+2
    // console.log(total);
    
}

//one(4)

//two()

const two=function(){
    sum=2
}
//two()

// console.log(username1);

const username1= "astha bhardwaj"

// console.log(username2);

var username2= "Ravita Gautam"

// console.log(username3);

let username3= "Mukul Kushwaha"

//Arrow func
let obj1={
    student_name:"astha",
    email:"astha@example.com",
    phone_number:1234

}

const three=(obj1)=>{
    result=obj1.email
    console.log(result);
    
}

three(obj1)


//normal func
let obj2={
    website:"chatgpt",
    purpose:"study",
    four(){
        console.log(this.purpose);
        
    }
}
obj2.four()




// function(){
    
// }


const obj = {
  name: "Astha",
  
  // Normal function inside setTimeout
  normalMethod: function () {
    setTimeout(function () {
      console.log("Normal:", this.name);
    }, 1000);
  },

  // Arrow function inside setTimeout
  arrowMethod: function () {
    setTimeout(() => {
      console.log("Arrow:", this.name);
    }, 1000);
  }
};

obj.normalMethod(); // Normal: undefined (or window in browser)
obj.arrowMethod();  // Arrow: Astha
