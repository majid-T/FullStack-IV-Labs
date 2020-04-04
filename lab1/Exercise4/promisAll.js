const promise1 = 101;
const promise2 = 'follow the light';
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 3*1000, 'rabbit.. neo');
});

Promise.all([promise1, promise2, promise3]).then((values)=> {
  console.log(values);
});
