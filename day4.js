// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

//closure code

function names(){
    let hername = "ravita"   // yaha local rakha

    function anothername(){
        // console.log("Astha love", hername);
        console.log("yes you did it");
        
    }

    return anothername; // function ko return kar diya
    // anothername()
}

const friendname = anothername(); // names() call karke anothername return milega
friendname(); // "Astha love ravita"
// friendname;

console.log("astha bhardwaj");


friendname();