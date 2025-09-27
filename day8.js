const arrowFn = (a, b) => {
    console.log(arguments); // ❌ ReferenceError
};
//arrowFn(5, 10);

let obj2 = {
    website: "chatgpt",
    purpose: "study",
    four: () => {
        console.log(this.purpose);
    }
};
obj2.four(); 
// Output: undefined
