function sum(){
    console.log("6");
    console.log("7");
}
function main(){
    setTimeout(() =>{
        console.log("1");
        console.log("2");
        console.log("3");
        sum();
        console.log("4");
        console.log("5");
    },2000)
}
console.log("a");
console.log("b");
main();
console.log("c");
console.log("d");
