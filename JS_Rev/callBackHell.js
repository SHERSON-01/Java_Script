function purchasecake(callback){
    setTimeout(() => {
      console.log("Cake purchased");  
    },2000);
    callback();
};
function curtaindec(callback){
    setTimeout(() => {
        console.log("Curtain down");
    },2000);
    callback();
};
function ballons(callback){
    setTimeout(() => {
        console.log("Ballons Released");
    }, 2000);
    callback();
};

function cakecutting(){
    return new Promise 
    setTimeout(() => {
        console.log("cake cutting");
    },2000)
};

// console.log("Happy Birthday:1");
// console.log("Happy Birthday:1");
// purchasecake();
// console.log("Happy Birthday:1");
// console.log("Happy Birthday:1");
// curtaindec();
// console.log("Happy Birthday:1");
// console.log("Happy Birthday:1");
// ballons();
// console.log("Happy Birthday:1");
// console.log("Happy Birthday:1");
// cakecutting();

// callback hell
// purchasecake(() =>{
//     curtaindec(() =>{
//         ballons(() =>{
//             cakecutting();
//         });
//     });
// });

// promise

purchasecake()
    .then(() => curtaindec())
    .then(() => ballons())
    .then(() => cakecutting())
    .catch((e) => console.log(e))
    .finally(() => console.log("happily ended"));