const myNums=[1,2,3,4]

const mytotal= myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} currval:${currval}`);
    return acc+currval
},0)

console.log(mytotal);


const course=[
    {
        title:"js",
        price:999
    },
    {
        title:"py",
        price:1999
    },
    {
        title:"ds",
        price:2999
    },
]

const myCourses= course.reduce((acc,currVal)=>{
    return acc+currVal.price
},0)

console.log(myCourses);
