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
