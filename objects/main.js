// Objects


 let person = {
    name : 'Anbu',
    display : function (){
        console.log(this.name)
    },
 };

 console.log(person.name);
 console.log(person['name']);
 (person.display());

 

