// factory function example 1

function penDrive(name){
    let prop = {
        name : name,
        display : function (){
            console.log(`the name of the drive : ${this.name}`);
        }
    }
    return prop;
}


let penDrive1 = penDrive('sandisk');
let penDrive2 = penDrive('western Digital');
let penDrive3 = penDrive('Zebronics');


console.log(penDrive1.name);
console.log(penDrive2.name);
console.log(penDrive3.name);



penDrive1.display();
penDrive2.display();
penDrive3.display();



