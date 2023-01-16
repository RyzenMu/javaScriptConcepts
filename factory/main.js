// Factory Function

function createperson(name){

    let person = {
        name : name,
        display : function (){
            console.log(this.name)
        },
    };
    return person;
};



let anbu = createperson('Anbuarasan');

console.log(anbu.name);
anbu.display();


let anna = createperson('Annanannn');

console.log(anna.name);
anna.display();



 

