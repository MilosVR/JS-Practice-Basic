//////////////////// BASIC EXAMPLE WITH OBJECT //////////////////////
let obj1 = [
  {name:"Mark", age:"24"},
  {name:"Antony", age:"34"},
  {name:"Vanessa", age:"26"}
]
////ADDING NEW VALUE
obj1[0].isActiveMember = true;
///DIFERENT WAY TO ADD OBJECT PROP
obj1[1]["isActiveMember"] = false;
console.log(obj1);

////ITERATING THROUGH OBJECT
let objNames = {
  name:'Ichigo',
  name1:'Kaname',
  name2:'Gin',
  name3:'Ulquiora',
  name4:'Aizen'
};

console.log(Object.keys(objNames) + " - %c are object keys.", 'background: black; color: lightgreen');
console.log(Object.values(objNames) + " - %c are object values", 'background: black; color: lightgreen');
console.log(Object.entries(objNames) + " - %c are object entries", 'background: black; color: lightgreen');


//////////////////////// OBJECT DESTRUCTURING ////////////////////////
let objDestr = {name:'Milos', age:'31', planet:'Earth'};
({name} = objDestr);
console.log('\n'+ name + "  %c object destrurcturing ", "background:black; color:white");
////////////////////// OBJECT ASSIGN  ///////////////////////
let objToCopy = {name:"Aizen", type:'Arrancar', kill:'soul-reaper'};
let copyObject = Object.assign({}, objToCopy);//Here we make a copy to the original object
objToCopy.SP = 1732; //adding a new value to the objToCopy not inflict a copied object
console.log('\n'+' %c copied object ', 'background:black; color:lightblue',copyObject);
console.log(' %c original object ', 'background:black; color:lightblue',objToCopy);
//if we add in Object.assign({SP:1732}, objToCopy), value will be added to copied object
let copiedObject = Object.assign({SP:1732}, objToCopy);
console.log(' %c copiedObject with new value SP ','background:black; color:lightblue',copiedObject);
