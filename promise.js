////////////////////////// PROMISE SEIMPLE SYNTAX //////////////////////////////
let prom = new Promise((resolve, reject) => {
  let x = 5;
  resolve(x)
})
prom.then(res => console.log(res))

////////////////////PROMISE EXAMPLE WITH SET TIMEOUT//////////////////
let prom1 = new Promise((resolve, reject)=>{
  let y = 5;
  setTimeout(() => {
    resolve(y)
  }, 2000);
})
prom1.then((res)=>{
  console.log(res);
})
///////////////////****PROMISE WITH FETCH*******////////////////////
let url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then(response => response.json())
  .then(data => console.log("Results wit fetch,names :", data.map(item=> item.name)))
//////////////////////  ASYNC AWAIT  /////////////////////////
const urlAsync = "https://jsonplaceholder.typicode.com/users";

fetchUsers = async ()  => {
  const response = await fetch(urlAsync)
  return response.json();
}
fetchResponse = async () => {
  const dataAsync = await fetchUsers(url);
  console.log("\n"+"Response with Async/Await, usernames :", dataAsync.map(item => item.username));
}
fetchResponse();
/////////////////////// PROMISE ALL /////////////////////////////
let promise1 = new Promise((resolve, reject)=>{
  let p1 = "Promise 1"
  resolve(p1)
})
let promise2 = new Promise((resolve, reject)=>{
  let p2 = "Promise 2"
  resolve(p2)
})
let promise3 = new Promise((resolve, reject)=>{
  let p3 = "Promise 3"
  resolve(p3)
})
Promise.all([promise1, promise2, promise3])
.then((res)=>{
  console.log("Promise.all will run after all promises are resolved-like this example :" + res.map( item => '\n'+ item + '-condition:"resolved!"'));
})
