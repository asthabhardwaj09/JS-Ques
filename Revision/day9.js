//closure

function outer(){
    let secret="123"
    function inner(){
        let secret_access="astha"
        console.log(secret+secret_access); 
    }
    inner()
}
outer()
outer()
outer()
outer()

function outer_lexical(){
    let sum=2
    function inner_lexical(){
        let result=sum
        console.log(result);
    }
    inner_lexical()
}
outer_lexical()
