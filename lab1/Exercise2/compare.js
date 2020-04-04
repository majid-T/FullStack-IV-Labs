const numArr = [1,2,5,10,4,200];


const compareNumToTen = (inArr)=>{
    return new Promise((resolve,reject)=>{
        for(num of inArr){
            if (num > 10){
                reject(`${num} is bigger than 10..`);
            }
        }
        resolve('All numbers are less than 10');
    });
};

compareNumToTen(numArr)
    .then((data)=>{
        console.log(data);
    })
    .catch((data)=>{
        console.log(`ERROR: ${data}`);
    });
