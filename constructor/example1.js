// constructor function

function Phones(name){
    this.name = name;
    this.display = function (){
        console.log(`the name of the phone is ${this.name}`);
    };
};


let phone1 = new Phones('Micromax');
let phone2 = new Phones('Samsung');


console.log(phone1.name);
console.log(phone2.name);


phone1.display();
phone2.display();


