// for in loop

let list1 = ['aaa', 'bbb', 'ccc'];

for (let item in list1){
    console.log(item);
    console.log(list1[item]);
}


let remote = {
    brand : "Bluestar",
    color : "white",
    buttons : 14,
    display : "led",
};

for (let prop in remote){
    console.log(prop + ' : ' + remote[prop]);
}