// deep copy and shallow copy

// let obj1 = {
//     a: 100,
//     b: 200,
//     c: {
//         d: 300,
//         e: 400
//     }
// }

// let obj2= Object.assign(obj1)
// obj2.c.d=20
// console.log(obj1);
// console.log(obj2);


let obj2 = { a: 1, b: { c: 2 } };
let shallow = { ...obj2 }; // shallow copy

shallow.a = 99;
console.log(obj2.a);






// let obj1=[["aaple",1,"astha",5,6,7],["sangya","aditi","ravita"]]

// let obj2 = { ...obj1 }  //shallow copy
// // let obj2= Array.from(obj1)
// obj2[1][1] = 500
// console.log(obj1);
// console.log(obj2);

