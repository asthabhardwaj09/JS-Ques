// function expensive() {
//   console.log("expensive() called");
//   return 100;
// }
// let val = 5;
// console.log(expensive() ?? val); // prints 100 (expensive() IS called)


let name = null;
let othername = 'astha';
name ??= othername;
console.log(name);
console.log(othername);

let name1 =null
let othername2= 'ravita'
console.log(name1??othername2);
console.log(name1);
console.log(othername2);



// example for react project


// function UserCard({ name, age }) {
//   const displayName = name ?? "Guest";
//   const displayAge = age ?? "Not Provided";

//   return (
//     <div>
//       <h2>{displayName}</h2>
//       <p>Age: {displayAge}</p>
//     </div>
//   );
// }

// // Usage
// <UserCard name="" age={null} />







