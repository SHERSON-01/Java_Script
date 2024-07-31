// function constructor 
function person(name, age){
    this.name = name;
    this.age = age;
}
const obj = new person("Vinay", "10");
console.log(obj.name);
console.log(obj.age);