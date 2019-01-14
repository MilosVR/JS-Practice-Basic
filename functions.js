//Functions declaration
function myFunc(){
  console.log("Hello");
}
myFunc();
//with ES6
myFuncES6 = () => {
  console.log("Hello from ES6");
}
myFuncES6()
//function expression
let myFuncExpr = function myFunc2(){
  console.log("Function expression");
}
myFuncExpr()
//with ES6
let myFuncDeclar = myFunc3 = () => { console.log("Function declaration")}
myFuncDeclar()


//***********************CALL, APPLY AND BIND *************************//


//*******************CALL**********************//
// If we want to to execute function of the object we use CALL
let objC = {value: 5};
function funcCall(a){
  console.log(this.value + a); //With CALL this is refer to objC
}                             //in this case this is {value : 5}
funcCall.call(objC, 8);  //first argument is object, second is argument of
                        //the function funcCall(a <--->8 )
//Call Syntax
//functionName.call( object, functionargunment ) { ...some code}

//******************APPLY********************//
let objA = {value : 10};
function funcApply(a, b, c){
  console.log(this.value + a + b + c);
}
let arr = [1, 2, 3]
funcApply.apply(objA, arr)  //Simular to CALL, but functions arguments
                            //must be an array
