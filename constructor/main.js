// constructor function

function CreateHeadSet(name){
    this.name = name;
    this.display = function(){
        console.log(`the name of head set is ${this.name}`);
    }
   return this 
};


let headSet1 = new CreateHeadSet('Sony');
let headSet2 = new CreateHeadSet('Panasonic');

console.log(headSet1.name);
console.log(headSet2.name);


console.log(headSet1.display());
console.log(headSet2.display());


