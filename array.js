/****************ARRAY  LOOPS*************/
let array = ["Mark", "John", "Lucy", "Antony"];
/***ADDING STRING AT THE END OD THE ARRAY***/
array.push("Stewart")
for (var i = 0; i < array.length; i++) {
  console.log(array[i] + " is on the " + i + "-index position in the array.");
}

let arrObj = [
  {name:"Mark"},
  {name:"Lebron"},
  {name:"Jordan"}
]
arrObj[0]["name"] = "Changin name at 0-index position";
arrObj[2].age = 15; //adding new property
/************LOPPIN THROW THE ARRAY ************/
for (var i = 0; i < arrObj.length; i++) {
  console.log(arrObj[i]);
}

/******CONCAT-return new array*******/
let newArray = array.concat("Concat");
console.log(newArray, array);

////////////////////LOOOP WITH MAP METHOD////////////////////////////
newArray.map((item, index)=>{
  console.log("My name is " + item + ", and i'm at " + index + "-index position.");
})

/////////////////////////FILTER METHOD//////////////////////////////
let filterArray = [12, 52, 56, 57, 78, 24, 68];
let breakpoint = 60
////////////FIND NUMBERS <60 ////////////////
let numbersLessThen60 = filterArray.filter((item, index)=>{
   return item < 60
})
console.log("Numbers less then 60 are :  " + numbersLessThen60);

//////////////////////EXAMPLE WITH REDUCE METHOD ////////////////////////
let arrayReduce = [2, 5, 12, 101, 54, 78, 96];

let reducedNumbers = arrayReduce.reduce((acum, item)=> {
  console.log("acum :"+acum, 'item :', item);
  return acum + item
})
console.log("Result after reduce method is : " + reducedNumbers);

///////////////////////SEARCHING IN ARRAYS////////////////////////////
let sentence = "My motto is: Feel the fear and do it anyway!"
///////////FIND WORD FEEL AND TURN THIS STRING TU ARRAY///////////////
let stringToArray = sentence.split(" ");
let feelString = stringToArray.includes('Feel');
console.log("If it's find the string return boolean true or false, in this case is " +feelString);
//////////////////////////////////////
let findStringIndex = stringToArray.indexOf("Feel");
console.log("Return -1 or index position of the searhing term, ours is "+ findStringIndex + " index position.");
let findString = stringToArray.find(item => item === "Feel")
console.log("If its find return first value, our term is : " + findString);
